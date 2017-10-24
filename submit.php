<?php
if (!empty($_POST['name']) AND !empty($_POST['email']) AND !empty($_POST['message']) AND !empty($_POST['phone'])){

    $headers = 'From: Кротов Роман'
                'Replay-To: '
                'X-Meiler: PHP/'. phpversion();

    $theme = 'Новое сообщение';

    $letter = 'Данные сообщения';
    $letter .= 'Имя: '.$_POST['name'].'\r\n';
    $letter .= 'Email: '.$_POST['email'].'\r\n';
    $letter .= 'Телефон: '.$_POST['phone'].'\r\n';
    $letter .= 'Сообщения: '.$_POST['message'].'\r\n';
    mail('dmitriiholubtsov@gmail.com', $theme, $letter);
    if (mail('dmitriiholubtsov@gmail.com', $theme, $letter, $headers)){
        header('Location:thankyou.html')
    }
} else {
    header('Location:/')
}
 ?>
