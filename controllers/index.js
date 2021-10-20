var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Golfing Midterm!' });
});

router.get('/teetimes', function(req, res, next) {
  res.render('teetimes', { title: 'Teetimes'});
});

module.exports = router;
