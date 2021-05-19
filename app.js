const express = require('express');

// Need require dotenv to read variables from .env files. That's basic
require('dotenv').config();

// Declare app
const app = express();

app.get('/', (req, res) => {
  res.send('Hello node and express');
});

app.listen(process.env.PORT, () => {
  console.log(`app is running at http://localhost:${process.env.PORT}`);
});

// console.log('app is ===>', app);
