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

  get(index) {
    if (index > this.length) {
      return -1;
    }
    let c = this.head;
    let count = 0;

    while (count < index) {
      count++;
      c = c.next;
    }

    return c.val;
  }

  addAtHead(val) {
    const n = new Node(val);
    n.next = this.head;
    this.head = n;
    if (this.length === 0) {
      this.tail = n;
    }
    this.length++;
  }

  addAtTail(val) {
    const node = new Node(val);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
      this.length++;
      return;
    }
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  addAtIndex(index, val) {
    if (index === 0) {
      this.addAtHead(val);
      return;
    }
    if (index === this.length) {
      this.addAtTail(val);
      return;
    }
    if (index < this.length) {
      let c = this.head;
      let prev = null;
      let count = 0;

      while (c) {
        if (count === index) {
          break;
        }
        count++;
        prev = c;
        c = c.next;
      }

      const node = new Node(val);
      node.next = c;
      prev.next = node;
      this.length++;
    }
  }

  deleteAtIndex(index) {
    if (index <= this.length - 1) {
      let c = this.head;
      let count = 0;
      let prev = null;

      while (c) {
        if (count === index) {
          break;
        }
        count++;
        prev = c;
        c = c.next;
      }
      this.length--;

      if (!prev) {
        this.head = c.next;
        return;
      }

      if (!c) {
        this.tail = prev;
        return;
      }
      prev.next = c.next;
    }
  }
}
// push(val) {
//   const n = new Node(val);
//   if (this.length === 0) {
//     this.head = n;
//     this.tail = n;
//     this.length++;
//     return;
//   }
//   this.tail.next = n;
//   this.tail = n;
//   this.length++;
// }

// pushHead(val) {
//   const n = new Node(val);
//   n.next = this.head;
//   this.head = n;
// }

// print() {
//   let c = this.head;
//   while (c) {
//     console.log(c.val);
//     c = c.next;
//   }
// }

// valuesString() {
//   let c = this.head;
//   let res = "";

//   while (c) {
//     res += c.val;
//     c = c.next;
//   }
//   return res;
// }
// }

const l = new List();
l.addAtHead(4);
l.get(1);
l.addAtHead(1);
l.addAtHead(5);
l.deleteAtIndex(3);
l.addAtHead(7);
l.get(3);
l.get(3);
l.get(3);
l.addAtHead(1);
l.deleteAtIndex(4);
// l.addAtHead(7);
// l.addAtHead(2);
// l.addAtHead(1);
// l.addAtIndex(3, 0);
// l.deleteAtIndex(2);
// l.addAtHead(6);
// l.addAtTail(4);
// l.get(4);
// l.addAtHead(4);
// l.addAtIndex(5, 0);
// l.addAtHead(6);
// l.addAtHead(1);
// l.addAtTail(3);
// l.addAtIndex(1,2);
// l.deleteAtIndex(1);

export default List;
