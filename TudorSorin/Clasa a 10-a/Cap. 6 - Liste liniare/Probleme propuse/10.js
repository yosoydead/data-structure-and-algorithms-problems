/**
 * 23. Se da o lista liniara simplu inlantuita in care fiecare nod retine o litera. Se cere
 * sa se scrie o functie care depisteaza daca cuvantul format prin alaturarea literelor citite este
 * sau nu palindrom (se obtine acelasi rezultat daca cuvantul se citeste direct sau invers). De
 * exemplu, lissta urmatoare contine un cuvant palindrom:
 * a -> b -> c -> b -> a
 */
import List from "../lista.js";

function x() {
  const l = new List();

  // const str = "abcba";
  // const str = "bogdan";
  const str = "abba";
  str.split("").forEach((e) => {
    l.push(e);
  });

  const arr = [];
  let c = l.head;
  while (c) {
    arr.push(c.val);
    c = c.next;
  }

  // sau fac arr.join("") === arr.reverse().join("")

  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    if (arr[i] !== arr[j]) {
      console.log("nu e palindrom");
      return false;
    }
    i++;
    j--;
  }

  console.log("e palindrom");
  return true;
}

x();
