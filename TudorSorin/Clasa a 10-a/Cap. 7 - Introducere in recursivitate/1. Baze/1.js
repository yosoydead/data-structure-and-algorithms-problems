/**
 * Definitie: Recursivitatea este un mecanism general de elaborare a programelor. Ea consta in posibilitatea
 * ca un subprogram sa se autoapeleze.
 */
function exemplu(n) {
  if (n > 0) {
    console.log("n", n);
    exemplu(n-1);
  }
}

exemplu(5);

/**
 * In cazul functiilor care nu sunt de tip VOID, autoapelul se realizeaza prin instructiunea RETURN.
 * Ea este de forma RETURN EXPRESIE, dar in expresia respectiva trebuie sa intre si functia care 
 * se autoapeleaza
 */

function sum (n) {
  if (n !== 0) {
    return n + sum(n-1);
  }
  return n;
}

console.log(sum(5));