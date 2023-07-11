/**
 * Se dau doua numere naturale a si b. Se cere sa se calculeze cel mai mare divizor comun al lor.
 *
 * cmmdc(a,b) = a,                a = b
 *              cmmdc(a-b, b),    a > b
 *              cmmdc(a, b - a),  a < b
 */
function cmmdc(a, b) {
  if (a === b) {
    return a;
  }
  if (a > b) {
    return cmmdc(a - b, b);
  }
  return cmmdc(a, b - a);
}

console.log(cmmdc(6, 12));
