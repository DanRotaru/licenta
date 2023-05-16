const {Schema, model, mongoose} = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const faqSchema = new Schema({
  question: {type: String, required: true},
  answer: {type: String, required: true},
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
    required: true,
    trim: true
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
    default: 0
  },
  language: {
    type: String,
    trim: true,
    default: 'English'
  },
  category: {
    type: String,
    trim: true,
    default: 'None'
  },
  description: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: 'https://placehold.co/800x500/EEE/999'
  },
  features: {
    type: String,
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
  discount_end: {
    type: String,
  },
  youtube: {
    type: String,
    required: false
  },
  level: {
    type: String,
    default: 'All level'
  },
  tags: String,
  faqs: [faqSchema],
  documentations: {
    type: Number,
    default: 0
  },
  videoTutorials: {
    type: String,
    default: ''
  },
}, {versionKey: false, timestamps: true});

schema.plugin(AutoIncrement, {inc_field: 'postId'});
module.exports = model('Post', schema);
