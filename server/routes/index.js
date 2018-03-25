var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// navbar
router.use('/home', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  var navbar = [{
    name: '首页'
  }, {
    name: '新闻中心'
  }, {
    name: '加入我们'
  }, {
    name: '社会公益'
  }]
  res.send(navbar);
});
router.use('/content', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  var index = req.body.id;
  var content;
  if (index == 0) {
    content = 'content1';
  } else if (index == 1) {
    content = 'content2';
  } else if (index == 2) {
    content = 'content3';
  } else if (index == 3) {
    content = 'content4';
  }
  res.send(content);
});
module.exports = router;
