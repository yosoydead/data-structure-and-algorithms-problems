/**
 * 1. Cititi o variabila cu urmatoarea structura:
 *  - nume_elev - 30 caractere
 *  - data nasterii:
 *    - zi - intreg
 *    - luna - intreg
 *    - an - intreg
 *  - nota matematica - real
 *  - nota informatica - real
 *  - nota engleza - real
 *  - media - real (se calculeaza)
 * Testati daca datele au fost introduse corect. Citirea se va verifica
 *   prin afisarea rezultatului.
 * 2. Cititi N inregistrari de tipul celei de mai sus si afisati-le in
 *   ordinea alfabetica a numelui.
 * 3. Aceeasi problema ca cea anterioara, numai ca afisarea se va face
 *   in ordinea descrescatoare a mediilor
 * 4. Presupunand ca inregistrarile se refera la un examen de admitere,
 *   sa se afiseze in ordine descrescatoare a mediilor, in limita a unui
 *   numar de locuri sau pana se epuizeaza toate inregistrarile elevilor
 *   cu medii mai mari sau egale cu 5.
 */
class Elev {
  constructor(nume, dataNasterii, notaMate, notaInfo, notaEngleza) {
    this.nume = nume;
    this.dataNasterii = dataNasterii;
    this.notaMate = notaMate;
    this.notaInfo = notaInfo;
    this.notaEngleza = notaEngleza;

    this.medie = (notaMate + notaEngleza + notaInfo) / 3;
  }
}

function validareElev(nume, dataNasterii, notaMate, notaInfo, notaEngleza) {
  if (nume.length > 30) {
    throw new Error("nume prea lung");
  }

  if (dataNasterii.zi % 1 !== 0 || dataNasterii.luna % 1 !== 0 || dataNasterii.an % 1 !== 0) {
    throw new Error("zi/luna/an trebuie sa fie numere intregi");
  }

  if (isNaN(notaMate) || isNaN(notaInfo) || isNaN(notaEngleza)) {
    throw new Error("notaMate/notaInfo/notaEngleza trebuie sa fie numere");
  }

  console.log("datele sunt corecte");
}

const data = [
  ["Radu Bogdan-Mircea", { zi: 1, luna: 1, an: 1990 }, 5, 9, 10],
  ["Munteanu Mihai", { zi: 1, luna: 1, an: 1990 }, 6, 5, 10],
  ["Ganea Alin Lucian", { zi: 1, luna: 1, an: 1990 }, 5, 5, 10],
  ["Danila Andrei Daniel", { zi: 1, luna: 1, an: 1990 }, 5, 7, 10],
  ["Nastasa Robert Alexandru", { zi: 1, luna: 1, an: 1990 }, 6, 5, 10],
  ["Manolache Andrei", { zi: 1, luna: 1, an: 1990 }, 7, 5, 10],
  ["Agache Teodora", { zi: 1, luna: 1, an: 1990 }, 10, 7, 8],
  ["Hagiu Alexandru", { zi: 1, luna: 1, an: 1990 }, 5, 5, 7],
  ["Balan Mihai", { zi: 1, luna: 1, an: 1990 }, 5, 5, 10],
  ["Mechenici Stefan", { zi: 1, luna: 1, an: 1990 }, 10, 10, 10],
  ["Hotoi Silviu", { zi: 1, luna: 1, an: 1990 }, 1, 4, 8],
];

const arr = [];
for (let i = 0; i < data.length; i++) {
  const d = data[i];
  validareElev(...d);
  arr.push(new Elev(d[0], d[1], d[2], d[3], d[4]));
}

function compareName(a, b) {
  if (a.nume < b.nume) {
    return -1;
  }
  if (a.nume > b.nume) {
    return 1;
  }
  return 0;
}

// const two = [...arr].sort(compareName);
// console.log(two);

// const three = [...arr].sort((a,b) => b.medie - a.medie);
// console.log(three);
function four(locuri) {
  const a = [...arr].sort((a, b) => b.medie - a.medie);
  if (!locuri || locuri > a.length) {
    for (let i = 0; i < a.length; i++) {
      if (a[i].medie >= 5) {
        console.log(a[i]);
      }
    }

    return;
  }

  for (let i = 0; i < locuri; i++) {
    if (a[i].medie >= 5) {
      console.log(a[i]);
    }
  }
}

// four();
four(3);

// console.log(arr.toSorted((a, b) => a.nume > b.nume));
// validareElev("Radu Bogdan Mircea", { zi: 19, luna: 11, an: 1993}, 5,5,5);
// validareElev("Radu Bogdan Mirceajhfdksjfhdlksjhgdlkjghdlskjghfdskjghld", { zi: 19, luna: 11, an: 1993}, 5,5,5);
// validareElev("Radu Bogdan Mircea", { zi: 19, luna: 11, an: 1993}, "5n",5,5);
