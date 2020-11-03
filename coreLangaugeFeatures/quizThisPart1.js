// Quiz: this, part 1
// https://watchandcode.com/courses/77710/lectures/24007951

var thisOutsideOfAFunction = this;
var theWindow = window;

function myFunction() {
  var thisInsideOfMyFunction = this;
  // test Q1 & Q2
  console.log('inside === outside', thisInsideOfMyFunction === thisOutsideOfAFunction);
  // test Q3
  console.log('inside === window', thisInsideOfMyFunction === theWindow);
  console.log(thisInsideOfMyFunction);
}

myFunction();

// Which of the following statements are true?

// When paused at line 6, column 3, thisInsideOfMyFunction will not be equal to thisOutsideOfAFunction.
//   a. False 100%
//   b. Evidence: Line 10 outputs TRUE.
// When paused at line 6, column 3, thisInsideOfMyFunction will be equal to thisOutsideOfAFunction.
//   a. True 100%
//   b. Evidence: If Q1 is FALSE, this must be TRUE.
// When paused at line 6, column 3, thisInsideOfMyFunction will be equal to theWindow.
//   a. True 100%
//   b. Evidence: Line 12 outputs TRUE.
