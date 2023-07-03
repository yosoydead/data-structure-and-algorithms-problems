/**
 * 28. Scrieti o functie care aduna doua numere naturale memorate ca mai sus si returneaza adresa de inceput a numarului suma, memorat ca lista.
 * Exemplu: din primele liste rezulta a treia lista:
 * 0 -> 1 -> 6 -> 5
 * 5 -> 9 -> 4 -> 7 -> 9
 * 5 -> 0 -> 1 -> 3 -> 0 -> 1
 */
import List from '../lista.js';

function x() {
  const l1 = new List();
  l1.push(0);
  l1.push(1);
  l1.push(6);
  l1.push(5);

  const l2 = new List();
  l2.push(5);
  l2.push(9);
  l2.push(4);
  l2.push(7);
  l2.push(9);

  const l3 = new List();

  let c1 = l1.head;
  let c2 = l2.head;
  let rest = 0;

  while (c1 || c2) {
    if (c1 && c2) {
      const s = c1.val + c2.val + rest;
      rest = Math.floor(s / 10);
      l3.push(s % 10);
      c1 = c1.next;
      c2 = c2.next;
      continue;
    }

    if (c1 && !c2) {
      const s = c1.val + rest;
      rest = Math.floor(s / 10);
      l3.push(s % 10);
      c1 = c1.next;
    }

    if (c2 && !c1) {
      const s = c2.val + rest;
      rest = Math.floor(s / 10);
      l3.push(s % 10);
      c2 = c2.next;
    }
  }

  if (rest > 0) {
    l3.push(rest);
  }

  l3.print();
  return l3.head;
}

x();
