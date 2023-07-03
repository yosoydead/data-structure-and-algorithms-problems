/**
 * 24. Se citeste o permutare a numerelor 1, 2, ..., n. Se cere ca, prin utilizarea unei liste circulare,
 * sa se afiseze toate permutarile circulare ale acesteia.
 * Exemplu: Se citeste 1 2 3. Se va afisa: 1 2 3, 2 3 1, 3 1 2
 */
import List from "../lista.js";

function x() {
  const l = new List();
  l.push(1);
  l.push(2);
  l.push(3);
  l.tail.next = l.head;

  let c = l.head;
  let cur = c;

  // nu stiu cum poate fi oprita
  while (c) {
    console.log(c.val);
    c = c.next;
    if (c === cur) {
      console.log("m-am lovit de punct");
      c = c.next;
      cur = c;
    }
  }
}

x();
