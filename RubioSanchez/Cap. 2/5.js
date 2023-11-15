/**
 * 2.5 Define a general diagram when using a divide and
conquer approach for the problem of calculating the largest value in a
list a of n elements. Use appropriate general notation instead of concrete
examples.

  F(arr) = arr.length === 1, arr[0]
           arr.length > 1, max(F(arr.slice(0, len//2)), F(arr.slice(len//2)))
 */
function big(arr) {
  if (arr.length === 1) {
    return arr[0];
  }

  const mid = Math.floor(arr.length / 2);
  const a = big(arr.slice(0, mid));
  const b = big(arr.slice(mid));

  return Math.max(a, b);
}

console.log(big([5, -1, 20, 3, 2, 4, 7, 2]));
