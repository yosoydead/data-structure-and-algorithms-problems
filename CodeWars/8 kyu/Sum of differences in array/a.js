/**
 * DESCRIPTION:
Your task is to sum the differences between consecutive pairs in the array in descending order.

Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).
 */
function sumOfDifferences(arr) {
  let copy = arr.sort(function (a, b) {
    return b - a;
  });
  let result = 0;
  for (let i = 0; i < copy.length - 1; i++) {
    let a = copy[i];
    let b = copy[i + 1];

    let diff = a - b;
    //     console.log(`${a} - ${b} = ${diff}`)
    result += diff;
  }
  return result;
}
