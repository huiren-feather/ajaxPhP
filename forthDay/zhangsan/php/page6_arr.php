<?php 

	//数组遍历
	$arr = array("zhangsan","lisi","wangwu");
	for($i=0;$i<count($arr);$i++){
		$temp = $arr[$i];
		echo $temp . "<br>";
	}


	$arr = array("name1" => "zhangsan","name2" =>"lisi","name3" =>"wangwu");
	foreach ($arr as $key => $value) {
		echo $key.">>>" . $value ."<br>";
	}

 ?>