/**
 * 387. First Unique Character in a String
Easy
7.8K
255
Companies
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

Example 1:

Input: s = "leetcode"
Output: 0
Example 2:

Input: s = "loveleetcode"
Output: 2
Example 3:

Input: s = "aabb"
Output: -1
 

Constraints:

1 <= s.length <= 105
s consists of only lowercase English letters.
 */
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const a = Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    const x = s.charCodeAt(i);
    a[x - 97]++;
  }

  for (let i = 0; i < s.length; i++) {
    const x = s.charCodeAt(i);
    if (a[x - 97] === 1) {
      return i;
    }
  }

  return -1;
};
