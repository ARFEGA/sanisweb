<?php
    //Inicio session para guardar valores de sesion
    session_start();
    require '../PHPMailer/PHPMailerAutoload.php';
    if (isset($_POST['enviar'])) {
        $mail = new PHPMailer();
        $mail->isSMTP();

        $mail->From = "stylesabella@gmail.com";
        $mail->SMTPAuth = true;
        $mail->SMTPSecure = 'tls';
        $mail->Host = "smtp.gmail.com";
        $mail->Port = 586;
        $mail->Username = 'stylesabella@gmail.com';
        $mail->Password = 'sabella_VELILLA28891';

        $mail->addAddress('stylesabella@gmail.com');
        $mail->Subject = $_POST['asunto'];
        $mail->Body = "E-mail enviado por: " . $_POST['name'] . "\r\n";
        $mail->Body .= "E-mail del Cliente: " . $_POST['email'] . "\r\n";
        $mail->Body .= "Enviado el : " . date('d/m/Y', time()) . "\r\n";
        $mail->Body .= "____________________________________________________________" . "\r\n";
        $mail->Body .= "Contenido del mensaje: " . $_POST['msg'] . " \r\n";
        $mail->Body .= "____________________________________________________________" . "\r\n";
        //Creo variables de sesion para mensaje y para darle un color de fondo al mensaje


        if (!$mail->send()) {
            printf("SI VA");
        $_SESSION['message'] = 'Lo sentios, tenemos problemas para recibir su e-mail. Por favor, intenteló nuevamente más tarde';
            echo '<sript type="text/javascript">
                    alert("Enviado correctamente");
                </script>';
        } else {
            printf("NO VA");
            $_SESSION['message'] = 'E-mail enviado. Gracias por ponerse en contacto con nosotros. Contestaremos lo antes posible.';
                echo '<sript type="text/javascript">
                    alert("NO ENVIADO");
                </script>';
        }
    }
    header("Location: Contacto.js");
?>