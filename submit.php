<?php
if (!empty($_POST['name']) AND !empty($_POST['email']) AND !empty($_POST['message']) AND !empty($_POST['phone'])){

    $headers = 'From: Дмитрий\r\n'.
                'Replay-To: dmitriiholubtsov@gmail.com\r\n'.
                'X-Meiler: PHP/'. phpversion();

    $theme = 'Новое сообщение';

    $letter = 'Данные сообщения:\r\n';
    $letter .= 'Имя: '.$_POST['name'].'\r\n';
    $letter .= 'Email: '.$_POST['email'].'\r\n';
    $letter .= 'Телефон: '.$_POST['phone'].'\r\n';
    $letter .= 'Сообщения: '.$_POST['message'].'\r\n';

    if (mail('dmitriiholubtsov@gmail.com', $theme, $letter, $headers)){
        header('Location:/thankyou.php')
    }
} else {
    header('Location:/')
}
?>
