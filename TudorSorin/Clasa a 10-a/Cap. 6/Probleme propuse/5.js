/**
 * 16. Se da o lista liniara simplu inlantuita ale carei noduri retin, pe langa informatiile de adresa, numere naturale
 * cu o singura cifra. Lista are cel putin un nod si cel mult 6 noduri. Se cere sa se scrie o functie care calculeaza si afiseaza
 * valoarea intreaga obtinuta prin lipirea cifrelor memorate in lista in ordinea citirii. Functia va primi ca parametru de intrare
 * varful listei. Exemplu: pentru lista de mai jos se afiseaza valoarea 956
 * 0 -> 9 -> 5 -> 6
 */
import List from "../lista.js";

const l = new List();
l.push(1);
l.push(0);
l.push(9);
l.push(5);
l.push(6);

function x(l) {
  let r = 0;

  while(l) {
    // r += ((r * 10) + l.val);
    r = (r * 10) + l.val;
    l = l.next;
  }

  console.log(r);
  return r;
}

x(l.head);