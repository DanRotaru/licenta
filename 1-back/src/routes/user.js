const {compare: passwordCompare, hash: passwordHash} = require('bcrypt');
const express = require('express');
const axios = require('axios');
const User = require('../models/User');
const Post = require("../models/Post");
const router = express.Router();

require('dotenv').config();

// If is true will encrypt passwords using bcrypt
const securePasswords = false;

router.get('/check', async (req, res) => {
  if (!req.session.auth) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const user = await User.findById({ _id: req.session.auth }).limit(1);

  if (!user) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  return res.json({
    success: 1,
    isAuthenticated: true,
    info: user
  });
});

router.post('/auth', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.json({ error: 'Email and Password are required' });
  }

  const user = await User.findOne(
    { email, regType: 0 },
    { userId: 1, password: 1 }
  );

  if (!user || (securePasswords && !(await passwordCompare(password, user.password))) || (!securePasswords && user.password !== password)) {
    return res.json({ error: 'Invalid email or password' });
  }

  req.session.auth = user._id.toString();
  return res.json({ success: 1 });
});

router.get('/auth/github', (_req, res) => {
  return res.json({
    success: 1,
    url: `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&scope=user,repo`,
  });
});

router.get('/auth/github/callback', async (req, res) => {
  if (!req.query.code) {
    // return res.status(401).json({ error: 'code is required' });
    return res.json({error: 'code is required'});
  }

  try {
    const oauthRes = await axios({
      method: 'post',
      url: `https://github.com/login/oauth/access_token?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}&code=${req.query.code}&scope=user,repo`,
      headers: {
        accept: 'application/json',
      },
    });

    const githubRes = await axios({
      method: 'get',
      url: `https://api.github.com/user`,
      headers: {
        Authorization: 'token ' + oauthRes.data.access_token,
        'X-OAuth-Scopes': 'repo, user',
        'X-Accepted-OAuth-Scopes': 'user'
      },
    });

    console.log(githubRes)

    const emailRes = await axios({
      method: 'get',
      url: 'https://api.github.com/user/emails',
      headers: {
        Authorization: 'token ' + oauthRes.data.access_token,
      }
    })

    const filteredData = emailRes.data.filter(item => item.primary && item.verified);
    const primaryVerifiedEmail = filteredData.length ? filteredData[0].email : null;

    const user = await User.findOne({githubId: githubRes.data.id});
    if (user) {
      req.session.auth = user._id.toString();

      console.log(githubRes);
      return res.redirect('http://localhost:5000/dashboard');
      // return res.json({ success: 1 });
    } else {
      const userExistenceCheck = await User.findOne({email: primaryVerifiedEmail}, {userId: 1});
      if (userExistenceCheck) {
        return res.json({error: 'email already taken'});
      }

      const newUser = await User.create({
        email: primaryVerifiedEmail,
        name: githubRes.data.name,
        avatar: githubRes.data.avatar_url,
        password: null,
        githubId: githubRes.data.id,
        regType: 1,
      });
      req.session.auth = newUser._id.toString();
      // return res.json({ success: 1 });
      return res.redirect('http://localhost:5000/');
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({error: 'Internal error'});
  }
});

router.post('/create', async (req, res) => {
  const { first_name, last_name, email, role, password } = req.body;

  const noRequiredData = (!first_name || !last_name || !email || !role || !password);

  if (noRequiredData) {
    return res.status(400).json({error: 'All fields are required!'});
    // return res.status(400).json({ error: 'email and password are required' });
  }

  const userExistenceCheck = await User.findOne({email: email}, {userId: 1});
  if (userExistenceCheck) {
    return res.json({error: 'Email already taken!'});
  }

  // const hashedPassword = !securePasswords ? password : await passwordHash(password, 10);

  const user = await User.create({
    email,
    password,
    first_name,
    last_name,
    regType: role,
  });

  req.session.auth = user._id.toString();
  return res.json({success: 1, userInfo: user});
});

router.get('/logout', async (req, res) => {
  req.session = null;

  return res.json({success: 1});
});

router.post('/update', async (req, res) => {
  if (typeof req.session.auth === 'undefined') {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const { name, description, avatar, experience, phone, website, position, location, education, skills, socials } = req.body;

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

module.exports = router;
