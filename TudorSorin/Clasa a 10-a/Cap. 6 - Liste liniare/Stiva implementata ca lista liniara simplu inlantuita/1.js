/**
 * Last in First out
 * Stiva este o lista pt care singurele operatii sunt permise sunt:
 * - adaugarea unui element in stiva
 * - eliminarea, consultarea sau modificarea unui element introdus in stiva
 */
class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

class Stack {
  constructor() {
    const n = new Node();
    this.head = n;
    this.tail = n;
    this.length = 0;
  }

  peek() {
    console.log(this.tail.val);
  }

  push(val) {
    const n = new Node(val);

    if (this.length === 0) {
      this.head.val = val;
      this.length++;
      return;
    }

    this.tail.next = n;
    this.tail = n;
    this.length++;
  }

  changeLast(newVal) {
    this.tail.val = newVal;
  }

  pop() {
    const res = this.tail;
    let prev = null;
    let cur = this.head;

    while (cur.next) {
     prev = cur;
      cur = cur.next;
    }

    prev.next = null;
    this.length--;
    return res.val;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.peek();
stack.changeLast(4);
stack.pop(); 