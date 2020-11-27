<?php
  if($_GET['page'] == "signin"){
    include_once ("includes/templates/" . $_GET['page'] . ".php");
  }

  else if($_GET['page'] == "signup"){
    include_once ("includes/templates/" . $_GET['page'] . ".php");
  }

  else{
    include_once "includes/templates/home.php";
  }
?>