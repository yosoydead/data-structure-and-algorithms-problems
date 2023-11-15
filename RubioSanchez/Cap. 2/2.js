/**
 * 2.2 Consider the function that adds the first n positive
integers in (1.5). Define a more general function that it is also applicable
to all nonnegative integers. In other words, modify the function considering that it can also receive n = 0 as an input argument. Finally, code
the function.
 */
function add(num) {
  if (num === 0) {
    return 0;
  }

  return num + add(num - 1);
}

console.log(add(5));