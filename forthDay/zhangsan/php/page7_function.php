<?php 


	$arr = array("zhangsan","lisi","wangwu");
	print_r($arr);
	var_dump($arr);

	$result = json_encode($arr);
	$count = count($arr);

	$addResult = add(2,3);
	echo "计算结果为" . $addResult;


	function add($num1,$num2) {
		return $num1 + $num2;
	}

 ?>