// iterative factorial
function factorial(number) {
  let product = 1;
  for (let i = 1; i <= number; i++) {
    product *= i;
  }

  return product;
}

// recursive factorial
function fact(number) {
  // base case
  if (number === 1) {
    return 1;
  }

  return number * fact(number - 1);
}
