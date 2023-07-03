/**
 * 2. Add Two Numbers
Medium
26K
5K
Companies
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

Example 1:


Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 

Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addDigits = (a, b) => {
  const total = a + b;
  const digit = total % 10;
  return {
    digit,
    rest: Math.floor(total / 10),
  };
};
var addTwoNumbers = function (l1, l2) {
  const res = new ListNode(0);
  let head = res;
  let tail = null;
  let remainder = 0;

  while (l1 || l2) {
    if (l1 && !l2) {
      const a = addDigits(l1.val, remainder);
      remainder = a.rest;
      head.val = a.digit;
      l1 = l1.next;
    }

    if (!l1 && l2) {
      const a = addDigits(l2.val, remainder);
      remainder = a.rest;

      head.val = a.digit;
      l2 = l2.next;
    }

    if (l1 && l2) {
      const a = addDigits(l1.val, l2.val);
      const t = addDigits(remainder, a.digit);
      remainder = a.rest;
      remainder += t.rest;

      head.val = t.digit;

      l1 = l1.next;
      l2 = l2.next;
    }
    tail = head;
    head.next = new ListNode();
    head = head.next;
  }

  if (remainder > 0) {
    head.val = remainder;
  }
  if (tail.next.val === 0) {
    tail.next = null;
  }

  return res;
};
