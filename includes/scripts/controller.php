<?php
  if($_GET['page'] == "signin"){
    include_once ("includes/templates/" . $_GET['page'] . ".php");
  }

  else if($_GET['page'] == "signup"){
    include_once ("includes/templates/" . $_GET['page'] . ".php");
  }

# it's better to check if page variable is set.. replace line 2 to 8 
# if(isset($_GET['page'])) include_once ("includes/templates/" . $_GET['page'] . ".php");

  else{
    include_once "includes/templates/home.php";
  }
?>
