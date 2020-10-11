<?php
$arr=array();
$arr[0]='eee';
$arr[1]='yyy';

$arr[2]='ttt';

// echo $arr;不能直接输出数组
echo $arr[1]."<br>";

// 直接输出数组
print_r($arr);
var_dump($arr);

//这样也行 
echo json_encode($arr);

?>