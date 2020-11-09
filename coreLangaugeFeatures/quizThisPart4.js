function logThis() {
  console.log(this);
}

var gordon = {name: 'Gordon'};
var explicitlySetLogThis = logThis.bind(gordon);

explicitlySetLogThis();
logThis();

// Quiz: this, part 4
// https://watchandcode.com/courses/77710/lectures/24770320
//
// Which of the following statements are true?
// 
// 1. When paused at line 2, column 3, this is equal to Window.
// a. false 100%
// b. Evidence: The debugger shows `this` to be equal to an object with a name property
//    equal to "Gordon"
// 2. When paused at line 2, column 3, `this` is equal to explicitlySetLogThis.
// a. false 100%
// b. Evidence: `this` is equal to an object with propery name equal to "Gordon".
//    explicitlySetLogThis is equal to: function logThis() {console.log(this);}
//    Also added a test after line 2: this === explicitlySetLogThis Result => false.
// 3. logThis() and explicitlySetLogThis() will log different values to the console.
// a. true 100%
// b. Evidence: logThis() => Window object. explicitlySetLogThis() => {name: 'Gordon'}
// 4. logThis.bind(x) returns a function whose `this` value will be equal to x.
// Aside from that, the function returned by logThis.bind(x), will behave
// identically to logThis.
// a. true 100%
// b. Evidence: Added logThis() after line 8. Calling line 8 logs the bound `gordon`
//    object. Calling line 9 logs the default window object which is the default
//    for `this` as function logThis() is written. The behavior of both calls is the
//    same, the output is dependant on the value of `this`.