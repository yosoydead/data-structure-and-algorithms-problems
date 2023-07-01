class Node {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class DoublyLinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(val) {
    const n = new Node(val);
    this.head = n;
    this.tail = n;
    this.length = 1;
  }

  addRight(val) {
    const n = new Node(val);
    this.tail.right = n;
    n.left = this.tail;
    this.tail = n;
    this.length++;
  }

  addLeft(val) {
    const n = new Node(val);
    n.right = this.head;
    this.head.left = n;
    this.head = n;
    this.length++;
  }

  addAfterVal(m, val) {
    let cur = this.head;

    while (cur.val !== m) {
      cur = cur.right;
    }

    const n = new Node(val);
    const x = cur.right;

    n.right = x;
    n.left = x.left;
    x.left = n;
    cur.right = n;
    this.length++;
  }

  deleteLeft() {
    this.length--;
    this.head = this.head.right;
    this.head.left = null;
  }

  deleteRight() {
    this.tail = this.tail.left;
    this.tail.right = null;
  }

  deleteValue(val) {
    let cur = this.head;

    while (cur.val !== val) {
      cur = cur.right;
    }

    if (!cur) { return; }

    const l = cur.left;
    const r = cur.right;
    l.right = r;
    r.left = l;
  }

  printLeft() {
    let cur = this.head;

    while (cur) {
      console.log(cur.val);
      cur = cur.right;
    }
  }

  printRight() {
    let cur = this.tail;

    while (cur) {
      console.log(cur.val);
      cur = cur.left;
    }
  }
}

const list = new DoublyLinkedList(4);
list.addRight(5);
list.addRight(6);
list.addRight(8);
list.addRight(9);
list.addLeft(3);

list.addAfterVal(6, 7);
// list.printLeft();
// list.deleteLeft();
// list.deleteRight();
list.deleteValue(7);
list.printLeft();
list.printRight();