<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
$phone = $_POST['user_number'];
$mail = $_POST['user_mail'];

$mail->isSMTP();
$mail->Host = 'smtp.mail.ru';
$mail->SMTPAuth = true; 
$mail->Username = 'СЮДА ПОЧТА'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'СЮДА ПАРОЛЬ'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';
$mail->Port = 465; 

$mail->setFrom('СЮДА');  // от кого будет уходить письмо?
$mail->addAddress('СЮДА');     // Кому будет уходить письмо 
$mail->isHTML(true);

$mail->Subject = 'Заявка с MAB';
$mail->Body    = '' .$name . ' оставил заявку, его телефон ' .$phone. '<br>Почта этого пользователя: ' .$mail;
$mail->AltBody = '';

?>