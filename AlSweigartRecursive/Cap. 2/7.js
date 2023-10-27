/*3. Iteratively calculate the sum of the first n powers of 2 in a function.
The powers of 2 are 2, 4, 8, 16, etc. For example, sum(1) returns 2, sum(2)
returns 6 (2+4), etc. */
function sumPow2Iter(n) {
  let res = 0;
  for (let i = 1; i <= n; i++) {
    res += Math.pow(2, i);
  }

  return res;
}

/*4. Write the recursive version of above. */
function sumPow2Recursive(n, total = 0) {
  if (n === 0) {
    // console.log('basecase', 2)
    return total;
  }

  // sumPow2Recursive(n-1);
  // const x = sumPow2Recursive(n-1) + Math.pow(2, n);
  // total += Math.pow(2, n);
  // console.log(total);
  total += Math.pow(2, n);
  sumPow2Recursive(n - 1, total);
}

sumPow2Recursive(3);
