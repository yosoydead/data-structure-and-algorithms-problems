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
      if (n > 9) {
        n = 1;
      }
      arr.push(n);
      n++;
    }
    console.log(arr.join(" "));
    nivel++;
  }
}

// three(7, 9);.
