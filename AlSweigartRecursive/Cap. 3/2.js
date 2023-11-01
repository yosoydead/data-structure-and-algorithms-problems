/**
 * String reverse
 * aceeasi metoda de head-tail
 * un string gol sau un singur caracter reprezinta un string 'inversat'
 * elementul de la index 0 trebuie pus in spatele celorlalte caractere
 * cat -> c + rev("at")
 */
function rev(str) {
  if (str === "" || str.length === 1) {
    return str;
  }
  const head = str[0];
  const tail = str.substring(1);

  return rev(tail) + head;
}

console.log(rev("abcdef")); // fedcba
console.log(rev("Hello, world!")); // !dlrow ,olleH
console.log(rev("")); //
console.log(rev("x")); // x
