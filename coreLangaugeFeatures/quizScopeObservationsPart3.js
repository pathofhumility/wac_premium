function aFunction1() {
  var inAFunction1 = 'in aFunction1';

  function anInnerFunction1() {
    var inAnInnerFunction1 = 'in anInnerFunction1';
    console.log(inAFunction1);
  }

  anInnerFunction1();
}

aFunction1();

function aFunction2() {
  var inAFunction2 = 'in aFunction2';

  function anInnerFunction2() {
    var inAnInnerFunction2 = 'in anInnerFunction2';
    // console.log(inAFunction2);
  }

  anInnerFunction2();
}

aFunction2();