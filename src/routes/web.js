const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
  res.render('sample.ejs');
});

module.exports = routes;