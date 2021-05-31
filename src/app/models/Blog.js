const { Schema, model } = require('mongoose');
// const ObjectId = Schema.ObjectId;
const BlogPost = new Schema({
  //   author: ObjectId,
  title: String,
  body: String,
  date: { type: Date, default: Date.now },
});

module.exports = model('posts', BlogPost);
