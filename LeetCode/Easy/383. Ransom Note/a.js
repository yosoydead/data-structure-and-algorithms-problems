/**
 * 383. Ransom Note
Easy
4K
418
Companies
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
 

Constraints:

1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.
 */
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  // const f = {};

  // for (let i = 0; i < magazine.length; i++) {
  //     if (!f[s[i]]) { f[s[i]] = 1; }
  //     else { f[s[i]]++; }
  // }
  const a = magazine.split("");

  for (let i = 0; i < ransomNote.length; i++) {
    const bla = a.indexOf(ransomNote[i]);
    if (bla === -1) {
      return false;
    } else {
      a[bla] = null;
    }
  }

  return true;
};
