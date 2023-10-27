// exponent iterative
function exponentIterative(a, n) {
  let res = 1;
  for (let i = 0; i < n; i++) {
    res *= a;
  }
  return res;
}

// exponent recursive
function exponentRecursive(a, n) {
  if (n === 1) {
    return a;
  }

  if (n % 2 === 0) {
    result = exponentRecursive(a, n / 2);
    return result * result;
  }

  result = exponentRecursive(a, Math.floor(n / 2));
  return result * result * a;
}