// Quiz: this, part 2
// https://watchandcode.com/courses/77710/lectures/24725966

var thisOutsideOfAFunction = this;
var theWindow = window;

var myObject = {
  myMethod: function() {
    var thisInsideOfMyMethod = this;
    // test Q1
    console.log('inside === outside', thisInsideOfMyMethod === thisOutsideOfAFunction);
    // test Q2
    console.log('inside === myMethod', thisInsideOfMyMethod === this.myMethod);
    // test Q4
    console.log('thisOutside === theWindow', thisOutsideOfAFunction === theWindow);
    console.log(thisInsideOfMyMethod);
  }
};

myObject.myMethod();

// Which of the following are true?

// Q1. When paused at line 16, column 5, thisInsideOfMyMethod is equal to thisOutsideOfAFunction.
//     a. False 100%
//     b. Evidence: Line 11 outputs FALSE.
// Q2. When paused at line 16, column 5, thisInsideOfMyMethod is equal to myMethod.
//     a. False 100%
//     b. Evidence: Lines 13 and 16 demonstrate that thisInsideOfMyMethod === the object assigned
//                  to the myObject variable and myMethod is a property of the myObject object
//                  with an anonymous function as a value.
// Q3. When paused at line 16, column 5, thisInsideOfMyMethod is equal to myObject.
//     a. True 100%
//     b. Evidence: Q2 evidence established this.
// Q4. When paused at line 16, column 5, thisOutsideOfAFunction is equal to theWindow.
//     a. True 100%
//     b. Evidence: Line 15 outputs TRUE.