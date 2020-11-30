<?php 
  include "connect.php";

  $email = $_POST['email'];
  $password = $_POST["pwd"];

  $stmt = $pdo->prepare("SELECT * FROM system_users WHERE email=?");
  $stmt->execute(array($email));
  $users = $stmt->fetchAll();

  if (isset($users[0][1])) {
      if (password_verify($password, $users[0][3])) {
          $yourName = $users[0][0];
          include_once "/Applications/MAMP/htdocs/System/includes/templates/validTemp.php"; 
      } else {
          include_once "/Applications/MAMP/htdocs/System/includes/templates/invalidPassTemp.php";
      }
  } else {
      include_once "/Applications/MAMP/htdocs/System/includes/templates/invalidEmailTemp.php";
  }

?>
