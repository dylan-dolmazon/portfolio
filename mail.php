<?php
if(isset($_POST['submit'])) {
    // Définir les détails de l'email
    $to = "dylan.dolmazon@icloud.com";
    $subject = "Nouveau message de formulaire de contact";
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $headers = "From: " . $name . " <" . $email . ">" . "\r\n" .
               "Reply-To: " . $email . "\r\n" .
               "X-Mailer: PHP/" . phpversion();
 
    // Envoyer l'email
    console.log("coucou");
    if(mail($to, $subject, $message, $headers)) {
        console.log("Votre message a été envoyé avec succès.");
    } else {
        console.log( "Erreur: Votre message n'a pas pu être envoyé.");
    }
 
} else {
    echo "Erreur: Les détails du formulaire de contact n'ont pas été soumis.";
}
?>
