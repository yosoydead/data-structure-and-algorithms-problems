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
