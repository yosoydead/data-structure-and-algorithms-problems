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