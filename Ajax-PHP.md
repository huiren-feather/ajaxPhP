### ajax

1.局部加载

2.异步刷新，不会卡死

个人电脑和服务器：没有本质的区别，个人电脑也可以做服务器；

服务器提供服务：网页服务、邮箱服务、文件上传下载服务等等

提供服务需要软件：

HTTP网页服务：Apache、Tomcat、IIS等

文件上传下载服务：vsftp等

数据存储服务：MySQL、Or



#### 网络知识：

访问外网顺序：

个人电脑先访问电脑中的C:\Windows\System32\drivers\etc\hosts,里面有域名和IP的映射关系

如果没有，然后访问DNS服务器，查询映射关系，得到IP地址

然后通过路由器去访问外网

端口：区分一台服务器上的不同服务

然后通过通信协议交流

常见协议：HTTP，SMTP等

HTTP：请求头、响应头、请求体、响应体

#### wamp3.1.7安装和使用:

Windows，Apache，MySQL，PHP

##### 1.安装无任何意外操作

#### 注：每次修改配置文件时，必须先备份；修改后必须重启服务器

##### 2.修改访问权限设置（三个操作）：

​	a.位置：C:\software\wamp3.1.7\bin\apache\apache2.4.37\conf\httpd.conf

修改两个位置：#   Require local
	                      Require all granted

​	b.位置：C:\software\wamp3.1.7\bin\apache\apache2.4.37\conf\extra\httpd-vhosts.conf

修改 ：#   Require local
	        Require all granted

​	c.如果还是访问不了，开启win10防火墙配置（打开访问端口）：

 		Windows防火墙--高级设置--入站规则--新建规则--端口--特定端口：80--允许连接--三个都开

##### 3.修改网站根路径：

位置：C:\wamp64\bin\apache\apache2.4.37\conf\httpd.conf

C:\wamp64\bin\apache\apache2.4.37\conf\extra\httpd-vhosts.conf

将DocumentRoot "${INSTALL_DIR}/www"
    <Directory "${INSTALL_DIR}/www/">

中的目录位置改为了：DocumentRoot "D:/ajax"
                                     <Directory "D:/ajax">



##### 4.通过域名来登录

不直接使用IP地址，需配置本地DNS解析文件

位置：C:\Windows\System32\drivers\etc\hosts



##### 5.增加站点

一台服务器设置多个站点：

设置虚拟主机

位置：C:\wamp64\bin\apache\apache2.4.37\conf\httpd.conf



#Virtual hosts

#Include conf/extra/httpd-vhosts.conf  //引入另一个配置文件

去掉第二个#

然后到：C:\wamp64\bin\apache\apache2.4.37\conf\extra\httpd-vhosts.conf中

添加虚拟站点的根路径和域名：

<VirtualHost *:80>
  ServerName www.feather.com
  ServerAlias localhost
  DocumentRoot "${INSTALL_DIR}/www"
  <Directory "${INSTALL_DIR}/www">
    Options +Indexes +Includes +FollowSymLinks +MultiViews
    AllowOverride All

	Require all granted
  </Directory>
</VirtualHost>

在C:\Windows\System32\drivers\etc\hosts中，添加DNS映射关系：

127.0.0.1 www.world-beater.com
192.168.2.165 www.feather.com

###### 注：添加虚拟站点后，默认站点不变



##### 6.网页中出现中文乱码（还不行，这个是2.x的问题，用3.X就没问题了）

修改配置文件：php.ini

位置：C:\wamp\bin\php\php5.4.12\php.ini

内容：

; PHP's default character set is set to empty.
; http://php.net/default-charset
default_charset = "UTF-8"

###### 注：放弃了2.x版本的使用，用的3.x版本，就没有这个问题了

#### PHP

##### 网站分类：

静态网站：没有数据库支持，全部是HTML代码，网站开发和维护的成本较大

动态网站：asp,jsp,php,aspx等格式，根据内容可请求数据库支持

<?php 代码?>:所有PHP代码写在这个位置

提示：请设置PHP的可执行文件路径

解： "php.validate.executablePath": "C:/software/wamp3.1.7/bin/php/php7.3.1/php.exe"

##### PHP语法基本结构

1.所有的PHP代码必须写在<?php   代码   ?>中

2.PHP代码可以和HTML结合执行

3.PHP文件的扩展名是“.php”

4.PHP代码必须在服务器上执行

##### 变量声明和使用：$

  $result = json_encode($arr);

  echo $result;//将数组转化为json格式的字符串

