/**
 * 345. Reverse Vowels of a String

Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

Example 1:

Input: s = "hello"
Output: "holle"
Example 2:

Input: s = "leetcode"
Output: "leotcede"
 

Constraints:

1 <= s.length <= 3 * 105
s consist of printable ASCII characters.
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const arr = s.split("");
  const vowls = ["a", "e", "i", "o", "u"];

  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    const l = arr[i].toLowerCase();
    const r = arr[j].toLowerCase();

    if (vowls.includes(l) && vowls.includes(r)) {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
      j--;
      continue;
    }

    if (!vowls.includes(l)) {
      i++;
    }
    if (!vowls.includes(r)) {
      j--;
    }
  }

  return arr.join("");
};
