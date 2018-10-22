---
title: 含Latex的HTML文件与Word文件的相互转换方法
date: 2017-09-06 11:08:45
tags:
---

	本文叙述了HTML与word文件相互转换的原理。以及如何借助Pandoc工具实现转换的。

## 背景
我国互联网教育公司在日益争夺，用户对教学资源的质量要求也越来越高。有些特殊的需求会用到Latex和word文本之间的相互转换

## 现有的解决方法
**Pandoc**是由John MacFarlane开发的标记语言转换工具，可实现不同标记语言间的格式转换，堪称该领域中的“瑞士军刀”。
Pandoc使用Haskell语言编写，以命令行形式实现与用户的交互，可支持多种操作系统；Pandoc采用GNU GPL授权协议发布，属于自由软件

## 原理
HTML和Word都是使用了标记语言，是可以相互。
### HTML转word
首先word本身也是openxml的打包文件，只要将word文件扩展名修改为zip便可以用unzip工具将其解压，之后一窥究竟。在这里我取了个巧。直接利用pandoc将html文件转换为docx文件。当查看之后发现，HTML中的latex公式并没有完全转换成功。
>原来pandoc并没有直接将latex转换为office可以识别的公式。解决方法很简单，无非是我们的latex公式并不是pandoc识别的公式。

- 将HTML中latex转换为pandoc可以识别的标准latex格式
- 将HTML中latex转换为pandoc可以识别的其他的公式格式

在这里我个人使用了mathjax直接将latex转换为mathml
之后再将包含了mathml的html通过pandoc转换为word。

### word转HTML
pandoc可以直接将word解析成HTML。其中包含了Latex哦，只需要利用mathjax稍作处理便可以渲染到页面当中。



