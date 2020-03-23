const path = require('path');

module.exports = {
  watch: true,
  entry: ['@babel/polyfill', 'whatwg-fetch', './js/script.js'],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname,'./'),
  },
};
