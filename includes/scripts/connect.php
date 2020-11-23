<?php
  $host = "localhost";
  $user = "root";
  $pwd = "root";
  $dbname = "php_system";

  $dsn = "mysql:host=". $host.";dbname=". $dbname;

  $fullName = $_POST['fullName'];
  $email = $_POST['email'];
  $username = $_POST['uid'];
  $passinput = $_POST['pwd'];
  $hashedpass = password_hash($passinput, PASSWORD_DEFAULT);

  $pdo = new PDO($dsn, $user, $pwd);
  $query_str = "INSERT INTO system_users(`Full Name`, `Email`, `Username`, `Password`) VALUES(:fullName, :email, :username, :password)";
  $stmt = $pdo->prepare($query_str);
  $stmt->execute([fullName=> $fullName, email => $email, username => $username, password => $hashedpass]);
  echo "datasent"

?>