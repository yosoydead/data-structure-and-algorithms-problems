/**
 * 21. Scrieti un subprogram care memoreaza un tablou bidimensional cu m linii si n coloane
 * ca M liste simplu inlantuite, unde fiecare lista memoreaza, in ordine, elementele unei linii.
 */
import List from "../lista.js";

function x() {
  const arr = [];
  const matrix = [
    [1,2,3],
    [4,5,6,7],
    [8,9,10,11,12],
  ];

  matrix.forEach(m => {
    const l = new List();

    m.forEach(n => {
      l.push(n);
    });

    arr.push(l);
  });

  arr.forEach(l => {
    l.print();
    console.log("----------");
  });
}

x();