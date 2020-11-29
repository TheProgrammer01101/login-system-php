<?php 
  include "connect.php";

  $email = $_POST['email'];
  $password = $_POST["pwd"];

  $stmt = $pdo->prepare("SELECT * FROM system_users WHERE email=?");
  $stmt->execute(array($email));
  $users = $stmt->fetchAll();

  if (isset($users[0][1])) {
      if (password_verify($password, $users[0][3])) {
          echo "valid login";
          # now lets include some dummy template instead of just a string
      } else {
          echo "invalid pass";
          # now lets include some dummy template instead of just a string
      }
  } else {
      echo "invalid email";
      # now lets include some dummy template instead of just a string
  }

?>
