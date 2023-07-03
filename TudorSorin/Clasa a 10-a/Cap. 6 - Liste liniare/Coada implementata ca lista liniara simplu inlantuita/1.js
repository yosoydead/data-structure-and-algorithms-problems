/**
 * First in First out
 * O coada este o lista pentru care toate inserarile sunt facute la unul din capete, iar
 * toate stergerile (consultarile, modificarile) la celalalt capat.
 *
 * Alocarea dinamica inlantuita a cozii. O variabila va retine adresa elementului care
 * urmeaza a fi scos (servit). O alta va retine adresa ultimului element introdus in coada.
 * Figura urmatoare prezinta o coada in care primul element care urmeaza a fi scos are
 * adresa in V, iar ultimul introdus are adresa in SF:
 * 7 -> 3 -> 5 -> 2
 *
 * V              SF
 */
class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

class Queue {
  constructor() {
    const n = new Node();
    this.head = n;
    this.tail = n;
    this.length = 0;
  }

  enqueue(val) {
    if (this.length === 0) {
      this.head.val = val;
      this.length++;
      return;
    }

    const n = new Node(val);
    this.tail.next = n;
    this.tail = n;
    this.length++;
  }

  dequeue() {
    const res = this.head;
    this.head = res.next;
    res.next = null;
    this.length--;
    console.log(res);
    return res;
  }

  peek() {
    console.log(this.head.val);
  }
}

const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.peek();
q.dequeue();
