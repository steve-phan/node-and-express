const newsRouter = require('./news');
const blogsRouter = require('./blogs');
const newsController = require('../app/controller/NewsConstroller');

function route(app) {
  app.use('/news', newsRouter);
  app.use('/blogs', blogsRouter);
  app.use(
    '/',
    newsController.index
    //   res.redirect('https://facebook.com');
  );
}

module.exports = route;
