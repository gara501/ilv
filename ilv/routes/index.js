var express = require('express');
var router = express.Router();
var fs = require('fs');

var results;

fs.readFile('json/data.json', 'utf8', function(err, data){
  if (err) {
    throw err;
  } else {
    results = JSON.parse(data);
  }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bailey', services: results });
});

module.exports = router;
