// iterative fibonacci
function fibonacci(number) {
  let a = 1;
  let b = 1;
  let c;

  for (let i = 1; i < number; i++) {
    c = a + b;
    a = b;
    b = c;
  }

  return a;
}

// recursive fibonacci
function fib(number) {
  if (number === 1 || number === 2) {
    return 1;
  }

  let result = fib(number - 1) + fib(number - 2);
  return result;
}
