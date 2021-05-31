const mongoose = require('mongoose');
require('dotenv').config();

async function connect() {
  try {
    await mongoose.connect(
      `mongodb+srv://vietappData:${process.env.MONGODB_KEY}@cluster0.ivtnh.mongodb.net/blog_post?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      }
    );
    // console.log(mongoose);
  } catch (error) {
    console.log(error);
  }
}

module.exports = { connect };
