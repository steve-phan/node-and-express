const express = require('express');
const path = require('path');

const handlebars = require('express-handlebars');

// Need require dotenv to read variables from .env files. That's basic
require('dotenv').config();

// Declare app
const app = express();

// Template Engine
const hbs = handlebars.create({
  extname: '.handlebars',
});

// app.engine();
app.engine('handlebars', hbs.engine);

app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'src', 'resources', 'views'));
const x = path.join(__dirname, 'resources', 'views');
console.log(x);
app.get('/', (req, res) => {
  res.render('home');
});

app.listen(process.env.PORT, () => {
  console.log(`app is running at http://localhost:${process.env.PORT}`);
});

// console.log('app is ===>', app);
