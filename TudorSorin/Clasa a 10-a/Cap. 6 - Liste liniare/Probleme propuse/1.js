/**
 * 8. Scrieti un subprogram care creeaza o lista liniara simplu inlantuita in care, fiecare nod, pe langa informatia de adresa, va contine
 * o variabila de tip Struct care retine date referitoare la un elev. Functia va returna adresa primului nod al listei. Datele se citesc
 * de la tastatura:
 *    - numele: 20 char
 *    - prenume: 20 char
 *    - un vector de numere reale cu 3 componente care retin notele elevului
 *
 * 9. Scrieti un subprogram are afiseaza pe monitor numele, prenumele si media generala a fiecarui elev din lista de mai sus. Functia
 * va primi ca parametru de intrare varful listei.
 *
 * 10. Scrieti o functie care returneaza media generala a elevilor care se gasesc in lista.
 */
class Elev {
  constructor(nume, prenume, note) {
    this.nume = nume;
    this.prenume = prenume;
    this.note = note;
  }
}

class Node {
  constructor(elev, next) {
    this.elev = elev;
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
}

const elevi = [
  new Elev("Radu", "Bogdan", [8, 7, 9]),
  new Elev("Ganea", "Alin", [5, 5, 6]),
  new Elev("Munteanu", "Mihai", [5, 6, 7]),
  new Elev("Nastasa", "Robert", [7, 5, 8]),
  new Elev("Danila", "Daniel", [5, 5, 5]),
];

function create() {
  const l = new List();

  elevi.forEach((e) => {
    l.push(e);
  });

  return l.head;
}

function medie(arr) {
  let t = 0;
  arr.forEach((n) => {
    t += n;
  });

  return t / arr.length;
}

function printElevi(l) {
  while (l) {
    const m = medie(l.elev.note);
    console.log(`${l.elev.nume} ${l.elev.prenume}: ${m}`);
    l = l.next;
  }
}

function mediaTuturorElevilor(l) {
  const arr = [];
  while (l) {
    const m = medie(l.elev.note);
    arr.push(m);
    l = l.next;
  }

  const m = medie(arr);
  console.log("Media tuturor elevilor", m);
  return arr;
}

const l = create();
// printElevi(l);
mediaTuturorElevilor(l);
