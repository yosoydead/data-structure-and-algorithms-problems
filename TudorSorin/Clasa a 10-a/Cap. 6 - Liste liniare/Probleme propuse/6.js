/**
 * 17. Prin operatia de concatenare a doua liste liniare simplu inlantuite se obtine o a treia lista care contine, in ordine, nodurile
 * primei liste urmate de nodurile celei de-a doua liste. Sa se scrie o functie care concateneaza doua liste date prin adresele nodurilor
 * de inceput. Functia va returna adresa primului nod al noii liste.
 */
import List from "../lista.js";

function x(a, b) {
  const trei = new List();

  while(a) {
    trei.push(a.val);
    a = a.next;
  }
  while(b) {
    trei.push(b.val);
    b = b.next;
  }

  trei.print();
  return trei.head;
}

const a = new List();
a.push(1);
a.push(2);
a.push(3);
a.push(4);

const b = new List();
a.push(5);
a.push(6);
a.push(7);
a.push(8);

x(a.head, b.head);