<?php
// 数组遍历

// 一
$arr =array("zhangsan","lisi","wangwu");
for ($i=0; $i <count($arr); $i++) { 
    echo $arr[$i] . "<br>";
}



// $arr =array("name1"=>"zhangsan","name2"=>"lisi","name3"=>"wangwu");
// for ($i=0; $i <count($arr); $i++) { 
//     echo $arr[$i] . "<br>";
// }

// 二
$arr =array("name1"=>"zhangsan","name2"=>"lisi","name3"=>"wangwu");
foreach ($arr as $key => $value) {
    # code...
    echo $key.">>".$value."<br>";

}


?>