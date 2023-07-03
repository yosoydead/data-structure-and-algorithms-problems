/**
 * 30. Scrieti o functie care inmulteste doua numere memorate sub o forma de liste si returneaza adresa de
 * inceput a listei rezultat.
 */
import List from "../lista.js";

function x() {
  const l1 = new List();
  l1.push(0);
  l1.push(1);
  l1.push(6);
  l1.push(5);

  const l2 = new List();
  l2.push(0);
  l2.push(3);
  l2.push(8);
  l2.push(6);
  l2.push(1);

  const l3 = new List();

  let c1 = l1.head;
  let c2 = l2.head;
  let c3 = l3.head;
  let head3 = l3.head;

  let firstRun = true;
  let r = 0;

  while (c1) {
    // console.log("inmultesc", c1.val, c2.val, c1.val * c2.val);
    // console.log(`val1 ${c1.val} * val2 ${c2.val} = ${c1.val * c2.val}`);
    const res = c1.val * c2.val + r;
    const digit = res % 10;

    if (firstRun) {
      l3.push(digit);
      r = Math.floor(res / 10);
      head3 = l3.head;
    } else {
      if (c3) {
        const newSum = c3.val + res;
        const d = newSum % 10;
        r = Math.floor(newSum / 10);
        c3.val = d;
        c3 = c3.next;
      } else {
        const newSum = res;
        const d = newSum % 10;
        r = Math.floor(newSum / 10);
        l3.push(d);
      }
    }

    if (c2 === l2.tail) {
      c2 = l2.head;
      c1 = c1.next;
      firstRun = false;

      if (r > 0) {
        l3.push(r);
        r = 0;
      }
      head3 = head3.next;
      c3 = head3;
    } else {
      c2 = c2.next;
    }

    // c2 = c2.next;
    // if (c1 !== l1.head) {
    //   console.log("inmultesc", c1.val, c2.val, c1.val * c2.val);
    // } else {
    //   c1 = l1.head;
    //   c2 = c2.next;
    // }
  }

  l3.print();
  // let t1 = [];
  // let t2 = [];

  // while (c1 || c2) {
  //   if (c1) {
  //     t1.push(c1.val);
  //     c1 = c1.next;
  //   }

  //   if (c2) {
  //     t2.push(c2.val);
  //     c2 = c2.next;
  //   }
  // }
  // const l3 = new List();
  // t1.reverse();
  // t2.reverse();
  // let total = +(t1.join("")) * +(t2.join(""));

  // while (total > 0) {
  //   l3.push(total % 10);
  //   total = Math.floor(total / 10);
  // }

  // l3.print();
}

x();
