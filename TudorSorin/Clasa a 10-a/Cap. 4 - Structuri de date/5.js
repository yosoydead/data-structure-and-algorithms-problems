/**
 * 12. Scrieti subprogramele care implementeaza o stiva
 */
function cinci(size) {
  const stack = Array(size);
  let sp = 0;

  function push(x) {
    if (isFull()) { throw new Error("Stack full"); }
    stack[sp]=  x;
    sp++;
  }

  function pop() {
    const x = stack[sp];
    sp--;
    return x;
  }

  function length() {
    return stack.length;
  }

  function top() {
    return stack[sp];
  }

  function isEmpty() {
    return stack.length === 0;
  }

  function isFull() {
    return sp === size - 1;
  }

  for (let i = 0; i < 20; i++) {
    push(i+1);
  }
}
// five(16);
