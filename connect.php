<?php
$name = $_POST['name'];
$lastname = $_POST['lastname'];
$email = $_POST['email'];
$trainername = $_POST['trainername'];
$langselect = $_POST['langselect'];
$feedback = $_POST['feedback'];




$conn = new mysqli('localhost', 'root', '', 'registration_form');
if($conn->connect_error){
    die('Connection Failed  :  ' $conn->connect_error);
}
else{
    $stmt - $conn->prepare("Insert into registration(name, lastname, email, langselect, feedback
}


?>

