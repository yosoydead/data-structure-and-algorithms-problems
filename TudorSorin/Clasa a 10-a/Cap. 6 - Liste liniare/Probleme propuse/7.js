/**
 * 18. Se citeste un fisier text cifre.in care contine, pe o unica linie, numai numere naturale intre 0 si 9.
 * Numerele NU sunt separate de spatii. Se cere sa se formeze o lista liniara simplu inlantuita in care fiecare nod
 * reprezinta o cifra. Exemplu: Pentru 01396 se obtine lista:
 * 0 -> 1 -> 3 -> 9 -> 6
 */
import fs from "fs";
import Lista from "../lista.js";

function x() {
  const data = fs.readFileSync("cifre.txt", "utf8");
  const l = new Lista();

  for (let i = 0; i < data.length; i++) {
    l.push(data[i]);
  }

  l.print();

  return l;
}

const list = x();
console.log("----------------");

/**
 * 19. Sa se scrie o functie care primeste ca parametru de intrare adresa unei liste liniare simplu inlantuite si
 * are rolul de a inversa nodurile aflate pe prima si ultima pozitie. Functia va returna adresa primului nod al listei.
 */
function y(l) {
  const head = l.head;
  let prev = null;
  let cur = l.head;

  while (cur.next) {
    prev = cur;
    cur = cur.next;
  }
  l.print();
  // console.log(prev);
  // console.log(cur);
  console.log("----------------");
  cur.next = head.next;
  prev.next = head;
  l.head = cur;
  head.next = null;
  l.print();
}

y(list);
