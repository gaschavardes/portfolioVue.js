
<?php
$subject = $_POST['subject'] ; // Subject of your email
$to = "contact@financebybee.com";
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= "From: " . $_POST['email'] . "\r\n"; // Sender's E-mail
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$message .= 'Name: ' . $_POST['name'] . "<br>";
$message .= $_POST['message'];
if (@mail($to, $subject, $message, $headers))
{
	// Transfer the value 'sent' to ajax function for showing success message.
	echo 'sent';
}
else
{
	// Transfer the value 'failed' to ajax function for showing error message.
	echo 'failed';
}
?>

