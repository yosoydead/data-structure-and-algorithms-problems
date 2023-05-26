/**
 * 258. Add Digits
Easy
4.2K
1.9K
Companies
Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

 

Example 1:

Input: num = 38
Output: 2
Explanation: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2 
Since 2 has only one digit, return it.
Example 2:

Input: num = 0
Output: 0
 

Constraints:

0 <= num <= 231 - 1
 */
/**
 * @param {number} num
 * @return {number}
 */
const sumDigits = (num) => {
  let result = 0;

  while (num > 0) {
      const d = num % 10;
      result += d;
      num = Math.floor(num / 10);
  }

  return result;
};

var addDigits = function(num) {
  if (num === 0) { return 0; }

  let sum = sumDigits(num);
  while (sum > 9) {
      sum = sumDigits(sum);
  }

  return sum;
};