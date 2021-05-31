const BlogModel = require('../models/Blog');

class BlogController {
  index(req, res) {
    BlogModel.find({}, function (err, blogs) {
      if (err) {
        res.send('Error');
      } else {
        console.log(blogs);
        res.json(blogs);
      }
    });
    // res.json({
    //   hello: 'this is a response',
    // });
  }
}

module.exports = new BlogController();
