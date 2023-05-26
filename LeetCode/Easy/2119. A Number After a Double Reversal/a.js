/**2119. A Number After a Double Reversal

Reversing an integer means to reverse all its digits.

For example, reversing 2021 gives 1202. Reversing 12300 gives 321 as the leading zeros are not retained.
Given an integer num, reverse num to get reversed1, then reverse reversed1 to get reversed2. Return true if reversed2 equals num. Otherwise return false.

 

Example 1:

Input: num = 526
Output: true
Explanation: Reverse num to get 625, then reverse 625 to get 526, which equals num.
Example 2:

Input: num = 1800
Output: false
Explanation: Reverse num to get 81, then reverse 81 to get 18, which does not equal num.
Example 3:

Input: num = 0
Output: true
Explanation: Reverse num to get 0, then reverse 0 to get 0, which equals num.
 

Constraints:

0 <= num <= 106
Accepted
58.5K
Submissions
75.7K
Acceptance Rate
77.3% */
/**
 * @param {number} num
 * @return {boolean}
 */

const reverseNumber = (num) => {
  let result = 0;

  while (num > 0) {
      const d = num % 10;
      result = (result * 10) + d;
      num = Math.floor(num / 10);
  }

  return result;
}
var isSameAfterReversals = function(num) {
  if (num === 0) { return  true; }
  // console.log(reverseNumber(1800));
  const r1 = reverseNumber(num);
  const r2 = reverseNumber(r1);

  return r2 === num;
};
// isSameAfterReversals(1800);