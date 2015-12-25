var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bing Bong' });
});

router.post("/foo/bar", function(req, res, next){
  req.body;
  res.render('index', req.body);
})

module.exports = router;
