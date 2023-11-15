/**
 * 2.6 Define a recursive function that calculates the largest
value in a list a of n elements, where the decomposition simply reduces
the size of the problem by a unit
 */
function big(arr) {
  let biggest = -900000;

  const fn = (a, i) => {
    if (i === a.length) {
      return;
    }

    if (a[i] > biggest) {
      biggest = a[i];
    }

    fn(a, i+=1);
  }

  fn(arr, 0)

  return biggest;
}

console.log(big([5, -1, 21, 3, 2, 4, 7, 2]));
