<?php 

	$arr = array();
	$arr[0] = "zhangsan";
	$arr[1] = "lisi";
	$arr[2] = "wangwu";

	echo $arr[0];
	echo $arr[1];
	echo $arr[2];

	print_r($arr);
	var_dump($arr);

	$result = json_encode($arr);
	echo $result;//将数组转化为json格式的字符串

 ?>