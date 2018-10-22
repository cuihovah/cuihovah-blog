---
title: 解决vue组件上传到npm之后报错的问题
date: 2017-10-23 10:44:31
tags:
---

当小伙伴开开心心的将自己写好的vue组件上传到github，并在npm中publish后以为可以开心的用npm进行安装了，但是事与愿违。

```shell
Module parse failed: ****.vue Unexpected token (1:0)
You may need an appropriate loader to handle this file type.
<template>
	...
```
这里报的是语法错误，也就是说vue的写法在node当中并不是合法的。归根结底其实是node的module机制惹的祸。

## node module的简单原理
node会将每个文件都包装成如下形式：

加载前

```javascript
var circle = require('./circle.js');
    console.log('The area of a circle of radius 4 is ' + circle.area(4));
```

加载后

```javascript
(function (exports, require, module, __filename, __dirname) {
    var circle = require('./circle.js');
    console.log('The area of a circle of radius 4 is ' + circle.area(4));
});
```

这种纯的JS代码中嵌入了标签当然会出问题的。一个很简单的解决办法就是，配置vue-loader。

但是有人即便是在webpack.config.js中加了vue-loader一样会报错的。

```javascript
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/,
        options: vueConfig
      },
```

主要的原因是加了`exclude: /node_modules/` 删掉即可。

## Conclusion
祝小伙伴们工作愉快，感谢您的阅读


