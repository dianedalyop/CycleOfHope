<?php
if ($_SERVER["REQUEST"] == "POST") {
    // Collect data from the form
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Define the email to send the message to
    $to = "dianedalyop860@gmail.com";
    $subject = "New Contact Form Submission";

    // Create the email content
    $body = "Name: $name\n";
    $body .= "Email: $email\n\n";
    $body .= "Message:\n$message\n";

    // Define headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";


    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send the message.";
    }
} else {
    echo "Invalid request method.";
}
?>