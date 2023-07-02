/**
 * 25. Scrieti un subprogram care transforma o lista liniara simplu inlantuita in una dublu inlantuita.
 */
import List from "../lista.js";

class DubluNode {
  constructor(val, prev, next) {
    this.val = val;
    this.prev = prev;
    this.next = next;
  }
}

function x() {
  const l = new List();
  l.push(1);
  l.push(2);
  l.push(3);
  l.push(4);
  l.push(5);
  l.push(6);

  l.print();

  const newHead = new DubluNode();
  let curNewHead = newHead;
  let prevNewHead = null;
  let cur = l.head;

  while(cur) {
    curNewHead.val = cur.val;
    curNewHead.prev = prevNewHead;
    prevNewHead = curNewHead;
    if (cur.next) {
      const n = new DubluNode();
      curNewHead.next = n;
      curNewHead = n;
    }
    cur = cur.next;
  }
  l.head = newHead;
  l.tail = prevNewHead;

  let c = l.tail;
  while(c) {
    console.log(c.val);
    c = c.prev;
  }
}

x();