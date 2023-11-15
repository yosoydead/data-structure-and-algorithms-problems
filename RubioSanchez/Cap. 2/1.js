/**
 * 2.1 Let n be some positive integer. Consider the problem
of determining the number of bits set to 1 in the binary representation
of n (i.e., n expressed in base 2). For example, for n = 2510 = 110012
(the subscript indicates the base in which a number is expressed), the
result is three bits set to 1. Indicate the size of the problem and provide
a mathematical expression for such size
 */
function countOnes(n) {
  let ones = 0;

  const fn = (num) => {
    if (num === 0) {
      return;
    }

    const d = num % 2;
    if (d === 1) { ones++; }

    fn(Math.floor(num / 2));
  }

  fn(n);

  console.log(ones);
}

countOnes(25);