const express = require('express');
const User = require('../models/User');
const Post = require('../models/Post');
const router = express.Router();

router.post('/create', async (req, res) => {
    if (typeof req.session.auth === 'undefined') {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    const { title, description, shortDescription, image, language, price, discount, video, faqs, includes, tags} = req.body;

    const noRequiredData = (!title || !description || !shortDescription || !image || !language || !price || !discount || !video || !faqs || !includes || !tags);

    if (noRequiredData) {
        return res.json({ error: 'All fields are required!' });
    }

    const user = await User.findById(req.session.auth);
    if (!user) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    const newPost = await Post.create({
        createdBy: user._id,
        title,
        description,
        shortDescription,
        image,
        language,
        price,
        discount,
        video,
        faqs,
        includes,
        tags
    });

    return res.json({ success: 1, postId: newPost.postId });
});

router.post('/delete', async (req, res) => {
    if (typeof req.session.auth === 'undefined') {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    else if (!req.body.postId || isNaN(req.body.postId)) {
        return res.status(400).json({ error: 'postId is required' });
    }

    const user = await User.findById(req.session.auth, { userId: 1, access: 1 });
    if (!user) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    const post = await Post.findOne({ postId: req.body.postId }).populate('createdBy', 'userId');
    if (!post || (post.createdBy.userId !== user.userId && user.access === 0)) {
        return res.status(404).json({ error: 'Post not found' });
    }

    await Post.deleteOne({ postId: post.postId });
    return res.json({ success: 1 });
});

router.get('/get', async (req, res) => {
    if (typeof req.session.auth === 'undefined') {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    const user = await User.findById(req.session.auth, { userId: 1 });
    if (!user) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    const posts = await Post.find({}, { postId: 1, data: 1, _id: 0 }).populate('createdBy', {userId: 1, email: 1, _id: 0});
    return res.json({ success: 1, posts });
});

module.exports = router;
