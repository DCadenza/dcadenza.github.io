<?php

$recepient = "jamie.cadenza@gmail.com";
$sitename = "from my portfolio site.";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);
$text = trim($_POST["text"]);
$message = "Имя: $name \nТелефон: $phone \nE-mail: $email \nСообщение: $text";

$pagetitle = "New message \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
?>
