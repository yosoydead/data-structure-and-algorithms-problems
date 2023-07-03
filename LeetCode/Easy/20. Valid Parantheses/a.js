/**
 * 20. Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
 */
/**
 * @param {string} s
 * @return {boolean}
 */

const isPair = (s1, s2) => {
  if (s1 === "(" && s2 === ")") {
    return true;
  } else if (s1 === "[" && s2 === "]") {
    return true;
  } else if (s1 === "{" && s2 === "}") {
    return true;
  }
  return false;
};

const open = ["(", "[", "{"];
const close = [")", "]", "}"];

var isValid = function (s) {
  if (s.length === 1) {
    return false;
  }
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (open.includes(s[i])) {
      stack.push(s[i]);
    }

    if (close.includes(s[i])) {
      const r = stack.pop();

      // nu am ce element sa dau pop, adica undefined, adica invalid
      if (!r) {
        return false;
      }
      const check = isPair(r, s[i]);

      if (!check) {
        return false;
      }
    }
  }

  if (stack.length !== 0) {
    return false;
  }
  return true;
};
