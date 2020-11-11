<?php 
  include_once 'includes/header.php';
?>

<section class="login form">
  <h2>Log In</h2>
  <form action="login.inc.php" method="post">
    <input type="email" name="email" placeholder="Email...">
    <input type="password" name="pwd" placeholder="Password...">
    <button type="submit" name="submit">Log In</button>
  </form>
</section>

</body>
</html>