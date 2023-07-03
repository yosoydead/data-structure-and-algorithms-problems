/**
 * 2544. Alternating Digit Sum
Easy
260
16
Companies
You are given a positive integer n. Each digit of n has a sign according to the following rules:

The most significant digit is assigned a positive sign.
Each other digit has an opposite sign to its adjacent digits.
Return the sum of all digits with their corresponding sign.

 

Example 1:

Input: n = 521
Output: 4
Explanation: (+5) + (-2) + (+1) = 4.
Example 2:

Input: n = 111
Output: 1
Explanation: (+1) + (-1) + (+1) = 1.
Example 3:

Input: n = 886996
Output: 0
Explanation: (+8) + (-8) + (+6) + (-9) + (+9) + (-6) = 0.
 

Constraints:

1 <= n <= 109
 */
/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function (n) {
  let result = 0;
  let arr = [];

  while (n > 0) {
    arr.push(n % 10);
    n = Math.floor(n / 10);
  }

  let pos = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    pos % 2 === 0 ? (result += arr[i]) : (result += arr[i] * -1);
    pos++;
  }

  return result;
};
