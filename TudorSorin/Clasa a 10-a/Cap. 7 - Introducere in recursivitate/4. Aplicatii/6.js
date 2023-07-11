/**
 * Sa se scrie o functie recursiva pentru a transforma un numar natural N din baza 10 in baza k. 1 < k < 10
 */
function transform(n, k) {
  const rest = n % k;
  if (n >= k) {
    transform(Math.floor(n / k), k);
  }

  console.log(rest);
}

transform(5, 2);
