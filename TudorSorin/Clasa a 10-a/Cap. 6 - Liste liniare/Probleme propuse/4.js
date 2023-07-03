/**
 * 14. Scrieti un subprogram care adauga un nod ls sfarsitul unei liste liniare simplu inlantuite. Fiecare nod
 * al listei contine, pe langa informatia de adresa, un nr real. Subprogramul are ca parametri formali
 * adresa primului element al listei si valoarea reala care se adauga.
 *
 * 15. Scrieti un subprogram care adauga un nod ls inceputul unei liste liniare simplu inlantuite. Fiecare nod
 * al listei contine, pe langa informatia de adresa, un nr real. Functia are ca parametri formali adresa primului
 * element al listei si valoarea  reala care se adauga. Ea returneaza noua adresa de inceput a listei.
 */
import List from "../lista.js";

function adaugaSfarsit() {
  const l = new List();
  l.push(2);
  l.push(3);
  l.push(4);
  l.push(5);
  l.print();
}

function adaugaInceput() {
  const l = new List();
  l.push(2);
  l.push(3);
  l.push(4);
  l.pushHead(5);
  l.print();
}

adaugaSfarsit();
console.log("----------------------");
adaugaInceput();
