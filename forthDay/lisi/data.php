<?php 

	$cbName = $_GET["callback"];
	$city = $_GET["city"];
	if($city == "beijing") {
		echo $cbName."('北京的天气晴')";
	}else {
		echo $cbName."('没有查询到天气信息')";
	}
	//echo "var str = 'haha'";
	
 ?>