//const Koa = require('koa');
//const Router = require('@koa/router');
//const serve = require('koa-static');
const fs = require('fs')
const express = require('express')
const router = express.Router();
const app = express()
const mysql = require('mysql');



//设置允许跨域请求
app.all('*', (req, res, next) => {
  //访问控制允许来源：所有
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use(express.static('static'))

getList('/homenav', 'pdd_homenav');

getList('/homecasual', 'pdd_homecasual');

getList('/buy_cart', 'lk_pdd_cart');

getList('/recommend', 'pdd_recommend');

getList('/user_info', 'pdd_user_info');

app.get('/goods_list', (req, res) => {
  fs.readFile('./data/goods_list.json', (err, data) => {
    if (err) res.send('{status:404,data:"null"}')
    const goods_list = JSON.parse(data.toString());
    res.send(goods_list);
  })
})



app.get('/recommend_users', (req, res) => {
  fs.readFile('./data/recommend_users.json', (err, data) => {
    if (err) res.send('{status:404,data:"null"}')
    const recommend_users = JSON.parse(data.toString());
    res.send(recommend_users);
  })
})

app.get('/search', (req, res) => {
  fs.readFile('./data/search.json', (err, data) => {
    if (err) res.send('{status:404,data:"null"}')
    const search = JSON.parse(data.toString());
    res.send(search);
  })
})
app.get('/shopList', (req, res) => {
  fs.readFile('./data/shopList.json', (err, data) => {
    if (err) res.send('{status:404,data:"null"}')
    const shopList = JSON.parse(data.toString());
    res.send(shopList);
  })
})

// 登录功能
app.get('/login', (req, res) => {
  let name = req.query.name
  let passwd = req.query.passwd
  console.log(req)
  // 连接数据库
  const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'shopList',
    password: '123456',
    port: '3306',
    database: 'shopList'
  })
  connection.connect();
  let sql = `select * from pdd_user_info where user_name='${name}' and user_pwd='${passwd}'`
  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log("!!!", result)
    if (result.length == 0) res.send("用户名或密码错误")
     else res.send("<h2>登录成功，欢迎<h2>")
  })
})


// 获取数据的方法
function getList(name, tableName) {
  app.get(name, (req, res) => {
    // 连接数据库
    const connection = mysql.createConnection({
      host: '127.0.0.1',
      user: 'shopList',
      password: '123456',
      port: '3306',
      database: 'shopList'
    })
    connection.connect();
    let sql = `select *from ${tableName}`
    console.log(sql);
    connection.query(sql, (error, result) => {
      if (error) {
        res.send('[select error]-', error.message);
        return;
      }
      res.send(result);
    })

    connection.end();
  })
}



app.listen(3000, '127.0.0.1', () => {
  console.log('服务器启动成功')
});