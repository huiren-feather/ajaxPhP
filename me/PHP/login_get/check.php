<?php

echo "checkUsername<br>";

$username=$_GET["username"];
$password=$_GET["password"];

if ($username=="admin"&&$password=="123") {
    # code...
    echo "success";
}else{
    echo "fail";
}


?>