/**
 * Sa se scrie o functie recursiva pentru a calcula suma cifrelor unui numar natural.
 */
function x(n, total) {
  if (n === 0) {
    return total;
  }
  total += n % 10;

  return x(Math.floor(n / 10), total);
}

console.log(x(123456789, 0));
