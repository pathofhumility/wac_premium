var thisOutsideOfAFunction = this;
var theWindow = window;

function myFunction() {
  var thisInsideOfMyFunction = this;
  console.log(thisInsideOfMyFunction);
}

myFunction();