/**
 * 22. Se da o lista simplu inlantuita in care fiecare nod retine un caracter. Sa se scrie
 * o functie care depisteaza daca lista contine caractere distincte sau nu. Ce valoare trebuie
 * sa intoarca o astfel de functie? -> BOOL
 */
import List from "../lista.js";

function x() {
  const l = new List();
  const count = Array(26).fill(0);

  const str = "bogdan";
  for (let i = 0; i < str.length; i++) {
    l.push([str[i], i]);
    // const digit = str.charCodeAt(str[i]) - 97;
    // count[digit]++;
  }

  let c = l.head;
  while (c) {
    const digit = str.charCodeAt(c.val[1]) - 97;
    count[digit]++;
    c = c.next;
  }
  // for (let i = 0; i < str.length; i++) {
  //   // const digit = str.charCodeAt(str[i]) - 97;
  //   // count[digit]++;
  // }

  l.print();
  for (let i = 0; i < count.length; i++) {
    if (count[i] > 1) {
      console.log("nu contine elemente distincte");
      return false;
    }
  }

  console.log("contine elemente distincte");
  return true;
}

x();