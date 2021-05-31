const express = require('express');
const path = require('path');
const axios = require('axios');

const handlebars = require('express-handlebars');
const route = require('./src/routes');

// Need require dotenv to read variables from .env files. That's basic
require('dotenv').config();

// Declare app
const app = express();
// express v4.16 or higher already includes body-parse
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'src', 'assets')));
app.use(express.static(path.join(__dirname, 'src', 'resources')));
// console.log(path.join(__dirname, 'assets'));
// Template Engine
// const hbs = handlebars.create({
//   extname: '.teddy',
// });

// app.engine();
// app.engine('teddy', hbs.engine); //*  Tell App using handblebars */

app.engine('hbs', handlebars({ extname: '.hbs' }));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'src', 'resources', 'views'));

// app.use('/', (req, res, next) => {
//   console.log('this is middleware1');
//   next();
// });
// app.use('/', (req, res, next) => {
//   console.log('this is middleware2');
//   next();
// });
// app.get('/', (req, res) => {
//   res.render('home');
//   //   res.redirect('https://facebook.com');
// });
route(app);

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  console.log(req.body.email);
  res.render('login');
});

const url =
  'https://od-api.oxforddictionaries.com/api/v2/entries/en-us/reading';
axios
  .get(url, {
    headers: {
      app_id: '',
      app_key: '',
    },
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

app.listen(process.env.PORT, () => {
  console.log(`app is running at http://localhost:${process.env.PORT}`);
});

// console.log('app is ===>', app);
