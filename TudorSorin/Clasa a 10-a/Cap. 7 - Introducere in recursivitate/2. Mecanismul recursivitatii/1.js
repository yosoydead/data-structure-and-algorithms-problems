/**
 * Problema: Sa se calculeze recursiv n! (factorial).
 *
 * A) Pentru a scrie o functie recursiva care efectueaza acelasi calcul, vom porni de la
 * o definitie recursiva a lui n!. Aceasta este:
 *
 * n! = fact(n) = return 1, if n = 0
 *                return n * fact(n-1), else n != 0
 *
 * De exemplu, pentru a calcula 3!, procedam astfel:
 * 3! = fact(3) = 3 * fact(2) = 3*2*fact(1) = 3*2*1*fact(0) = 3 * 2 * 1 * 1
 *
 * Care este mecanismul prin care subprogramele se pot autoapela? Sa ne amintim modul in care
 * subprogramele memoreaza parametrii transmisi.
 *  - Pentru memorarea parametrilor, subprogramele folosesc o zona de memorie numita STIVA (mai exact,
 *    segment de stiva)
 *  - Memorarea parametrilor transmisi se face in ordinea in care acestia figureaza in antet: de la stanga la dreapta
 *  - Pentru parametrii transmisi prin valoare, se memoreaza valoarea transmisa, iar pentru cei transmisi prin
 *    referinta se memoreaza adresa variabilei
 *  - In cadrul subprogramelor, parametrii transmisi si memorati in stiva sunt variabile. Numele lor este cel din lista
 *    parametrilor formali
 *
 * Reprezentare grafica pentru modul in care functioneaza recursivitatea in cazul functiei FACT a programului anterior.
 * Aceasta functie nu are variabile locale, deci in stiva se depune doar parametrul N.
 *
 * n -> 3         La primul apel al functiei FACT se creeaza in segmentul de stiva o variabila numita N, care retine 3.
 *
 * n -> 2         Functia se autoapeleaza. De aceasta data, parametrul N ia val 2. Se creeaza un nou nivel pe stiva cu val 2.
 * n -> 3
 *
 * n -> 1         Functia se autoapeleaza. Parametrul n ia valoarea 1. Se creeaza un nou nivel pe stiva cu val 1.
 * n -> 2
 * n -> 3
 *
 * n -> 0 -|      N fiind 0, se returneaza 1 si nu se mai autoapelaza. Se revine la nivelul 3.
 * n -> 1 <-
 * n -> 2
 * n -> 3
 *
 * n -> 1 -|      Se efectueaza 1 * 1. Se revine la nivelul 2.
 * n -> 2 <-
 * n -> 3
 *
 * n -> 2 -|      Se efectueaza 2 * 1. Se revine la nivelul 1.
 * n -> 3 <-
 *
 * n -> 3 -|      Se efectueaza 3 * 2. Se revine la main().
 *       <-
 */
function fact(n) {
  if (n === 0) {
    return 1;
  }
  return n * fact(n - 1);
}

console.log(fact(5));
