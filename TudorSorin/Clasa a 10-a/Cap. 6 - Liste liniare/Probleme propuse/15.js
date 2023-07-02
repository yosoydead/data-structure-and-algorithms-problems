/**
 * 30. Scrieti o functie care inmulteste doua numere memorate sub o forma de liste si returneaza adresa de
 * inceput a listei rezultat.
 */
import List from "../lista.js";

function x() {
  const l1 = new List();
  l1.push(0);
  l1.push(1);
  l1.push(6);
  l1.push(5);

  const l2 = new List();
  l2.push(0);
  l2.push(3);
  l2.push(8);
  l2.push(6);
  l2.push(1);

  let c1 = l1.head;
  let c2 = l2.head;
  let t1 = [];
  let t2 = [];

  while (c1 || c2) {
    if (c1) {
      t1.push(c1.val);
      c1 = c1.next;
    }

    if (c2) {
      t2.push(c2.val);
      c2 = c2.next;
    }
  }
  const l3 = new List();
  t1.reverse();
  t2.reverse();
  let total = +(t1.join("")) * +(t2.join(""));

  while (total > 0) {
    l3.push(total % 10);
    total = Math.floor(total / 10);
  }

  l3.print();
}

x();