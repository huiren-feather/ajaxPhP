<?php
// $arr =array("name1"=>"zhangsan","lisi","wangwu");

// // echo $arr;不能直接输出数组
// // echo $arr[1]."<br>";

// // 直接输出数组
// // print_r($arr);
// var_dump($arr);

//这样也行 
// echo json_encode($arr);


// 二维数组
$arr=array();
$arr["sss"]=array("age"=>19,"sex"=>"male","height"=>"170");
$arr["rrr"]=array("age"=>20,"sex"=>"male","height"=>"170");
$arr["www"]=array("age"=>19,"sex"=>"femnale","height"=>"170");
var_dump($arr);

echo json_encode($arr);


?>