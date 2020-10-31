function function1() {
  console.log('start of function1');
  function2();
  console.log('end of function1');
}

function function2() {
  console.log('start of function2');
  function3();
  console.log('end of function2');
}

function function3() {
  console.log('start of function3');
  console.log('end of funcion3');
}

function1();