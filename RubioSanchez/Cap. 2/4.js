/**
 * 2.4 Consider the problem of printing the digits of some
nonnegative integer n on the console vertically, in “normal” order, where
the most significant digit must appear on the first line, the second most
significant digit on the second line, and so on. For instance, if n = 2743
the program must print the following lines on the console: 2 7 4 3

  F(n) = n < 10, print(n)
         n > 10, f(n // 10)
         print(n % 10)
 */
function print(num) {
  if (num < 10) {
    console.log(num);
    return;
  }

  print(Math.floor(num / 10));
  console.log(num % 10);
}

print(2743);