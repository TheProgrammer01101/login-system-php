## Validate form data with Javascript
>**validate the form data from sign up form with javascript. you don't need to be super secure for this but set up some rules. if you click on sign up and 
>an input field is not properly filled it will get a visible indication i.e.  .errorForm class style**

```css
.errorForm {
  animation: shake 0.3s;
  animation-iteration-count: 2;
}

@keyframes shake {
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }
  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
}
```

## Post form data with AJAX to PHP file on server
>**if the form is correctly filled then you will "post" the data with ajax to a php file called validate.php in folder include ( i suggest to make an extra 
>subfolder so you can seperate template from scripts )**

## Handle data in PHP file an give response
>**for now this validate.php will just "echo" the data.**

## Display the send data
>**the response of the ajax call will be the data. for now just post it in inner html of a paragraph element you just write into html for now. make it have 
>id="test" so its easy to access with js.**






# Please update the repo after each step at least and give a message when you update.

Happy coding :computer: :rocket:
