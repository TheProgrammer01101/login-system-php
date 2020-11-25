<?php 
  include "connect.php";

  $email = $_POST['email'];
  $password = $_POST["pwd"];


  $stmt = $pdo->prepare("SELECT email FROM system_users WHERE email=?");
  $stmt->execute($email);
  $user = $stmt->fetch();
  var_dump($user);
  if ($user && password_verify($password, $user['password']))
  {
      echo "valid!";
  } else {
      echo "invalid";
  }



?>