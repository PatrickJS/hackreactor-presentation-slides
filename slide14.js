

Write a function that takes a
function and an argument, and
returns a function that can
supply a second argument.

  add3 = curry(add, 3);
  add3(4) //=> 7
  curry(mul, 5)(6) //=> 30
