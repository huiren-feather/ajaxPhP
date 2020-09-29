<?php 

	

	$username = $_GET["username"];
	$password = $_GET["password"];

	// $name=$_GET["username"];

	// echo $name;

	//按道理来说，这里面的代码应该要查询数据库
	if($username == "admin" && $password == "123") {
		echo "Login Success";
	} else {
		echo "Login Falied";
	}

 ?>