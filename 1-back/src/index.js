const https = require('https');
const express = require('express');
const cookieSession = require('cookie-session');
const mongoose = require('mongoose');
const userRouter = require('./routes/user');
const postRouter = require('./routes/post');
const app = express();
const cors = require('cors');
const fs = require('fs');

require('dotenv').config();

app.use(
  cors({
    origin: 'http://localhost:5000',
    credentials: true,
  }),
);

app.use(
  cookieSession({
    name: process.env.SECRET_NAME,
    keys: [process.env.SECRET_KEY],
    secret: process.env.SECRET_WORD,
    httpOnly: false,
    SameSite: 'None',
    maxAge: 365 * 24 * 60 * 60 * 1000, // 1 year
  }),
);

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set('trust proxy', true);

app.use((req, res, next) => {
  res.setHeader('Content-type', 'application/json; charset=UTF-8');
  next();
});

// const options = {
//   key: fs.readFileSync('key.pem'),
//   cert: fs.readFileSync('cert.pem')
// };

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('http://localhost:' + port));

// https.createServer(options, app).listen(3000, () => console.log('https://localhost:' + port));

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI + '', {serverSelectionTimeoutMS: 5000}, function (err) {
  if (err) {
    console.log('MongoDB Connection Error!');
    app.use((req, res) => {
      return res.json({error: 'MongoDB Connection Error'});
    });

    return;
  }

  const routes = [
    {
      method: "GET",
      url: "http://localhost:3000/api/user/check",
    },
    {
      method: "GET",
      url: "http://localhost:3000/api/post/get",
    }
  ]

  app.get('/', (req, res) => {
    return res.json({success: true, database: 'Connected', routes});
  });

  app.use('/api/user', userRouter);
  app.use('/api/post', postRouter);
});
