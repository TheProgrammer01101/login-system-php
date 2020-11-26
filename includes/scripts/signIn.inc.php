<?php 
  include "connect.php";

  $email = $_POST['email'];
  $password = $_POST["pwd"];

  $stmt = $pdo->prepare("SELECT * FROM system_users WHERE email=?");
  $stmt->execute([$email]);
  $users = $stmt->fetchAll();

  var_dump($users[0][1]);
  var_dump($users[0][3]);

  if (isset($users[0][1])) {
      if (password_verify($password, $users[0][3])) {
          echo "valid login";
      } else {
          echo "invalid pass";
      }
  } else {
      echo "invalid email";
  }

?>