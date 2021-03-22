<?php  

// Llamando a los campos
$name = $_POST['name'];
$surname = $_POST['surmane'];
$email = $_POST['email'];                            
$message = $_POST['message'];

// Datos para el correo
$destinatario = "romelflorian18@gmail.com";
$asunto = "Contacto desde nuestra web";

$carta = "De: $name \n";
$carta .= "Surname: $surname \n";
$carta .= "Email: $email \n";
$carta .= "Message: $message";

// Enviando Mensaje
mail($destinatario, $asunto, $carta);
?>
