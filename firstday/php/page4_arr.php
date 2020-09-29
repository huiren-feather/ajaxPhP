<?php 

	$arr = array();
	$arr[0] = "zhangsan";
	$arr[1] = "lisi";
	$arr[2] = "wangwu";

	$arr2= array("xx",1,true);

	print_r($arr2);
 $arr1= array();
$arr1[1]=1;
$arr1[0]="xxx";
echo $arr1[1];
print_r($arr1);
var_dump($arr1);
echo json_encode($arr1);

	echo $arr[0];
	echo $arr[1];
	echo $arr[2];

	print_r($arr);
	var_dump($arr);

	$result = json_encode($arr);
	echo $result;//将数组转化为json格式的字符串

 ?>