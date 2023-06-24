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

/***
 * Se citesc 2 numere naturale m si n mai mici decat 10. Sa se tipareasca un triunghi
 * dupa modelul:
 * m = 6, n = 1
 * 1
 * 2 3
 * 4 5 6
 * 7 8 9 1
 * 2 3 4 5 6
 * 7 8 9 1 2 3-
 */
function three(m, n) {
  let nivel = 1;

  for (let i = 0; i < m; i++) {
    const arr = [];
    for (let j = 0; j < nivel; j++) {
      if (n > 9) { n = 1; }
      arr.push(n);
      n++;
    }
    console.log(arr.join(" "));
    nivel++;
  }
}

// three(7, 9);.

/**
 * 1.6 Se citeste un numar natural n <= 9999999. Sa se calculeze suma cuburilor cifrelor sale.
 */
function four(n) {
  let r = 0;
  const original = n;

  while (n > 0) {
    const d = n % 10;
    r += (d * d * d);
    n = Math.floor(n / 10);
  }
  console.log(original, r);
}

// four(133);
four(55)