##### 输出：

1.echo 输出字符串

2.print_r  输出复杂类型

3.var_dump 输出复杂类型

##### 字符串拼接

用   .      可用于多个字符串的拼接

##### 数组

1.索引名可变

2.数组遍历：

  foreach ($arr as $key => $value) {

​    echo $key.">>>" . $value ;

  }

注：用for循环，无法搞定索引变化的问题

##### 函数：

  function add($num1,$num2) {

​    echo "xxx";

​    return $num1 + $num2;

  }

注：变量记得加$

##### 请求参数：

###### 1.GET方式

HTML中：

	<form action="check.php" method="get">
		
		用户名：<input type="text" name="username"><br>
		密码：<input type="password" name="password"><br>
		<input type="submit" value="提交">
	
	</form>
PHP中取值：

	$username = $_GET["username"];
	$password = $_GET["password"];
参数在URL后面，多个参数用&进行连接

###### 2.POST方式

HTML中：

	<form action="check.php" method="post">
		
		用户名：<input type="text" name="username"><br>
		密码：<input type="password" name="password"><br>
		<input type="submit" value="提交">
	
	</form>
PHP中取值：

	$username = $_POST["username"];
	$password = $_POST["password"];
参数在请求体中

![image-20200912083307959](C:\Users\yuan-honghui\AppData\Roaming\Typora\typora-user-images\image-20200912083307959.png)

##### 学生成绩查询案例

判断数组中是否存在下标索引：

array_key_exists($code, $data)    //返回bool值



### ajax

#### 使用步骤

##### 1.创建XMLHttpRequest对象

var xhr = new XMLHttpRequest();

###### 兼容性处理

				var xhr = null;
				if(window.XMLHttpRequest) {
					xhr = new XMLHttpRequest();
				} else {
					//IE6浏览器
					xhr = new ActiveXObject("Microsoft.XMLHTTP");
				}


##### 2.准备发送网络请求

xhr.open("get","checkUsername.php?username="+username,true);   

xhr.open("post","checkUsername.php",true);     

参数1：请求方式：get或者POST

参数2：请求地址，并连接所有参数

参数3：true：异步；false：同步；不写：异步

##### 3.开始发送网络请求

**GET:**

 xhr.send(null);

**POST:** 

var param="username="+username;   //"key="  +value 形式

xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");

xhr.send(param);

参数：get：null；post:传参数

##### 4.指定回调函数

xhr.onreadystatechange=functiong(){

if(xhr.readyState==4){    //xhr的数据解析完成

​	if(xhr.status==200){     //服务器响应正常

//代码块

var result=xhr.responseText;    //返回的是普通字符串

console.log(result);

​    document.getElementById("result").innerText = result;

}

}

};

###### xhr.readyState：

0：xhr对象创建完成

1：已经发送请求

2：浏览器已经收到了服务器响应的数据

3：正在解析数据

4：数据解析完成，一般只关心这个

###### xhr.status：

200：响应成功

404：没有找到资源

500：服务器端错误

###### 将字符串转化成对象

result = JSON.parse(result);

##### 案例：注册界面唯一性验证

1.验证用户名唯一性

2.验证邮箱唯一性

3.验证手机号唯一性

##### 同步异步

单线程加事件队列实现异步

##### 接口文档

详细说明你要获取什么数据的时候，访问什么地址，传入什么参数等等

后端人员提供给前端人员使用的

同步：顺序执行，用户在等待时，无法操作界面

异步：单线程加事件队列实现

#### 数据格式

定义：将数据通过一定的规范组织起来

##### 1.XML数据格式

定义：将数据以标签的方式进行组装，必须以<?xml varsion="1.0" encoding="utf-8"?>开头，标签必须成对出现

缺点：体积太大，传输慢，元数据太多，解析不方便，越来越少，了解即可

##### 2.Json数据格式

定义：类似于js中的对象方式，通过key-value的形式组装，通用标准

优点：体积小，传输快，解析方便（可转化为对象）

##### 案例：

###### 1.获取图书信息

###### 2.获取学生信息

#### 封装Ajax

###### 考虑因素：

1.哪些东西是变的

2.哪些东西是不变的

3.如何将结果通知调用者，传递方法

4.如何调用方便，参数把它作为对象，所有参数放在对象中，包括方法

#### 封装问题

1、参数顺序不可改变

2、参数没有默认值，每次都得传递

##### 解决方法

