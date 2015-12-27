var express = require('express');
var router = express.Router();
var hipstered = require('../lib/snippets');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bing Bong' });
});

router.post("/foo/bar", function(req, res, next){
  var userinput = req.body["userinput"].split(' ');
  var hipsteroutput = userinput.map(function(item){
    return item + ' ' + randomHipster();
  })
  var output = {
    output: hipsteroutput,
  }
  res.render('hipstered', output);
})

function randomHipster(){
  var randHipstnum = +(Math.random() * (hipstered.length - 1)).toFixed(0);
  return hipstered[randHipstnum];
}

module.exports = router;
