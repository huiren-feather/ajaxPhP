<?php

echo "checkUsername<br>";

$username=$_POST["username"];
$password=$_POST["password"];

if ($username=="admin"&&$password=="123") {
    # code...
    echo "success";
}else{
    echo "fail";
}


?>