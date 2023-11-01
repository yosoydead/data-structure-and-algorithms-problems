/**
 * Palindrom
 * daca index 0 === last index, inseamna ca string-ul dintre cele 2 caractere e palindrom
 * un string gol sau un caracter e palindrom
 */
function pal(str) {
  if (str === "" || str.length === 1) {
    return true;
  }

  const head = str[0];
  const tail = str[str.length - 1];
  const mid = str.substring(1, str.length - 1);

  return head === tail && pal(mid);
}

console.log(pal("racecar")); // true
console.log(pal("amanaplanacanalpanama")); // true
console.log(pal("tacocat")); // true
console.log(pal("zophie")); // false
