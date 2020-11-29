<?php

  if(isset($_GET['page'])) {
    include_once ("includes/templates/" . $_GET['page'] . ".php");
  }

  else {
    include_once "includes/templates/home.php";
  }
?>
