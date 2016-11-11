---
layout: post
title:  "Mac用户搭建GitHub-Pages(1)"
date:   2016-11-11
excerpt: "MathJax Example for Moon Jekyll Theme."
tag:
- markdown 
- mathjax
- example
- test
- jekyll
comments: true
---

一、安装Jekyll
由来
最近很多身边的朋友都开始弄起了个人技术博客主页，最近本人也一直有这个想法，在机缘巧合下朋友正好推荐了我配合Jekyll搭建GitHub主页，查了下也确实是时下比较流行的玩法，于是才有了这篇文章，网上Mac下的环境搭建教材大多层次不齐，本文在经过本人实践后整理所得，有不足之处望大家多多指正交流。

感谢 Fiona 提供的技术顾问和参考。

本人Mac环境，Mac mini（2012），RMBP（2014），macOS Sierra 10.12.1。

1、安装ruby
（0）由于ruby安装会用到读写系统的/usr/bin下的文件权限，用于10.11以后MacOS已强制关闭该文件夹的读写权限，所以我们要先打开该权限：

点击重启，听见启动声按住option键，选择恢复（Recovery）模式，点击菜单栏中实用工具打开命令行（Terminal），输入如下：

csrutil disable
{: .notice}
重启即可。如果要恢复默认，那么：

csrutil enable
{: .notice}

（1）然后重启正常进入系统我们便可以放心安装ruby了，应用程序中打开命令行（Terminal）：

curl -L get.rvm.io | bash -s stable
等待一段时间后就可以成功安装好 RVM,然后启用rvm:

source ~/.rvm/scripts/rvm
保险起见测试一下是否安装正常：

rvm -v  
看见版本号则说明安装正常

TomydeMac-mini:usr tomy$ rvm -v
rvm 1.27.0 (latest) by Wayne E. Seguin <wayneeseguin@gmail.com>, Michal Papis <mpapis@gmail.com> [https://rvm.io/]
（2）用rvm升级Ruby 查看当前ruby版本：

ruby -v  
得到如下信息：

ruby 1.8.7  
显然版本号偏低，再输入：

rvm list known 
在列出的ruby分支表里可以尽量安装最新版本，这里安装2.3.0版本：

rvm install  2.3.0
然后我们查看系统已安装的ruby:

rvm list
现设置新版的ruby为默认项：

rvm use 2.3.0 --default 
后移除旧版本：

rvm remove 1.8.7
2、安装gem
Mac系统自带的gem比较老旧我们需要对他进行换新和换源 （1）更换Ruby默认源，先查看现有的源地址：

gem sources -l
删除被强的源：

gem sources --remove https://rubygems.org/
添加淘宝源：

gem sources -a https://ruby.taobao.org/
更新gem：

gem update --system 
安装rubygems:

gem install rubygems-update
更新rubygems:

update_rubygems    
3、安装Jekyll
gem install jekyll    
Jekyll依赖的组件会自动下载安装,待安装好后我们测试下Jekyll服务：

jekyll serve --safe --watch    
至此就Mac端准备工作就全部完毕，安装Jekyll的目的是让本机可以在发布到GitHub上前可以在本地测试页面样式等。

接下来的步骤请参考：Mac用户搭建GitHub-Pages(2)
