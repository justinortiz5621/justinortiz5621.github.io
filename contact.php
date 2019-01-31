<?php

if($_POST["submit"]) {
    $recipient="your@email.address";
    $subject="Form to email message";
    $sender=$_POST["sender"];
    $senderEmail=$_POST["senderEmail"];
    $message=$_POST["message"];

    $mailBody="Name: $sender\nEmail: $senderEmail\n\n$message";

    mail($recipient, $subject, $mailBody, "From: $sender <$senderEmail>");

    $thankYou="<p>Thank you! Your message has been sent.</p>";
}


?><!DOCTYPE html>

<html>
<head>
    <link rel="shortcut icon" type="image/png" href="favicon.png"
<meta charset="UTF-8">
<title>Contact</title>
</head>

<body>
	
	 <?=$thankYou ?>
	<body align= "center">
		
<a href="index.html"><img src="homepage.png" width="40" height="" alt=""/></a>
	
    <form method="post" action="contact.php">
        <label>Name:</label>
		<br>
        <input name="sender">
		<br>

        <label>Email address:</label>
		<br>
        <input name="senderEmail">
<br>
        <label>Message:</label>
		<br>
        <textarea rows="5" cols="20" name="message"></textarea>
<br>
        <input type="submit" name="submit">
    </form>

</body>

</html>