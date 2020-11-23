<?php 
  include_once 'includes/templates/header.php';
?>

<section class="signup container">
  <div class="header">
    <h2>Sign Up</h2>
  </div>
  <form method="post" name="signup">
    <div class="form-control">
      <label for="full name">Full name</label>
      <input type="text" name="fullName" id="fullName" placeholder="Full name...">
      <small>Error</small>
    </div>

    <div class="form-control">
      <label for="Email">Email</label>
      <input type="email" name="email" id="email" placeholder="Email...">
      <small>Error</small>
    </div>

    <div class="form-control">
      <label for="username">Username</label>
      <input type="text" name="uid" id="uid" placeholder="Username...">
      <small>Error</small>
    </div>

    <div class="form-control">
      <label for="password">Password</label>
      <input type="password" name="pwd" id="pwd" placeholder="Password...">
      <small>Error</small>
    </div>

    <div class="form-control">
      <label for="repeat password">Repeat password</label>
      <input type="password" name="rpwd" id="rpwd" placeholder="Repeat password...">
      <small>Error</small>
    </div>

    <button type="submit" name="submit">Sign Up</button>
  </form>
  <div id="test"></div>
</section>
  <script src="app.js"></script>
</body>
</html>