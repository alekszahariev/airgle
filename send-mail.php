<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST['name'];
    $company = $_POST['company'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Set the recipient email address
    $to = 'velmarpc@gmail.com'; // Change this to your actual email address

    // Set the email subject
    $subject = 'Ново запитване от Airgle.bg';

    // Compose the email message
    $body = "Име: $name\n";
    $body .= "Компания: $company\n";
    $body .= "Телефон: $phone\n";
    $body .= "Е-Майл: $email\n\n";
    $body .= "Съобщение:\n$message";

    // Set additional headers
    $headers = "From: noreply@airgle.bg\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Attempt to send the email
    if (mail($to, $subject, $body, $headers)) {
        header("Location: ./success.html");
    } else {
        echo "Error sending email. Please try again later.";
    }
} else {
    // If the form is not submitted, redirect to the form page
    header("Location: ./index.html");
    exit;
}
?>