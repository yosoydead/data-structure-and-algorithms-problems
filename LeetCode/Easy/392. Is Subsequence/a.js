/** 392. Is Subsequence
Easy
9K
477
Companies
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false
 

Constraints:

0 <= s.length <= 100
0 <= t.length <= 104
s and t consist only of lowercase English letters.
 

Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= 109, and you want to check one by one to see if t has its subsequence. In this scenario, how would you change your code?
Accepted
1.1M
Submissions
2.4M
Acceptance Rate
48.0% */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  if (s.length > t.length) {
      return false;
  }
  let sliceStart = 0;

  for (let i = 0; i < s.length; i++) {
      const pos = t.substring(sliceStart, t.length).indexOf(s[i]);
      if (pos < 0) {
          return false;
      }
      sliceStart += (pos + 1);
  }
  return true;
};