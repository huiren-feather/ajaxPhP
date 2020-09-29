<?php 
//    函数
// 1.系统函数
// 2.自定义函数

	$arr = array("zhangsan","lisi","wangwu");
	print_r($arr);
	var_dump($arr);

	$result = json_encode($arr);
	$count = count($arr);

	$addResult = add(2,3);
	echo "计算结果为" . $addResult;


	function add($num1,$num2) {
		echo "xxx";
		return $num1 + $num2;
	}

 ?>