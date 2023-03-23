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
    $stmt = $conn->prepare("Insert into registration(name, lastname, email, trainername, langselect, feedback)
    values(?,?,?,?,?,?)");
    $stmt -> bind_param("sssss",$name, $lastname, $email, $trainername, $langselect,$feedback);
    $stmt -> execute();

    echo "Your opinion has been sent to us. Thank you for participating.";

    $stmt-> close();
    $conn-> close();
}


?>

