<?php
  header("signIn.php");
  $name = explode(' ', trim($_POST['fullName'])); 
  echo "Welcome <span style='color:#2F4F4F'>".$name[0]."</span>, you're successfully signed up. you can sign in now :)";
?>