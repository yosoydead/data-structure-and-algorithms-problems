/**
 * Sa se scrie o functie recursiva care citeste caractere si le afiseaza in ordinea inversa citirii.
 * Sfarsitul sirului este marcat de caracterul 0.
 */
function print(str, i) {
  if (str[i + 1] === "0") {
    return;
  }
  print(str, (i += 1));
  console.log(str[i]);
}

print("bogdan0", -1);
