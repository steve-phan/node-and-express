const newsRouter = require('./news');

const newsController = require('../app/controller/NewsConstroller');

function route(app) {
  app.use('/news', newsRouter);

  app.use(
    '/',
    newsController.index
    //   res.redirect('https://facebook.com');
  );
}

module.exports = route;
