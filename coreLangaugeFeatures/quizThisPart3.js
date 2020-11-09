function PersonMakerA(name) {
  this.name = name;
}

function personMakerB(name) {
  return {name: name};
}

function personMakerC(name) {
  this.name = name;
}

var person1 = new PersonMakerA('person 1');
var person2 = personMakerB('person 2');
var person3 = personMakerC('person 3');

// Quiz: this, part 3
// https://watchandcode.com/courses/77710/lectures/24736743

// Which of the following statements are true?
//
// Q1. When paused at line 5, `this` is equal to PersonMakerA.
//   a. False 100%
//   b. Evidence: Debugger shows `this` referencing an object with property __prototype__
// Q2. When paused at 18, column 40, person1, person2, and person3 are all objects.
//   a. False 100%
//   b. Evidence: Debugger shows person3 to be undefined.
// Q3. The right side of line 16 returns an object with a name property.
//   a. True 100%
//   b. Evidence: The debugger shows person1 having a property of name. Checking person1
//      with typeof indicates object. 
// Q4. The right side of line 17 returns an object with a name property.
//   a. True 100%
//   b. Evidence: The dubugger shows person2 having a value of an object that has a name property.
// Q5. The right side of line 18 returns an object with a name property.
//   a. False 100%
//   b. Evidence: The bugger shows person3 being undefined after the personMakerC function is
//      called. This makes sense as that function does not have an explicit return.
// Q6. Each time you call PersonMakerA with the new keyword, `this` inside of PersonMakerA will initially be an object with just one property, __proto__.
//   a.  True 100%
//   b. Evidence: This is what the debugger shows.
// Q7. When you call PersonMakerA with the new keyword, `this` inside of PersonMakerA will be returned by the function.
//   a. True 100%
//   b. Evidence: The debugger shows the value of this after line 5 is executed === person1
//      after the personMakerA function is called.