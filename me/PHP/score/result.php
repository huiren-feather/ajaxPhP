<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>学生的成绩结果</title>
    <style>
        ul{
            list-style:none;
            color:red;
        } 
        .title{
            font-size:20px;
        
        }
    </style>
</head>
<body>
    <?php
    // 准备模拟数据，理论上应该从数据库获取
    $date=array();
    $date["123"]=array("name"=>"张三","chinese"=>"103","math"=>"113","english"=>"123");
    $date["234"]=array("name"=>"李四","chinese"=>"133","math"=>"113","english"=>"123");
    $date["345"]=array("name"=>"王五","chinese"=>"143","math"=>"113","english"=>"123");

    $code=$_GET["code"];
    

    if (array_key_exists($code,$date)) {
        $result=$date[$code];

    ?>
    <div>
        <div class="title"><?php echo $result["name"]?>成绩如下</div>
        <ul>
            <li>语文：<?php echo $result["chinese"]?>分</li>
            <li>数学：<?php echo $result["math"]?>分</li>
            <li>英语：<?php echo $result["english"]?>分</li>
        </ul>
    </div>
    <?php
           
        } else {
           ?>     
       <div>该学生考号不存在</div>
        <?php

         }
        ?>

</body>
</html>