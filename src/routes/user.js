const {compare: passwordCompare, hash: passwordHash} = require('bcrypt');
const express = require('express');
const axios = require('axios');
const User = require('../models/User');
const Post = require("../models/Post");
const {Types} = require("mongoose");
const router = express.Router();

require('dotenv').config();
const FRONTEND_PORT = process.env.FRONTEND_PORT || 5000;
const BACKEND_PORT = process.env.BACKEND_PORT || 3000;
const URL = process.env.URL;

const FRONTEND_URL = URL + ':' + FRONTEND_PORT;

// If is true will encrypt passwords using bcrypt
const securePasswords = false;

router.get('/check', async (req, res) => {
  if (!req.session.auth) {
    return res.status(401).json({error: 'Unauthorized'});
  }

  const user = await User.findById({_id: req.session.auth}).limit(1);

  if (!user) {
    return res.status(401).json({error: 'Unauthorized'});
  }

  return res.json({
    success: 1,
    isAuthenticated: true,
    info: user
  });
});

router.post('/auth', async (req, res) => {
  const {email, password} = req.body;

  if (!email || !password) {
    return res.json({error: 'Email and Password are required!'});
  }

  const user = await User.findOne(
    {email, password},
  );

  if (!user) {
    return res.json({error: 'Invalid email or password!'});
  }

  // (securePasswords && !(await passwordCompare(password, user.password))) || (!securePasswords && user.password !== password)

  req.session.auth = user._id.toString();
  return res.json({success: 1, userInfo: user});
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

      return res.redirect(FRONTEND_URL);
      // return res.json({ success: 1 });
    } else {
      const userExistenceCheck = await User.findOne({email: primaryVerifiedEmail}, {userId: 1});
      if (userExistenceCheck) {
        return res.json({error: 'Email already taken'});
      }

      const fullName = githubRes.data.name.split(" ");

      const newUser = await User.create({
        email: primaryVerifiedEmail,
        first_name: fullName[0],
        last_name: fullName[1],
        avatar: githubRes.data.avatar_url,
        password: null,
        githubId: githubRes.data.id,
        regType: 1,
      });
      req.session.auth = newUser._id.toString();
      // localStorage.setItem('userInfo', JSON.stringify(newUser));
      // return res.json({ success: 1 });
      return res.redirect(FRONTEND_URL);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({error: 'Internal error'});
  }
});

router.post('/create', async (req, res) => {
  const {first_name, last_name, email, role, password} = req.body;

  const noRequiredData = (!first_name || !last_name || !email || !role || !password);

  if (noRequiredData) {
    return res.json({error: 'All fields are required!'});
    // return res.status(400).json({ error: 'email and password are required' });
  }

  const userExistenceCheck = await User.findOne({email: email}, {userId: 1});
  if (userExistenceCheck) {
    return res.json({error: 'Email already taken!'});
  }

  // const hashedPassword = !securePasswords ? password : await passwordHash(password, 10);

  const avatar = `https://placehold.co/512x512/2D2B3F/FFFFFF/?text=${first_name[0]}${last_name[0]}`

  const user = await User.create({
    first_name,
    last_name,
    email,
    password,
    avatar,
    userType: role,
  });

  console.log(user);

  req.session.auth = user._id.toString();
  return res.json({success: 1, userInfo: user});
});

router.get('/logout', async (req, res) => {
  req.session = null;

  return res.json({success: 1});
});

router.post('/update1', async (req, res) => {
  if (typeof req.session.auth === 'undefined') {
    return res.status(401).json({error: 'Unauthorized'});
  }

  const {
    name,
    description,
    avatar,
    experience,
    phone,
    website,
    position,
    location,
    education,
    skills,
    socials
  } = req.body;

  const noRequiredData = (!title || !description || !shortDescription || !image || !language || !price || !discount || !video || !faqs || !includes || !tags);

  if (noRequiredData) {
    return res.json({error: 'All fields are required!'});
  }

  const user = await User.findById(req.session.auth);
  if (!user) {
    return res.status(401).json({error: 'Unauthorized'});
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

  return res.json({success: 1, postId: newPost.postId});
});

router.post('/update/:action', async (req, res) => {
  if (typeof req.session.auth === 'undefined') {
    return res.status(401).json({error: 'Unauthorized'});
  }

  const action = req.params.action;
  if (!action) {
    return res.json({error: 'Not specified update action!'});
  }

  const user = await User.findById({_id: req.session.auth}).limit(1);
  if (!user) {
    return res.status(401).json({error: 'User unauthorized'});
  }

  if (action === 'description') {
    const {position, description} = req.body;

    if (req.files) {

      const avatar = req.files.avatar;

      if (avatar) {
        const uploadPath = __dirname + '../../../public/uploads/' + avatar.name;

        console.log(uploadPath);

        if (!avatar.mimetype.startsWith('image/')) {
          return res.json({error: 'Avatar must be image!'});
        }

        await avatar.mv(uploadPath, function (err) {
          if (err)
            return res.status(500).send(err);
        });

        user.avatar = '/uploads/' + avatar.name;
      }
    }

    user.position = position;
    user.description = description;
    await user.save();

    return res.json({success: 1, userInfo: user});

  } else if (action === 'password') {
    const {old_password, new_password} = req.body;

    if (!old_password.length || !new_password.length) {
      return res.json({error: 'Empty old password or new password!'});
    }

    if (old_password !== user.password) {
      return res.json({error: 'Incorrect current password!'});
    }

    if (new_password === user.password) {
      return res.json({error: 'New password cannot be the same as current password!'});
    }

    user.password = new_password;
    await user.save();

    return res.json({success: 1});
  } else {
    return res.json({error: 'Not specified update action!'});
  }


});

router.get('/info/:id', async (req, res) => {
  // if (typeof req.session.auth === 'undefined') {
  //   return res.status(401).json({error: 'Unauthorized'});
  // }

  const id = req.params.id;
  if (!id) {
    return res.json({error: 'Not specified user id!'});
  }

  let user;

  if (id.startsWith('id')) {
    const numericId = Number(id.replace(/\D/g, ''));
    user = await User.findOne({userId: numericId});
  } else {
    if (Types.ObjectId.isValid(id)) {
      user = await User.findById({_id: id}).limit(1);
    } else {
      return res.json({error: 'Invalid user id!'});
    }

  }

  if (!user) {
    return res.json({error: 'User not found!'});
  }

  const projects = await Post.find({createdBy: user._id}).sort({'_id': -1}).populate('createdBy', 'avatar first_name last_name userId');

  const result = {
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    description: user.description,
    position: user.position,
    avatar: user.avatar,
    projects
  }

  return res.json({success: 1, userInfo: result});

});

router.get('/all', async (req, res) => {
  if (typeof req.session.auth === 'undefined') {
    return res.status(401).json({error: 'Unauthorized'});
  }

  const users = await User.find({}, 'first_name last_name avatar description position userId');

  return res.json({success: 1, users});

});

module.exports = router;
