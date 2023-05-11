const express = require('express');
const User = require('../models/User');
const Post = require('../models/Post');
const router = express.Router();

router.post('/create', async (req, res) => {
  if (typeof req.session.auth === 'undefined') {
    return res.status(401).json({error: 'Unauthorized'});
  }

  const {
    title,
    category,
    language,
    summary,
    tags,
    level,
    price,
    discount,
    discount_amount,
    discount_amount_value,
    discount_end,
    description,
    features,
    youtube,
    faqs
  } = req.body;

  let pictureImage;

  const noRequiredData = (!title || !category || !language || !summary || !tags || !level || !price || !description);

  console.log({
    title,
    category,
    language,
    summary,
    tags,
    level,
    price,
    discount,
    discount_amount,
    discount_amount_value,
    discount_end,
    description,
  })

  if (noRequiredData) {
    return res.json({error: 'All fields are required!'});
  }

  const user = await User.findById(req.session.auth).limit(1);;
  if (!user) {
    return res.status(401).json({error: 'Unauthorized'});
  }

  if (req.files) {
    const picture = req.files.pictureRaw;

    if (picture) {
      const uploadPath = __dirname + '../../../public/uploads/' + picture.name;

      console.log(uploadPath);

      if (!picture.mimetype.startsWith('image/')) {
        return res.json({error: 'Picture must be image!'});
      }

      await picture.mv(uploadPath, function (err) {
        if (err)
          return res.status(500).send(err);
      });

      pictureImage = '/uploads/' + picture.name;
    }
  }

  const newPost = await Post.create({
    createdBy: user._id,
    title,
    category,
    language,
    summary,
    tags,
    level,
    price,
    description,
    features,
    image: pictureImage,
    youtube
  });

  return res.json({success: 1, postId: newPost.postId});
});

router.post('/delete', async (req, res) => {
  if (typeof req.session.auth === 'undefined') {
    return res.status(401).json({error: 'Unauthorized'});
  } else if (!req.body.postId || isNaN(req.body.postId)) {
    return res.status(400).json({error: 'postId is required'});
  }

  const user = await User.findById(req.session.auth, {userId: 1, access: 1});
  if (!user) {
    return res.status(401).json({error: 'Unauthorized'});
  }

  const post = await Post.findOne({postId: req.body.postId}).populate('createdBy', 'userId');
  if (!post || (post.createdBy.userId !== user.userId && user.access === 0)) {
    return res.status(404).json({error: 'Post not found'});
  }

  await Post.deleteOne({postId: post.postId});
  return res.json({success: 1});
});

router.get('/get', async (req, res) => {
  if (typeof req.session.auth === 'undefined') {
    return res.status(401).json({error: 'Unauthorized'});
  }

  const user = await User.findById(req.session.auth, {userId: 1});
  if (!user) {
    return res.status(401).json({error: 'Unauthorized'});
  }

  const posts = await Post.find({}, {postId: 1, data: 1, _id: 0}).populate('createdBy', {userId: 1, email: 1, _id: 0});
  return res.json({success: 1, posts});
});

router.get('/all', async (req, res) => {
  if (typeof req.session.auth === 'undefined') {
    return res.status(401).json({error: 'Unauthorized'});
  }

  const projects = await Post.find({}).populate('createdBy', 'avatar first_name last_name userId');

  return res.json({success: 1, projects});

});

module.exports = router;
