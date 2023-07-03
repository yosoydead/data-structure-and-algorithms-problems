class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

class CircularList {
  constructor(val) {
    const n = new Node(val);
    this.head = n;
    this.tail = n;
    this.length = 1;
  }

  add(val) {
    const n = new Node(val);
    let c = this.head;

    while (c.next) {
      c = c.next;
    }

    c.next = n;
    this.tail = n;
    this.length++;
  }

  makeCircular() {
    this.tail.next = this.head;
  }

  print() {
    let c = this.head;
    const loop = (node) => {
      if (!node) {
        return;
      }
      console.log(node.val);
      loop(node.next);
    };

    loop(c);
    // while (c) {
    //   console.l
    // }
  }
}

const list = new CircularList(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);

list.makeCircular();
list.print();
