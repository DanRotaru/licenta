const {Schema, model, mongoose} = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const faqSchema = new Schema({
  question: {type: String, required: true},
  answer: {type: String, required: true},
});

const includesSchema = new Schema({
  documentations: {type: Number, required: true, default: 0},
  skills: {type: String, required: true, default: 'Beginner'},
  videoTutorials: {type: String, required: true, default: ''},
});

const tagsSchema = new Schema({
  tag: {type: String},
});

const schema = new Schema({
  postId: {
    type: Number,
    default: 0
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  title: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  reviews: {
    type: Number,
    default: 5
  },
  language: {
    type: String,
    trim: true,
    default: 'English'
  },
  description: {
    type: String,
    required: true
  },
  shortDescription: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  discount: {
    type: Number,
    default: 0
  },
  price: {
    type: Number,
    required: true,
    default: 0
  },
  video: {
    type: String,
    required: false
  },
  faqs: [faqSchema],
  includes: [includesSchema],
  tags: [tagsSchema]
}, {versionKey: false, timestamps: true});

schema.plugin(AutoIncrement, {inc_field: 'postId'});
module.exports = model('Post', schema);
