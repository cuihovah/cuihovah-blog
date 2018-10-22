---
title: 利用Express实现一个Proxy Server
date: 2017-10-23 14:43:31
tags:
---

## What **Proxy** Server

>将远程之前所存取过的档案、网页数据，在近端的proxy内复制一份备份，若联机设定有指定proxy的话，则当每次在连结到网页时，都会先检查之前是否有其它人上过同样的网站，有的话就可以直接传回数据，不必连接到外面。

- 提高内部访问速度;
- 可起到类似防火墙的作用;
- 访问一些不能直接访问的网站;
- 互联网访问安全性得到提高.
- 相关的一些访问限制
- 太过影响带宽的流量限制
- 屏蔽一些影响公司内部流量的访问请求
- 端口设置限制，防止非法攻击

\* 以上内容来源于百度百科

## Quick Start app.js

### 启动流程

```javascript
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello world!');
});
app.get('/customer', function(req, res){
  res.send('customer page');
});
app.get('/admin', function(req, res){
  res.send('admin page');
});

app.listen(3000);
```

### 中间件
简单说，中间件（middleware）就是处理HTTP请求的函数。它最大的特点就是，一个中间件处理完，再传递给下一个中间件。App实例在运行过程中，会调用一系列的中间件。

每个中间件可以从App实例，接收三个参数，依次为request对象（代表HTTP请求）、response对象（代表HTTP回应），next回调函数（代表下一个中间件）。每个中间件都可以对HTTP请求（request对象）进行加工，并且决定是否调用next方法，将request对象再传给下一个中间件。

一个不进行任何操作、只传递request对象的中间件，就是下面这样。

```
function uselessMiddleware(req, res, next) {
  next();
}
```
上面代码的next就是下一个中间件。如果它带有参数，则代表抛出一个错误，参数为错误文本。

```
function uselessMiddleware(req, res, next) {
  next('出错了！');
}
```
抛出错误以后，后面的中间件将不再执行，直到发现一个错误处理函数为止。

- 路由的注册

## Practice&Progress

- mongodber.js
- rediser.js


## Core Middleware

### 验权&访控中间件
### 授权中间件
### 用户中间件
### response中间件

```
	1. 如何利用verifier中间件实现用户登录
	2. apikey中间件与kb_api的关系
```

## 路由

所谓“路由”，就是指为不同的访问路径，指定不同的处理方法。

###（1）指定根路径

在app.js之中，先指定根路径的处理方法。

```
app.get('/', function(req, res) {
   res.send('Hello World');
});
```
上面代码的get方法，表示处理客户端发出的GET请求。相应的，还有app.post、app.put、app.del（delete是JavaScript保留字，所以改叫del）方法。

get方法的第一个参数是访问路径，正斜杠（/）就代表根路径；第二个参数是回调函数，它的req参数表示客户端发来的HTTP请求，res参数代表发向客户端的HTTP回应，这两个参数都是对象。在回调函数内部，使用HTTP回应的send方法，表示向浏览器发送一个字符串。然后，运行下面的命令。

```
node app.js
```
此时，在浏览器中访问http://127.0.0.1:3000，网页就会显示“Hello World”。

如果需要指定HTTP头信息，回调函数就必须换一种写法，要使用setHeader方法与end方法。

```
app.get('/', function(req, res){
  var body = 'Hello World';
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', body.length);
  res.end(body);
});
```
###（2）指定特定路径

上面是处理根目录的情况，下面再举一个例子。假定用户访问/api路径，希望返回一个JSON字符串。这时，get可以这样写。

```
app.get('/api', function(request, response) {
   response.send({name:"张三",age:40});
});
```
上面代码表示，除了发送字符串，send方法还可以直接发送对象。重新启动node以后，再访问路径/api，浏览器就会显示一个JSON对象。

```
{
  "name": "张三",
  "age": 40
}
```
我们也可以把app.get的回调函数，封装成模块。先在routes目录下面建立一个api.js文件。

```
// routes/api.js

exports.index = function (req, res){
  res.json(200, {name:"张三",age:40});
}
```
然后，在app.js中加载这个模块。

```
// app.js

var api = require('./routes/api');
app.get('/api', api.index);
```
现在访问时，就会显示与上一次同样的结果。

如果只向浏览器发送简单的文本信息，上面的方法已经够用；但是如果要向浏览器发送复杂的内容，还是应该使用网页模板。

## Conclusion

\* 本文的理论来源多数来源于[nodejs的express使用介绍](http://www.cnblogs.com/mq0036/p/5243312.html#toc13)

# 未完待续...


