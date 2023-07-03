/**
 * 14. Se citesc n valori naturale. Se cere ca, prin implementarea unei stive, valorile
 * citite sa se afiseze in ordine descrescatoare.
 */
function sase(n) {
  const stack = [];

  for (let i = 0; i < n; i++) {
    const k = Math.floor(Math.random() * (100 - 1) + 1);
    stack.push(k);
  }

  while (stack.length !== 0) {
    console.log(stack.pop());
  }
}
// sase(10);
