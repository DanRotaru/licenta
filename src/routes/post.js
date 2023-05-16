const express = require('express');
const User = require('../models/User');
const Post = require('../models/Post');
const {Types} = require("mongoose");
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

  if (!title.length) {
    return res.json({error: 'Project title field is required!'});
  }

  if (!category.length) {
    return res.json({error: 'Project category field is required!'});
  }

  if (!language.length) {
    return res.json({error: 'Project language field is required!'});
  }

  if (!summary.length) {
    return res.json({error: 'Project summary field is required!'});
  }

  if (!level.length) {
    return res.json({error: 'Project Level field is required!'});
  }

  if (!price.length) {
    return res.json({error: 'Project price field is required!'});
  }

  if (!description.length) {
    return res.json({error: 'Project description field is required!'});
  }

  const user = await User.findById(req.session.auth).limit(1);
  if (!user) {
    return res.status(401).json({error: 'Unauthorized'});
  }
  let pictureImage;

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

router.get('/get/:id', async (req, res) => {
  // if (typeof req.session.auth === 'undefined') {
  //   return res.status(401).json({error: 'Unauthorized'});
  // }

  const id = req.params.id;
  if (!id) {
    return res.json({error: 'Not specified project id!'});
  }

  let project;

  if (id.startsWith('id')) {
    const numericId = Number(id.replace(/\D/g, ''));
    project = await Post.findOne({postId: numericId}).populate('createdBy', 'avatar first_name last_name userId position email');
  } else {
    if (Types.ObjectId.isValid(id)) {
      project = await Post.findById({_id: id}).limit(1).populate('createdBy', 'avatar first_name last_name userId position email');
    } else {
      return res.json({error: 'Invalid user id!'});
    }

  }

  if (!project) {
    return res.json({error: 'Project not found!'});
  }

  return res.json({success: 1, info: project});

});


router.get('/all', async (req, res) => {
  // if (typeof req.session.auth === 'undefined') {
  //   return res.status(401).json({error: 'Unauthorized'});
  // }

  const projects = await Post.find({}).sort({'_id': -1}).populate('createdBy', 'avatar first_name last_name userId');

  return res.json({success: 1, projects});

});

module.exports = router;
