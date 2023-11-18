/**
 * 7.9 Se dă mulțimea {1,2,....,n} și se cer toate permutările acesteia.
 * 
 * Ex: pentru n = 3 avem
 *  {3,1,2}, {2,3,1}, {2,1,3}, {3,2,1}, {1,3,2}, {1,2,3}
 * 
 * Din fiecare permutare a mulțimii {1,2,...,n-1} ({a1,a2,...an-1}) se obțin următoarele permutări:
 *  - {n,a2,a3,....an-1,a1}
 *  - {a1,n,a3,...,an-1,a2}
 *  - {a1,a2,n,...,an-1,a3}
 * 
 * Pentru n = 3
 * 1
 *  - 21
 *    - 321
 *    - 231
 *    - 213
 *  - 12
 *    - 312
 *    - 132
 *    - 123
 */
const p = Array(10);
const n = 3;

function tipar() {
  for (let i = 1; i <= n; i++) {
    console.log(p[i]);
  }
  console.log("---------------------------------");
}

function permut(k, n, arr) {
  if (k === n+1) {
    tipar();
    return;
  } else {
    p[k] = k;
    
    for (let i = 1; i <=k; i++) {
      let c = p[i];
      p[i] = p[k];
      p[k] = c;

      permut(k+1, n, arr);

      c = p[i];
      p[i] = p[k];
      p[k] = c;
    }
  }
}

permut(1, n, p);