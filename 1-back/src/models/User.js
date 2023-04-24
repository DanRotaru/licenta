const {Schema, model, mongoose} = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const locationSchema = new Schema({
  country: {type: String, required: true},
  city: {type: String, required: true},
  languages: {type: String, required: true},
});

const educationSchema = new Schema({
  location: {type: String, required: true},
  education: {type: String, required: true},
});

const skillSchema = new Schema({
  skill: {type: String, required: true},
  progress: {type: Number, required: true, default: 0},
});

const socialsSchema = new Schema({
  facebook: {type: String},
  instagram: {type: String},
  twitter: {type: String},
  linkedin: {type: String},
  telegram: {type: String},
  youtube: {type: String},
});


const schema = new Schema({
  userId: {
    type: Number,
    default: 0
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  first_name: {
    type: String,
    trim: true
  },
  last_name: {
    type: String,
    trim: true
  },
  login: {
    type: String,
    trim: true,
    required: true
  },
  avatar: {
    type: String,
    default: 'https://placehold.co/512x512/EEE/999'
  },
  password: {
    type: String,
    default: null
  },
  access: {
    type: Number,
    required: true,
    default: 0
  },
  userType: {
    type: Number,
    required: true,
    default: 0
  },
  regType: {// 0 - login/password, 1 - github
    type: Number,
    default: 0
  },
  githubId: {
    type: Number,
    default: null
  },
  experience: {
    type: Number,
    default: 1,
  },
  projects: {
    type: Number,
    default: 0
  },
  sells: {
    type: Number,
    default: 0
  },
  phone: {
    type: String
  },
  website: {
    type: String,
  },
  position: {
    type: String
  },
  description: {
    type: String
  },
  location: [locationSchema],
  education: [educationSchema],
  skills: [skillSchema],
  socials: [socialsSchema]
}, {versionKey: false, timestamps: true});

schema.plugin(AutoIncrement, {inc_field: 'userId'});
module.exports = model('User', schema);
