<?php
if (!empty($_POST['name']) AND !empty($_POST['email']) AND !empty($_POST['message']))
{
    $headers = 'From: Кротов Роман\r\n' .
                'Reply-To: dmitriiholubtsov@gmail.com\r\n' .
                'X-Mailer: PHP/' . phpversion();

    $theme = "Новое сообщение с сайта";

    $letter = "Данные сообщения:";
    $letter .="\n\n";
    $letter .="Имя: ".$_POST['name'];
    $letter .="\nEmail: ".$_POST['email'];
    $letter .="\nТелефон: ".$_POST['phone'];
    $letter .="\nСообщение: ".$_POST['message'];

    if (mail("dmitriiholubtsov@gmail.com", $theme, $letter, $headers)){
      header("Location: thankyou.php");
    } else {
      header("Location: /");
    }

} else {
  header("Location: /");
}
 ?>
