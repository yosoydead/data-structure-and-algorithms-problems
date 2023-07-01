/**
 * 12. Scrieti un program care creeaza si afiseaza 2 liste liniare simplu inlantuite. Prima lista va contine, in ordinea citirii, numere pare,
 * iar a doua va contine, in aceeasi ordine, numere impare. Numerele se citesc din fisierul text numere.in. Ele se gasesc toate pe o linie
 * si sunt separate prin cel putin un spatiu. De exemplu, daca fisierul text contine numerele: 0 2 5 9 8 3 6 7 1, atunci listele vor fi:
 * 0 -> 2 -> 8 -> 6
 * 5 -> 9 -> 3 -> 7 -> 1
 */
import fs from "fs";

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

  push(elev) { 
    const n = new Node(elev);
    if (this.length === 0) {
      this.head = n;
      this.tail = n;
      this.length++;
      return;
    }
    this.tail.next = n;
    this.tail = n;
    this.length++;
  }

  print() {
    let c = this.head;
    while (c) {
      console.log(c.val)
      c = c.next;
    }
  }
}

function print() {
  try {
    const data = fs.readFileSync('numere.txt', 'utf8');
    const par = new List();
    const impar = new List();

    data.split(" ").forEach(n => {
      if(+n % 2 === 0) {
        par.push(+n)
      } else {
        impar.push(+n);
      }
    });

    par.print();
    console.log("-----------------")
    impar.print();
    // console.log(data);
  } catch (err) {
    console.error(err);
  }
}

print();