将封装的参数变为一个对象即可

#### jQuery中使用ajax

##### 常用方法：

###### 1.$.ajax(obj)

###### 2.$.get(url,funtion(){})

###### 3.$.post(url,{},function(){})

#### 跨域

###### 同源策略

协议一致HTTP，域名一致，端口号一致，ajax才能访问到

Ajax是为了访问自己服务器的数据，跨域是为了访问别人服务器的数据

##### 跨域和ajax没有任何关系

跨域是另一种技术

跨域的本质：其实就是服务器返回了一个方法调用，这个方法是我们实现定义好的，而方法中的参数就是我们想要的数据

借助：script中的src属性

1.引入js文件

2.引入PHP文件

3.动态创建script标签

​		// 动态创建script标签，动态制定src属性的值

​        var script=document.createElement("script");

​        script.src="http://www.feather.com/data.php?city="+cityName;

​        var head=document.querySelector("head");

​        head.appendChild(script);

4.动态指定回调函数名称

			window["foo2"] = function(data){
				console.log(data);
			};
##### 案例：

1.淘宝提示词接口

2.百度提示词接口

##### jQuery实现跨域：

$.ajax {

obj {

dataType:"jsonp"

}

}

注：以上必须返回的是回调函数

返回的是json数据的话：需要使用自己的服务器去获取数据（后端代码），然后使用同源策略



#### 模板引擎的使用

作用：渲染前端界面，方便的生成标签

步骤：

​	1、引入js文件

​	2、定义模板

​	3、将数据和模板结合起来生成HTML片段

​	4、将HTML片段渲染到界面中

   	//template方法的含义就是将数据和模板结合起来，生成html片段
						var html = template("resultTemplate",data);
						console.log(html);
						var divResult = document.querySelector("#resultDiv");
						divResult.innerHTML = html;

	<!-- 1、模板的type=text/html  2、给模板配一个id
		data.s
	-->
	<script type="text/html" id="resultTemplate">
		<ul>
			{{each s as value i}}
				<li>
					<div>
						<span>结果{{i+1}}:</span>
						<span>{{value}}</span>
					</div>
				</li>
			{{/each}}
		</ul>
	</script>
###### 案例1：

  <script type="text/javascript" src="./template.js"></script>
    <script id="test" type="text/html">
        {{if isAdmin}}
            <h1>{{title}}</h1>
            <h2>一共有{{count}}条数据</h2>
            <ul>
                {{each list as value i}}
                    <li>索引 {{i + 1}} ：{{value}}</li>
                {{/each}}
            </ul>
        {{/if}}
    
        {{if !isAdmin}}
            <h1>没有任何数据</h1>
        {{/if}}
    
    </script>
    
    <script>
        window.onload = function(){
            var data = {
                title: '条件判断基本例子',
                isAdmin: true,
                list: ['文艺', '博客', '摄影', '电影', '民谣', '旅行', '吉他']
            };
            data.count = data.list.length;
            var html = template("test",data);
            document.querySelector("#content").innerHTML = html;
        }
    </script>
###### 案例2：

 <script type="text/javascript" src="./template.js"></script>
    <!-- data.data -->
    <script id="test" type="text/html">
        <ul>
            {{each arr as value i}}
                <li>{{value}}</li>
            {{/each}}
        </ul>
    </script>
    
    <script>
        window.onload = function(){
            var data = ['文艺', '博客', '摄影', '电影', '民谣', '旅行', '吉他'];
            var temp = {};
            temp.arr = data;
            var html = template("test",temp);//data.xxx 
            document.querySelector("#content").innerHTML = html;
        }
    </script>
###### 案例3：

 <script type="text/javascript" src="./template.js"></script>
    <script id="test" type="text/html">
        <p>不转义：{{#value}}</p>
        <p>默认转义： {{value}}</p>
    </script>
    
    <script>
        window.onload = function(){
            // 这里的数据当中包含特殊字符
            var data = {
                value: '<span style="color:#F00">hello world!</span>'
            };
            var html = template('test', data);
            document.getElementById('content').innerHTML = html;
        }
    </script>
###### 知识点

1.  得到数据中的值  {{value}}
2. 循环操作    {{each result as value i}}   循环体 {{/each}}
3. 转义： #的使用 {{#value}}
4. 条件判断：   {{if  条件}}   代码 {{/if}}
5. 对原始数据进行加工



#### 综合案例

##### 1.天气查询

##### 2.手机查吉凶