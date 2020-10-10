<?php 

	$arr = array("name1"=>"zhangsan","name2"=>"lisi","name3"=>"wangwu");
	

	var_dump($arr);
	echo $arr["name2"];


	//二维数组
	$arr = array();
	$arr["zhangsan"] = array("age"=>19,"sex"=>"male","height"=>"180");
	$arr["lisi"] = array("age"=>18,"sex"=>"female","height"=>"160");
	$arr["wangwu"] = array("age"=>15,"sex"=>"male","height"=>"190");

	var_dump($arr);

	$result = json_encode($arr);
	echo $result;


 ?>