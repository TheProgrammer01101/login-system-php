let inputs = document.querySelectorAll('input');
let feedback = document.querySelector('p.feedback')
let pwd;
let rpwd;

document.addEventListener('click', function () {
  inputs.forEach(input => {
    if(input.name == "pwd") {
      pwd = input.value;
    }

    if(input.name == "pwdrepeat"){
      rpwd = input.value;
    }

    if(input.value == "")
    {
      feedback.innerHTML = "please fill out all the form";
    }

    else if (pwd != rpwd){
      feedback.innerHTML = "passwords don't match";
    }
    else {
      feedback.innerHTML = "everything's good";
    }
  });
})