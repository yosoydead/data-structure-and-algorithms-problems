/**
 * 13. Scrieti un program care creeaza fisierul text liste.out cu informatiile aflate in cele 2 liste de la problema anterioara.
 * Prima linie va contine numerele din prima lista, a doua numerele din a doua lista. Exemplu: pentru listele din figura de mai sus,
 * fisierul va fi:
 * Linia 1: 0 2 8 6
 * Linia 2: 5 9 3 7 1
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
      console.log(c.val);
      c = c.next;
    }
  }

  valuesString() {
    let c = this.head;
    let res = "";

    while (c) {
      res += c.val;
      c = c.next;
    }
    return res;
  }
}

function print() {
  try {
    const data = fs.readFileSync("numere.txt", "utf8");
    const par = new List();
    const impar = new List();

    data.split(" ").forEach((n) => {
      if (+n % 2 === 0) {
        par.push(+n);
      } else {
        impar.push(+n);
      }
    });

    const p = par.valuesString();
    const i = impar.valuesString();

    fs.writeFileSync("liste.out", `Linia 1: ${p}\nLinia 2: ${i}`, (err) => {
      if (err) {
        return console.log(err);
      }
      console.log("The file was saved!");
    });
  } catch (err) {
    console.error(err);
  }
}

print();
