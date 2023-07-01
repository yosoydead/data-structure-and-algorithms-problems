/***
 * Se citeste un vector cu n numere intregi. Se cere sa se tipareasca cel mai mare
 * divizor comun al tuturor valorilor.
 * R: Calculeaza cmmdc ale primelor 2 numere, stocheaza rezultatul intr-o variabila,
 * apoi calculeaza cmmdc al urmatorului nr din array si cel stocat in variabila.
 */
function two(arr) {
  const cmmdc = (x, y) => {
    while (x !== y) {
      if (x > y) { x -= y; }
      else { y -= x; }
    }

    return x;
  }

  let c = cmmdc(arr[0], arr[1]);

  for (let i = 2; i < arr.length; i++) {
    c = cmmdc(c, arr[i]);
  }

  console.log("rezultat final cmmdc comun", c);
}

// two([5,6,70,55,40,25]);