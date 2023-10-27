// sum
/* 1. Iteratevely calculate the sum of the integer series from 1 to n. This is
similar to factorial(), except it performs addition instead of multiplication.
For example, series(1) returns 1, series(2) returns 3 (1+2), etc.
*/
function sumIter(n) {
  let res = 0;
  for (let i = 1; i <= n; i++) {
    res += i;
  }

  return res;
}

/* 2. Write the recursive form of above.
 */
function sumRecursive(n) {
  if (n === 1) {
    return 1;
  }
  return n + sumRecursive(n - 1);
}