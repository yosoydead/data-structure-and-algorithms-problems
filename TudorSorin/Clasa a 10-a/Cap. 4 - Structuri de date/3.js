/**
 * Un vector retine pozitiile de la 1 la K. Fiecare element al vectorului
 * retine un nr natural. Se cere sa se scrie un program care sterge de la pozitia P.
 */
function trei(p) {
  const arr = [];

  const k = 3;
  for (let i = 0; i < k; i++) {
    arr.push(i + 1);
  }

  for (let i = p - 1; i < arr.length - 1; i++) {
    const x = arr[i + 1];
    arr[i] = x;
  }
  arr.pop();
}
// three(2);
