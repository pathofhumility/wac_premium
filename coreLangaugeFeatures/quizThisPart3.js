// Quiz: this, part 3
// https://watchandcode.com/courses/77710/lectures/24736743

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

// Which of the following statements are true?
//
// Q1. When paused at line 2, `this` is equal to PersonMakerA.
//   a. True 100%
//   b. Evidence:
// Q2. When paused at 15, column 40, person1, person2, and person3 are all objects.
//   a.
//   b. Evidence:
// Q3. The right side of line 13 returns an object with a name property.
//   a.
//   b. Evidence:
// Q4. The right side of line 14 returns an object with a name property.
//   a.
//   b. Evidence:
// Q5. The right side of line 15 returns an object with a name property.
//   a.
//   b. Evidence:
// Q6. Each time you call PersonMakerA with the new keyword, `this` inside of PersonMakerA will initially be an object with just one property, __proto__.
//   a.
//   b. Evidence:
// Q7. When you call PersonMakerA with the new keyword, `this` inside of PersonMakerA will be returned by the function.
//   a.
//   b. Evidence: