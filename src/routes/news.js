const express = require('express');
const router = express.Router();
const newsController = require('../app/controller/NewsConstroller');

router.get('/:slug', newsController.post);
router.get(
  '/',
  newsController.index
  //   res.redirect('https://facebook.com');
);

module.exports = router;
