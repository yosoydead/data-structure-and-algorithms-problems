/**
 * Sirul lui Fibonacci. Se considera sirul definit astfel:
 * fib(n) = 0, n = 0
 *          1, n = 1
 *          fib(n-1) + fib(n-2), altfel
 */
function fib(n) {
  if (n === 0) { return 0; }
  if (n === 1) { return 1; }
  return fib(n-1) + fib(n-2);
}

console.log(fib(7));