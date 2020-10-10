<!-- 根据学生的考号查询数据库，得到数据之后进行返回 -->
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>学生成绩结果</title>
	<style>
		ul{
			list-style: none;
			color: red;
		}
		.title{
			font-size: 20px;
		}
	</style>
</head>
<body>
<?php 
	
	//准备模拟数据，注意的是，按道理数据应该是从数据库获取的，这里进行简单的处理
	$data = array();
	$data["123"] = array("name"=>"张三","chinese"=>"103","math"=>"89","english"=>"143");
	$data["234"] = array("name"=>"李四","chinese"=>"123","math"=>"69","english"=>"43");
	$data["345"] = array("name"=>"王五","chinese"=>"83","math"=>"129","english"=>"63");

	$code = $_POST["code"];
	//查询数据库

	
	
 ?>

 	<?php 

 	if(array_key_exists($code, $data)){
 		$result = $data[$code];
 	?>
	<div>
		<div class="title"><?php echo $result["name"] ?>成绩如下</div>
		<ul>
			<li>语文：<?php echo $result["chinese"] ?>分</li>
			<li>数学：<?php echo $result["math"] ?>分</li>
			<li>英语：<?php echo $result["english"] ?>分</li>
		</ul>
	</div>

	<?php 
	} else {
	?>
		<div>该学生考号不存在</div>

	<?php } ?>
	
</body>
</html>