---
layout: post
title:  "Mac用户搭建GitHub-Pages(1)"
date:   2016-11-11
excerpt: "作为一个UI设计师 一直以来都很想要有自己小天地 可以和大家做一些交流 也可以让大家更好的了解自己
机缘巧合下 从前同事那里了解到了Jekyll+GitHub搭建个人主页的方法 在技术大牛的悉心指导下 终于实现了自己的想法
接下来就奉上搭建的详细步骤。本人Mac环境，RMBP（2015），macOS X EI Capitan 10.11.3 0）由于ruby安装会用到读写系统的/usr/bin下的文件权限，用于10.11以后MacOS已强制关闭该文件夹的读写权限，所以我们要先打开..."
tag:
- markdown 
- mathjax
- example
- test
- jekyll
comments: true
---

## 前言：
作为一个UI设计师 一直以来都很想要有自己小天地 可以和大家做一些交流 也可以让大家更好的了解自己
机缘巧合下 从前同事那里了解到了Jekyll+GitHub搭建个人主页的方法 在技术大牛的悉心指导下 终于实现了自己的想法
接下来就奉上搭建的详细步骤 


## 一、安装Jekyll

本人Mac环境，RMBP（2015），macOS X EI Capitan 10.11.3

#### 1、安装ruby
（0）由于ruby安装会用到读写系统的/usr/bin下的文件权限，用于10.11以后MacOS已强制关闭该文件夹的读写权限，所以我们要先打开该权限：

点击重启，听见启动声按住option键，选择恢复（Recovery）模式，点击菜单栏中实用工具打开命令行（Terminal），输入如下：

csrutil disable
{: .notice}
重启即可。如果要恢复默认，那么：

csrutil enable
{: .notice}

（1）然后重启正常进入系统我们便可以放心安装ruby了，应用程序中打开命令行（Terminal）：

curl -L get.rvm.io|bash -s stable
{: .notice}

等待一段时间后就可以成功安装好 RVM,然后启用rvm:

source ~/.rvm/scripts/rvm
{: .notice}
保险起见测试一下是否安装正常：

rvm -v 
{: .notice} 
看见版本号则说明安装正常

TomydeMac-mini:usr tomy$ rvm -v
rvm 1.27.0 (latest) by Wayne E. Seguin `<wayneeseguin@gmail.com>`, Michal Papis `<mpapis@gmail.com>` [https://rvm.io/]
{: .notice}

（2）用rvm升级Ruby 查看当前ruby版本：

ruby -v 
{: .notice}

得到如下信息：

ruby 1.8.7
{: .notice}

显然版本号偏低，再输入：

rvm list known 
{: .notice}

在列出的ruby分支表里可以尽量安装最新版本，比如最新的是2.3.0版本：

rvm install  2.3.0
{: .notice}

然后我们查看系统已安装的ruby:

rvm list
{: .notice}

先设置新版的ruby为默认项：

rvm use 2.3.0 --default 
{: .notice}

后移除旧版本：

rvm remove 1.8.7
{: .notice}

### 2、安装gem
Mac系统自带的`gem`比较老旧我们需要对他进行换新和换源 
（1）更换Ruby默认源，先查看现有的源地址：

gem sources -l
{: .notice}

删除被强的源：

gem sources --remove https://rubygems.org/
{: .notice}

添加淘宝源：

gem sources -a https://ruby.taobao.org/
{: .notice}

更新gem：

gem update --system 
{: .notice}

安装rubygems:

gem install rubygems-update
{: .notice}

更新rubygems:

update_rubygems
{: .notice}

### 3、安装Jekyll

gem install jekyll
{: .notice}

Jekyll依赖的组件会自动下载安装,待安装好后我们测试下Jekyll服务：

jekyll serve --safe --watch 
{: .notice}

至此就Mac端准备工作就全部完毕，安装Jekyll的目的是让本机可以在发布到GitHub上前可以在本地测试页面样式等。

接下来的步骤请参考：Mac用户搭建GitHub-Pages(2) 待续---

原文链接：<https://cs64188.github.io/2016/11/08/MacConfig-Jrkyll(1)/>

