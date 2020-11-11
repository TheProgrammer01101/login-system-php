<?php 
  include_once 'includes/header.php';
?>

<section class="signup form">
  <h2>Sign Up</h2>
  <form action="signup.inc.php" method="post">
    <input type="text" name="name" placeholder="Full name...">
    <input type="email" name="email" placeholder="Email...">
    <input type="text" name="uid" placeholder="Username...">
    <input type="password" name="pwd" placeholder="Password...">
    <input type="password" name="pwdrepeat" placeholder="Repeat password...">
    <button type="submit" name="submit">Sign Up</button>
    <p class="feedback"></p>
  </form>
</section>
  <script src="app.js"></script>
</body>
</html>