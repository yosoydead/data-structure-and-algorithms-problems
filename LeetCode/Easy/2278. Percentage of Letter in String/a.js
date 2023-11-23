/**
 * 2278. Percentage of Letter in String
Easy
466
53
Companies
Given a string s and a character letter, return the percentage of characters in s that equal letter rounded down to the nearest whole percent.

 

Example 1:

Input: s = "foobar", letter = "o"
Output: 33
Explanation:
The percentage of characters in s that equal the letter 'o' is 2 / 6 * 100% = 33% when rounded down, so we return 33.
Example 2:

Input: s = "jjjj", letter = "k"
Output: 0
Explanation:
The percentage of characters in s that equal the letter 'k' is 0%, so we return 0.
 

Constraints:

1 <= s.length <= 100
s consists of lowercase English letters.
letter is a lowercase English letter.
Accepted
60.5K
Submissions
81.9K
Acceptance Rate
73.9%
 */
/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
      if (s[i] === letter) {
          count+=1;
      }
  }

  return count === 0 ? 0 : Math.floor((count / s.length) * 100);
};
