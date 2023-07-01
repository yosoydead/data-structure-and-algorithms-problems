class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

class List {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) { 
    const n = new Node(val);
    if (this.length === 0) {
      this.head = n;
      this.tail = n;
      this.length++;
      return;
    }
    this.tail.next = n;
    this.tail = n;
    this.length++;
  }

  pushHead(val) {
    const n = new Node(val);
    n.next = this.head;
    this.head = n;
  }

  print() {
    let c = this.head;
    while (c) {
      console.log(c.val)
      c = c.next;
    }
  }

  valuesString() {
    let c = this.head;
    let res = "";

    while (c) {
      res += c.val;
      c = c.next;
    }
    return res;
  }
}

export default List;