/**
 * 382. Linked List Random Node
Medium
2.9K
681
Companies
Given a singly linked list, return a random node's value from the linked list. Each node must have the same probability of being chosen.

Implement the Solution class:

Solution(ListNode head) Initializes the object with the head of the singly-linked list head.
int getRandom() Chooses a node randomly from the list and returns its value. All the nodes of the list should be equally likely to be chosen.
 

Example 1:


Input
["Solution", "getRandom", "getRandom", "getRandom", "getRandom", "getRandom"]
[[[1, 2, 3]], [], [], [], [], []]
Output
[null, 1, 3, 2, 2, 3]

Explanation
Solution solution = new Solution([1, 2, 3]);
solution.getRandom(); // return 1
solution.getRandom(); // return 3
solution.getRandom(); // return 2
solution.getRandom(); // return 2
solution.getRandom(); // return 3
// getRandom() should return either 1, 2, or 3 randomly. Each element should have equal probability of returning.
 

Constraints:

The number of nodes in the linked list will be in the range [1, 104].
-104 <= Node.val <= 104
At most 104 calls will be made to getRandom.
 

Follow up:

What if the linked list is extremely large and its length is unknown to you?
Could you solve this efficiently without using extra space?
Accepted
227.1K
Submissions
361.6K
Acceptance Rate
62.8%
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
var Solution = function (head) {
  this.length = 0;
  let c = head;
  while (c) {
    this.length++;
    c = c.next;
  }
  this.perc = Math.round(100 / this.length);
  this.head = head;
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function () {
  if (!this.head.next) {
    return this.head.val;
  }
  const r = Math.floor(Math.random() * (this.length - 1 + 1) + 1);
  let acc = r * this.perc;
  let c = this.head;
  while (acc < 100 && c.next) {
    c = c.next;
    acc += this.perc;
  }
  return c.val;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */
