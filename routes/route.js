var express = require('express');
var router = express.Router();


router.get('/index', function(req, res, next) {
  res.render('index');
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

module.exports = router;
