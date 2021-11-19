<?php

$email = $_POST['user_email'];
$phone = $_POST['user_phone'];
$radios = $_POST['radios'];
$check = $_POST['check'];
echo "Скрипт сработал! <br>". $email . "<br>" . $phone . "<br>" . $radios . "<br>" . $check;

?>