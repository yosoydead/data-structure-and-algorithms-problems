/**
 * 26. Dupa cum stiti, nu se poate lucra in mod direct cu numere naturale oricat de mari. Din acest motiv,
 * vor memora un numar natural ca o lsita liniara simplu inlantuita.
 * De exemplu, numarul 5610 se va memora sub forma de mai jos:
 * 0 -> 1 -> 6 -> 5
 * 
 * Scrieti un program care citeste de la tastatura cifrele unui nr natural, incepand cu cifra cea mai semnificativa,
 * si-l memoreaza ca o lista liniara simplu inlantuita.
 */
import List from "../lista.js";

function x(nr) {
  const l = new List();

  while(nr > 0) {
    l.push(nr % 10);
    nr = Math.floor(nr / 10);
  }

  l.print();

  return l;
}

const list = x(5610);

/**
 * 27. Scrieti un subprogram recursiv care primeste ca parametru de intrare adresa unei liste liniare simplu inlantuite
 * care retine un nr ca mai sus si afiseaza numarul. De exemplu, pentru lista de mai sus se afiseaza 5610.
 */
function y(l) {
  let str = "";

  while(l) {
    str += l.val;
    l = l.next;
  }

  console.log(+str.split("").reverse().join(""));
}

y(list.head);