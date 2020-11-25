// let signInForm = document.forms.signIn;
// const email = signInForm.email;
// const password = signInForm.pwd;
// let testDiv = document.getElementById('test');
// const xhr = new XMLHttpRequest();

// signInForm.addEventListener('submit', (e)=> {
//   e.preventDefault();
//   // checkInputs();
//     xhr.onload = function () {
//       testDiv.innerHTML = this.responseText;
//     }
//     xhr.open("POST", "includes/scripts/signIn.inc.php");
//     xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
//     xhr.send(`email=${email.value}&pwd=${password.value}`);
    
// })

// // function checkInputs() {
// //   const emailValue = email.value.trim();
// //   const passwordValue = password.value.trim();

// //   if (emailValue === '') {
// //     setErrorFor(email, 'Please type your email');
// //   } else {
// //     setSuccessFor(email);
// //   }

// //   if (passwordValue === '') {
// //     setErrorFor(password, 'Please type your password');
// //   } else {
// //     setSuccessFor(password);
// //   }
// // }

// // function setErrorFor(input, message) {
// //   const formControl = input.parentElement;
// //   const small = formControl.querySelector('small');
// //   formControl.className = 'form-control error';
// //   small.innerText = message;
// // }

// // function setSuccessFor(input) {
// //   const formControl = input.parentElement;
// //   formControl.className = 'form-control success';
// // }