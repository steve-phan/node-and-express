const { networkInterfaces } = require('os');
const { en0 } = networkInterfaces();

const IP = en0.find((item) => item.family === 'IPv4').address;

module.exports = IP;
