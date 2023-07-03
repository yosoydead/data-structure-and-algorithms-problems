/**
 * 125. Valid Palindrome

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 

Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
 */
/**
 * @param {string} s
 * @return {boolean}
 */
const compareLetters = (string, i, j) => {
  let left = string.charCodeAt(i);
  let right = string.charCodeAt(j);

  if (left >= 65 && left < 97) {
    left += 32;
  }
  if (right >= 65 && right < 97) {
    right += 32;
  }
  return left === right;
};

var isPalindrome = function (s) {
  if (s.length === 0 || s === " ") {
    return true;
  }

  let i = 0;
  let j = s.length - 1;
  const regex = new RegExp(/^[a-zA-Z0-9]$/);

  while (i < j) {
    // ignor daca nu e alfanumeric
    if (!regex.test(s[i])) {
      i++;
      continue;
    }
    if (!regex.test(s[j])) {
      j--;
      continue;
    }

    const result = compareLetters(s, i, j);
    if (!result) {
      return false;
    }
    i++;
    j--;
  }

  return true;
};
