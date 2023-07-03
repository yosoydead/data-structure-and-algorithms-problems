/**
 * 29. Scrieti o functie care calculeaza produsul dintre un numar natural memorat sub forma de lista si un altul, cu o singura cifra,
 * transmis ca parametru. Functia returneaza adresa primului nod al listei care contine rezultatul. Exemplu: nr de mai jos
 * se inmulteste cu 3:
 * 0 -> 1 -> 6 -> 5
 * 0 -> 3 -> 8 -> 6 -> 1
 */
import List from "../lista.js";

function x(param) {
  const l = new List();

  l.push(0);
  l.push(1);
  l.push(6);
  l.push(5);

  const cifre = [];
  let c = l.head;

  while (c) {
    cifre.push(+c.val);
    c = c.next;
  }

  let nr = 0;
  cifre.reverse().forEach((n) => {
    nr = nr * 10 + n;
  });

  let res = nr * param;
  const newList = new List();

  while (res > 0) {
    newList.push(res % 10);
    res = Math.floor(res / 10);
  }

  return newList.head;
}

x(3);
