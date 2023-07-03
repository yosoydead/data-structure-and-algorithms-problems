/** 
 * 1. Functia Manna-Pnueli. Se citeste un numar. Se cere programul pentru
    calculul functiei:
    f(x) => x - 1 daca x >= 12
            f(f(x+2)) daca x < 12
*/
// stack
function MannaPnueli(x) {
  if (x >= 12) {
    console.log(x - 1);
    return;
  }

  const stack = [];
  stack.push(x);
  let i = 0;

  function m() {
    if (stack.length === 0) {
      return;
    }

    if (stack[i] < 12) {
      stack.push(stack[i] + 2);
      i++;
      m();
    } else {
      const a = stack.pop();
      i--;
      stack[i] = a - 1;
      console.log("am putut calcula n", a - 1);
      m();
    }
  }
  m();
}
// MannaPnueli(8);
