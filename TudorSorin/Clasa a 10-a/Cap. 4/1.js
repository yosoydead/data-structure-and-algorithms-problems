/** 
 * 1. Functia Manna-Pnueli. Se citeste un numar. Se cere programul pentru
    calculul functiei:
    f(x) => x - 1 daca x >= 12
            f(f(x+2)) daca x < 12
*/
// stack
function MannaPnueli(x) {
  if (x >= 12) { console.log(x - 1); return; }

  const stack = [];
  stack.push(x);
  let i = 0;

  function m () {
    if (stack.length === 0) { return; }

    if (stack[i] < 12) {
      stack.push(stack[i] + 2);
      i++;
      m();
    } else {
      const a = stack.pop();
      i--;
      stack[i] = (a-1);
      console.log("am putut calcula n", a - 1);
      m();
    }
  }
  m();
}
// MannaPnueli(8);

// queue
/**
 * 2. Un vector retine pe pozitiile 1 la K nodurile unei liste liniare.
 *  Fiecare element al vectorului retine un numar natural. Se cere sa se
 *  scrie un subprogram care insereaza in lista, pe pozitia p, un numar
 *  numar natural citit de la tastatura.
 */
function doi(p, n) {
  const queue = [];

  const k = 3;
  for (let i = 0; i < k; i++) {
    queue.push(i+1);
  }

  queue.push(-1);
  let i = queue.length - 1;

  while (true) {
    if (i !== p - 1) {
      const x = queue[i-1];
      const y = queue[i-2];
      queue[i] = x;
      queue[i-1] = y;
    } else {
      queue[p-1] = n;
      break;
    }
    i--;
  }
  // queue.push(n);
  // const t = queue[p-1];
  // queue[p-1] = n;
  // queue[queue.length-1] = t;

  // for (let i = 0; i < queue.length - 1; i++) {
  //   if (i === p - 1) {
  //     const x = queue[i];
  //   }
  // }
  console.log(queue);
}
// doi(2, 5);

/**
 * Un vector retine pozitiile de la 1 la K. Fiecare element al vectorului
 * retine un nr natural. Se cere sa se scrie un program care sterge de la pozitia P.
 */
function trei(p) {
  const arr = [];

  const k = 3;
  for (let i = 0; i < k; i++) {
    arr.push(i+1);
  }

  for (let i = p-1; i < arr.length-1; i++) {
    const x = arr[i + 1];
    arr[i] = x;
  }
  arr.pop()
}
// three(2);

/**
 * Creati o lista liniara cu n noduri alocate. Nodul 1 contine nr 1 etc. Se genereaza
 * aleator un nr natural K, mai mare ca 1 si mai mic decat N. Nodurile de la K la N vor fi,
 * in aceasta ordine, primele in lista, urmate de nodurile de la 1 la K-1, in aceasta ordine.
 */
function patru(n) {
  const arr = Array(n);

  for (let i = 0; i < n; i++) {
    arr[i] = i + 1;
  }

  const k = Math.floor(Math.random() * (arr.length - 1) + 1);
  let x = n - k;
  let y = 1;
  for (let i = 0; i < arr.length; i++) {
    if (x > -1) {
      arr[i] = k + i;
      x--;
    } else {
      arr[i] = y;
      y++;
    }
  }
}
// four(10);

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