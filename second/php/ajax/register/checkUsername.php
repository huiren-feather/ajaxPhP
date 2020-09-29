<?php 


	$uname = $_POST["username"];

	//按道理来说，这个地方应该是要查询数据库
	if($uname == 'zhangsan') {
		echo "username exists";
	} else {
		echo "username ok";
	}

 ?>