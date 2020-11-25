<?php
  $host = "localhost";
  $user = "root";
  $pwd = "root";
  $dbname = "php_system";

  $dsn = "mysql:host=". $host.";dbname=". $dbname;
  $pdo = new PDO($dsn, $user, $pwd);
?>