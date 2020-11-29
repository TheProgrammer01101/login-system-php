<?php
include "connect.php";

$fullName = $_POST['fullName'];
$email = $_POST['email'];
$username = $_POST['uid'];
$passinput = $_POST['pwd'];
$hashedpwd = password_hash($passinput, PASSWORD_DEFAULT);
var_dump($fullName); 

function emailExists($pdo, $email) {
  $stmt = $pdo->prepare("SELECT email FROM system_users WHERE email=?");
  $stmt->execute([$email]);
  return $stmt->fetchColumn();
}

if (emailExists($pdo, $email) == true) {
  print "e-mail is already used";
} else if (emailExists($pdo, $email) == false) {
  $query_str = "INSERT INTO system_users(name, email, username, password) VALUES(:fullName, :email, :username, :password)";
  $stmt = $pdo->prepare($query_str);
  $stmt->execute(['fullName' => $fullName, 'email' => $email, 'username' => $username, 'password' => $hashedpwd]);
  # instead of print let's add the template for the content when signed in
  print "signed up!";
  
}
