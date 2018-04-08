var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var mysql = require('mysql');
router.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next()
})
// 连接数据库
var connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'ljl12345...',
  port:'3306',
  database:'mydatabase'
})
// navbar
router.use('/navbar', (req, res) => {
  //基本的查询语句  
  let sqlQuery="select * from navbar";  
  connection.query(sqlQuery,function(err,result){
    if(err){  
      console.log(`SQL error: ${err}!`);  
    }else{  
      var data = {};
      let token = req.headers.token;
      if (token !== 'token_on') {
        data.status = 8001
      } else {
        data.status = 8000
      }
      let navbar = []
      for (var i=0; i<result.length; i++) {
        navbar.push({
          key: result[i].key,
          name: result[i].name
        })
      }
      data.navbar = navbar
      res.send(data);
    }  
  });
});
// 注册
router.use('/register', (req, res) => {
  // 查询是否存在用户名
  let userInfor = req.body.userInfor
  let sqlQuery="select * from user";  
  var data = {};
  let token = req.headers.token;
  if (token !== 'token_on') {
    data.status = 8001
  } else {
    data.status = 8000
  }
  connection.query(sqlQuery,function(err,result){
    if(err){  
      console.log(`SQL error: ${err}!`);
      data = {
        id: 0,
        msg: '注册失败,请重新注册！'
      }
      res.send(data);
      return false;
    }else{  
      for (var i=0; i<result.length; i++) {
        if (result[i].name === userInfor.name) {
          data = {
            id: 1,
            msg: '该用户已被注册！'
          }
          res.send(data);
          return false
        }
      } 
      //基本的插入语句
      let sqlInsert = `INSERT INTO mydatabase.user (name, password) VALUES ('${userInfor.name}', '${userInfor.password}')`;
      connection.query(sqlInsert, function(err,result){
        data = {
          id: 2,
          msg: '注册成功'
        }
        res.send(data); 
      });
    }  
  });
});
//  登录
router.use('/login', (req, res) => {
  //基本的查询语句  
  let sqlQuery="select * from user";
  let userInfor = req.body.userInfor;
  let data;
  connection.query(sqlQuery,function(err,result){
    if(err){  
      console.log(`SQL error: ${err}!`);  
    }else{
      for (var i=0; i<result.length; i++) {
        if (result[i].name === userInfor.name) {
          if (result[i].password === userInfor.password) {
            data = {
              status: 8000,
              id: 1,
              token: 'token_on',
              msg: '登录成功'
            }
          } else {
            data = {
              id: 0,
              msg: '密码错误'
            }
          }
          res.send(data);
          return false
        } else {
          data = {
            id: 0,
            msg: '未注册用户名'
          }
        }
      }
      res.send(data);
    }
  });
});
module.exports = router;
