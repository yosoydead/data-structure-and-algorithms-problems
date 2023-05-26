/**
 * 415. Add Strings
Easy
4.5K
658
Companies
Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

 

Example 1:

Input: num1 = "11", num2 = "123"
Output: "134"
Example 2:

Input: num1 = "456", num2 = "77"
Output: "533"
Example 3:

Input: num1 = "0", num2 = "0"
Output: "0"
 

Constraints:

1 <= num1.length, num2.length <= 104
num1 and num2 consist of only digits.
num1 and num2 don't have any leading zeros except for the zero itself.
 */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

const addDigits = (a, b) => {
  const total = a + b;
  const digit = total % 10;
  return {
      digit,
      rest: Math.floor(total / 10), 
  };
};

var addStrings = function(num1, num2) {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let r = [];
  let restToAdd = 0;

  while (i >= 0 || j >= 0) {
      const d1 = num1[i];
      const d2 = num2[j];

      if (d1 && d2) {
          const a = addDigits(+d1, +d2);
          const t = addDigits(restToAdd, a.digit);

          // const b = addDigits(a.digit, restToAdd);
          restToAdd = a.rest;
          restToAdd += t.rest;
          // if (t > 9) { restToAdd += t % 10; }
          r.push(t.digit);
          // r += `${}`
          i--;
          j--;
      }
      if (d1 && !d2) {
          const a = addDigits(+d1, restToAdd);
          r.push(a.digit);
          restToAdd = a.rest;
          i--;
      }

      if (d2 && !d1) {
          const a = addDigits(+d2, restToAdd);
          r.push(a.digit);
          restToAdd = a.rest;
          j--;
      }
      
  }
  if (restToAdd > 0) {
      r.push(restToAdd);
  }
  return r.reverse().join("");
};