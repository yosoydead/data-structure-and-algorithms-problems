/**
 * Se citeste x. Se cere programul pentru calculul functiei:
 *
 * f(x) = x - 1, x >= 12
 *        f(f(x+2)), x < 12
 */
function f(x) {
  if (x >= 12) {
    return x - 1;
  }
  return f(f(x + 2));
}

console.log(f(12));
