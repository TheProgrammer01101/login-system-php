let signupForm = document.forms.signup;
const fullName = signupForm.fullName;
const email = signupForm.email;
const username = signupForm.uid;
const password = signupForm.pwd;
const repeatPassword = signupForm.rpwd;
const submitButton = signupForm.submit;

signupForm.addEventListener('submit', function (e) {
  e.preventDefault();
  checkInputs();
})

function checkInputs() {
  const fullNameValue = fullName.value.trim();
  const emailValue = email.value.trim();
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();
  const repeatPasswordValue = repeatPassword.value.trim();

  if(fullNameValue === '') {
    setErrorFor(fullName, 'Full name cannot be blank');
  } else if(!isFullName(fullNameValue)) {
    setErrorFor(fullName, "Please enter your full name (first & last name)")
  } else {
		setSuccessFor(fullName);
	}

  if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
  }
  
  if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
  } else {
		setSuccessFor(username);
  }

  if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
  } else if(!isPassword(passwordValue)) {
    setErrorFor(password, 'Password is invalid ')
  } else{
    setSuccessFor(password);
  }
  if(repeatPasswordValue === '') {
		setErrorFor(repeatPassword, 'Please confirm the passowrd');
  } else if(passwordValue !== repeatPasswordValue) {
		setErrorFor(repeatPassword, 'Passwords does not match');
	} else{
    setSuccessFor(repeatPassword);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isFullName(fullName){
  return /^[a-zA-Z]+ [a-zA-Z]+$/.test(fullName)
}

function isPassword(password) {
  return /0-9A-Za-z/.test(password);
}





