/**
 * 171. Excel Sheet Column Number
Easy
4.6K
355
Companies
Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.

For example:

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...
 

Example 1:

Input: columnTitle = "A"
Output: 1
Example 2:

Input: columnTitle = "AB"
Output: 28
Example 3:

Input: columnTitle = "ZY"
Output: 701
 

Constraints:

1 <= columnTitle.length <= 7
columnTitle consists only of uppercase English letters.
columnTitle is in the range ["A", "FXSHRXW"].
Accepted
644.3K
Submissions
1M
Acceptance Rate
63.0%
 */
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
  const obj = {};
  for (let i = 1; i <= 26; i++) {
      obj[String.fromCharCode(64+i)] = i;
  }

  const a = (str) => {
      if (str.length === 1) {
          return obj[str];
      }
      const res = a(str.substring(1));
      const first = obj[str[0]];
      return res + (first * Math.pow(26, str.length - 1));
  }

  return a(columnTitle);
};