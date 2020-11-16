<?php 
  include_once 'includes/templates/header.php';
?>

<section class="login container">
  <div class="header">
    <h2>Log In</h2>
  </div>
  <form action="login.inc.php" method="post">
    <div class="form-control">
      <label for="Email">Email</label>
      <input type="email" name="email" placeholder="Email...">
      <small>Error</small>
    </div>
    <div class="form-control">
      <label for="password">Password</label>
      <input type="password" name="pwd" placeholder="Password...">
      <small>Error</small>
    </div>
    <button type="submit" name="submit">Log In</button>
  </form>
</section>

</body>
</html>