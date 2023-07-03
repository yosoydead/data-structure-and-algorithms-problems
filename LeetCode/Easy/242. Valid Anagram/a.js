/**
 * 242. Valid Anagram
Easy
9.1K
285
Companies
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // let n = 0;
  if (s.length !== t.length) {
    return false;
  }
  const frec = {};

  for (let i = 0; i < s.length; i++) {
    if (!frec[s[i]]) {
      frec[s[i]] = 1;
    } else {
      frec[s[i]]++;
    }
    // n += s.charCodeAt(i);
  }

  for (let i = 0; i < t.length; i++) {
    if (!frec[t[i]]) {
      return false;
    }

    if (frec[t[i]]) {
      frec[t[i]]--;
    }
    // n -= t.charCodeAt(i);
  }
  const x = Object.keys(frec);
  for (let i = 0; i < x; i++) {
    if (frec[x[i]] !== 0) {
      return false;
    }
  }

  return true;
};
