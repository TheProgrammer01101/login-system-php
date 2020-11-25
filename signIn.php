<?php 
  include_once 'includes/templates/header.php';
?>

<section class="signin container">
  <div class="header">
    <h2>Sign In</h2>
  </div>
  <form name="signIn" class="login">
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
    <button type="submit" name="submit">Sign In</button>
  </form>
  <div id="test"></div>
</section>
<script src="app.js"></script>
</body>
</html>