/***
 * Se citesc 2 numere intregi. Se cere sa se tipareasca cel mai mare
 * divizor comun si cel mai mic multiplu comun.
 * R: Cel mai mic multiplu comun a 2 numere se poate determina impartind
 * produsul lor la cel mai mare divizor comun
 */
function one(m, n) {
  const cmmdc = (x, y) => {
    while (x !== y) {
      if (x > y) { x -= y; }
      else { y -= x; }
    }

    return x;
  }

  const res = cmmdc(m, n);
  console.log(m, n, res);
  console.log("cmmmc", (m * n) / res);
}

// one(20, 5);
