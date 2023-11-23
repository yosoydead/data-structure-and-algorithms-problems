/**
 * 451. Sort Characters By Frequency
Medium
7.4K
242
Companies
Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

Return the sorted string. If there are multiple answers, return any of them.

 

Example 1:

Input: s = "tree"
Output: "eert"
Explanation: 'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
Example 2:

Input: s = "cccaaa"
Output: "aaaccc"
Explanation: Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers.
Note that "cacaca" is incorrect, as the same characters must be together.
Example 3:

Input: s = "Aabb"
Output: "bbAa"
Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
Note that 'A' and 'a' are treated as two different characters.
 

Constraints:

1 <= s.length <= 5 * 105
s consists of uppercase and lowercase English letters and digits.
Accepted
556.4K
Submissions
789.2K
Acceptance Rate
70.5%
 */
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
  const obj = {};

  for (let i = 0; i < s.length; i++) {
      if (!obj[s[i]]) {
          obj[s[i]] = 1;
      } else {
          obj[s[i]] += 1;
      }
  }

  // console.log(obj)
  const keys = Object.keys(obj).sort((a,b) => obj[b] - obj[a]);
  // console.log(keys);
  let result = "";
  for (let i = 0; i < keys.length; i++) {
      const x = keys[i].repeat(obj[keys[i]]);
      result += x;
  }

  return result;
};
