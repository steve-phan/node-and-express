class NewsController {
  index(req, res) {
    res.send('this is a home news');
  }
  post(req, res) {
    res.send('this is a post details');
  }
}

module.exports = new NewsController();
