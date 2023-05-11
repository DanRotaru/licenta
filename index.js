const https = require('https');
const express = require('express');
const cookieSession = require('cookie-session');
const mongoose = require('mongoose');
const app = express();
const fileUpload = require('express-fileupload');
const cors = require('cors');
const fs = require('fs');

const userRouter = require('./src/routes/user');
const postRouter = require('./src/routes/post');

require('dotenv').config();

const FRONTEND_PORT = process.env.FRONTEND_PORT || 5000;
const BACKEND_PORT = process.env.BACKEND_PORT || 3000;
const URL = process.env.URL;

const FRONTEND_URL = URL + ':' + FRONTEND_PORT;
const BACKEND_URL = URL + ':' + BACKEND_PORT;

app.use(
  cors({
    origin: FRONTEND_URL,
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

app.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 }
}));

app.use((req, res, next) => {
  res.setHeader('Content-type', 'application/json; charset=UTF-8');
  next();
});

// const options = {
//   key: fs.readFileSync('key.pem'),
//   cert: fs.readFileSync('cert.pem')
// };

app.listen(BACKEND_PORT, () => console.log(BACKEND_URL));

mongoose.set('strictQuery', true);
mongoose
  .connect(process.env.MONGO_URI, { serverSelectionTimeoutMS: 5000, useNewUrlParser: true })
  .then(() => {
    console.log("Database is connected");

    const routes = [
      {
        method: "GET",
        url: BACKEND_URL + "/api/user/check",
      },
      {
        method: "GET",
        url: BACKEND_URL + "/api/post/get",
      }
    ]

    app.get('/', (req, res) => {
      return res.json({success: true, database: 'Connected', routes});
    });

    app.use('/api/user', userRouter);
    app.use('/api/post', postRouter);

    app.use((req, res) => {
      res.status(404).send("404")
    })

  })
  .catch(err => {
    console.log('MongoDB Connection Error!');

    app.use((req, res) => {
      return res.json({error: 'MongoDB Connection Error'});
    });
  });
