<?php

// 
// $uname=$_GET["username"];
$uname=$_POST["username"];

if ($uname=="zhangsan") {
    # code...
    echo "username exists";
}else{
    echo "username OK ";
}

?>