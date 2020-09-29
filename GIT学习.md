## GIT学习

#### 1.安装git和vscode

#### 2.打开Git Bash 

 或者 win10中的powerShell（建议）

#### 3.常用命令:

git --version  :获取Git版本号

clear：清空命令行

pwd:打印当前文件完整路径

ls：打印当前目录下所有内容（不包含隐藏文件）

ls -a :打印当前目录下所有内容（包含隐藏文件,不显示详细信息）

ls -la:打印当前目录下所有内容（包含隐藏文件,显示详细信息）

cd C:\\  :跳转到C盘

code .   :直接在VScode中把此目录新建为工作区

git status :查看当前工作区哪些文件没有被添加到仓库中

git add  文件名:把文件从工作区添加到缓存区

git rm --cached 文件：把文件从缓冲区移到工作区

git 文件名（带后缀）：查看文件内容 



#### 4.版本控制的好处

a.追踪代码变化

b.协同合作

c.划分测试和发布阶段

d.备份

#### 5.版本控制系统VCS

版本控制的工具，或者成为SCM

最著名的就是Git，分布式

#### 6.设置用户名和邮箱

git config --global user.name "World-beater"

git config --global user.email "yhh915160157@163.com"

#### 7.打印git当前的基本配置

git config -l

#### 8.删除当前目录下的某个文件或文件夹

rm -rf 文件名

#### 9.返回目录上一级

cd ..

#### 10.初始化一个git仓库

git init 文件夹名

#### 11.在VScode中打开bash终端

修改默认打开程序：

![image-20200909162908341](C:\Users\yuan-honghui\AppData\Roaming\Typora\typora-user-images\image-20200909162908341.png)

![image-20200909162946108](C:\Users\yuan-honghui\AppData\Roaming\Typora\typora-user-images\image-20200909162946108.png)

#### 12.把文件转到代码仓库

![image-20200925183136016](C:\Users\yuan-honghui\AppData\Roaming\Typora\typora-user-images\image-20200925183136016.png)

两步：

1.把文件从工作区添加到缓存区  git add  test.txt

index ：存储文件的索引

进入.git/objects/01(或者其他数字)，01是TXT被压缩后的文件，里面有一串16进制数字（哈希值），是TXT文件内容

通过 git cat-file -p 数字文件名+哈希值 ，可以获得TXT文件内容

2.把文件从缓存区提交到代码仓库

 git commit -m "add 文件名"

#### 13.查看历史提交纪录：git log

![image-20200927193027482](C:\Users\yuan-honghui\AppData\Roaming\Typora\typora-user-images\image-20200927193027482.png)

### target

#### 什么是GitLab服务器的选择

#### GitLab服务器的搭建

#### GitLab的基本操作

#### 分支及其基本操作

#### 本地仓库和远程仓库的同步

#### Git标签的使用

![image-20200927210405097](C:\Users\yuan-honghui\AppData\Roaming\Typora\typora-user-images\image-20200927210405097.png)

### GitHub的使用

把GitHub上的clone到本地

1.复制链接

2.git clone 复制的地址

编辑后，把本地的代码仓库提交到GitHub上

git push origin master

需要输入用户名和密码

