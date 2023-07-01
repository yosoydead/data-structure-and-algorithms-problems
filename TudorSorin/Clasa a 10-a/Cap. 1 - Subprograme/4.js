/**
 * 1.6 Se citeste un numar natural n <= 9999999. Sa se calculeze suma cuburilor cifrelor sale.
 */
function four(n) {
  let r = 0;
  const original = n;

  while (n > 0) {
    const d = n % 10;
    r += (d * d * d);
    n = Math.floor(n / 10);
  }
  console.log(original, r);
}

// four(133);
four(55)