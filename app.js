let signForm;
let fullName;
let email;
let username;
let password;
let repeatPassword;
let submitButton;

let filePath;

function signUpAissgn () {
  signForm = document.forms.signUp;
  fullName = signForm.fullName;
  email = signForm.email;
  username = signForm.uid;
  password = signForm.pwd;
  repeatPassword = signForm.rpwd;
  submitButton = signForm.submit;

  filePath = "signUp.inc.php";
}

function signInAssign() {
  signForm = document.forms.signIn;
  password = signForm.pwd;
  email = signForm.email;
  submitButton = signForm.submit;
  filePath = "signIn.inc.php";
}



const path = window.location.pathname;
const page = path.substring(path.lastIndexOf('/') + 1);



const allFormControl = document.querySelectorAll('.form-control');
let testDiv = document.getElementById('test');
if(page == "signup.php"){
   signUpAissgn(); 
}
else if(page  == "signin.php"){
  signInAssign();
}

const xhr = new XMLHttpRequest();


signForm.addEventListener('submit', function (e) {
  e.preventDefault();
  let xhrQuery;
  if(signForm.classList.contains('login')) {
    checkLogIn();
    xhrQuery = `email=${email.value}&pwd=${password.value}`;
  }
  else {
    checkInputs();
    xhrQuery  = `fullName=${fullName.value}&email=${email.value}&uid=${username.value}&pwd=${password.value}&rpwd=${repeatPassword.value}`;
  }
  let numberOfSuccessInput = 0;
  allFormControl.forEach(formControl => {
    if (formControl.classList.contains("success"))
      numberOfSuccessInput++;
      if(numberOfSuccessInput == allFormControl.length) {
        xhr.onload = function () {
          testDiv.innerHTML = this.responseText;
        }
        xhr.open("POST", `includes/scripts/${filePath}`);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
        xhr.send(xhrQuery);
         
      }
  });    
})

function checkLogIn() {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (emailValue === '') {
      setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
      setErrorFor(email, 'Not a valid email');
    } else {
      setSuccessFor(email);
    }

    if (passwordValue === '') {
      setErrorFor(password, 'Password cannot be blank');
    } else {
      setSuccessFor(password);
    }
}
function checkInputs() {
  const fullNameValue = fullName.value.trim();
  const emailValue = email.value.trim();
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();
  const repeatPasswordValue = repeatPassword.value.trim();

  if (fullNameValue === '') {
    setErrorFor(fullName, 'Full name cannot be blank');
  } else if (!isFullName(fullNameValue)) {
    setErrorFor(fullName, "Please enter your full name (first & last name)")
  } else {
    setSuccessFor(fullName);
  }

  if (emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Not a valid email');
  } else {
    setSuccessFor(email);
  }

  if (usernameValue === '') {
    setErrorFor(username, 'Username cannot be blank');
  } else {
    setSuccessFor(username);
  }

  if (passwordValue === '') {
    setErrorFor(password, 'Password cannot be blank');
  } else {
    setSuccessFor(password);
  }
  if (repeatPasswordValue === '') {
    setErrorFor(repeatPassword, 'Please confirm the passowrd');
  } else if (passwordValue !== repeatPasswordValue) {
    setErrorFor(repeatPassword, 'Passwords does not match');
  } else {
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

function isFullName(fullName) {
  return /^[a-zA-Z]+ [a-zA-Z]+$/.test(fullName)
}







