/**
 * Fiind data o lista liniara simplu inlantuita, cu adresa de inceput V,
 * se cere sa se inverseze legaturile din lista, adica daca in lista initiala,
 * dupa nodul I urmeaza I+1, atunci, noua lista, dupa nodul I+1, urmeaza I.
 *
 * R: Functia INV, rezolva problema data. Ea are 2 parametri: adresa primului
 * element al listei si adresa urmatorului element. Practic, la fiecare pas, partea
 * de adresa a nodului referit de curent, va retine adresa referita de pred. Functia
 * returneaza adresa primului nod al listei inversate, adica a ultimului nod in cazul
 * listei neinversate. Inainte de apelul functiei, partea de adresa a primului nod va
 * trebui sa retina null/nil.
 */
class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

const a = new Node(1, new Node(2, new Node(3, new Node(4))));

function print(list) {
  while (list) {
    console.log(list.val);
    list = list.next;
  }
}

function invert(pred, curent) {
  let urm;

  while (curent) {
    urm = curent.next;
    curent.next = pred;
    pred = curent;
    curent = urm;
  }

  return pred;
}

print(a);
const curent = a.next;
a.next = null;
const b = invert(a, curent);
// invert(a);
print(b);
