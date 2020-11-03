var aVariable = 'a variable';

function aFunction() {
  var inAFunction = 'in aFunction';

  function anInnerFunction() {
    var inAnInnerFunction = 'in anInnerFunction';
    console.log(inAFunction);
  }

  anInnerFunction();
}

aFunction();