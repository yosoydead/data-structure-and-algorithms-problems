/**
 * 7.10 Se dă o matrice binară. Valorile 1 delimitează o anumită suprafață închisă în cadrul matricei
 * (elementele aparținând acestei suprafețe sunt marcate cu 0). De asemenea, se dau coordonatele x și y
 * ale unui element al matricei, semnificând un punct din interiorul acestei suprafețe.
 * 
 * Fie A = | 0 1 1 0 |
 *         | 0 0 0 1 |
 *         | 0 1 1 1 |
 *         | 1 0 0 0 |
 * Suprafața închisă este dată de elementele A(1,1), A(2,1), A(2,2), A(2,3), A(3 ,1)
 * 
 * Algoritmul se dovedește extrem de util în colorarea unei suprafețe închise atunci când sunt cunoscute
 * coordonatele unui punct situat în interiorul ei.
 * 
 * Rezolvare. Pentru rezolvare se folosește functia Scriu(), care se autoapelează. Inițial, matricea se bordează
 * cu 2 linii și 2 coloane ce conțin elemente care au valoarea 1. Aceasta are ca scop evitarea testului de ieșire
 * din matrice.
 * 
 * Funcția Scriu() funcționează astfel
 *  - testează dacă elementul matricei la care s-a ajuns (coordonatele x și y) are valoarea 0
 *  - în cazul afirmativ, acesta ia valoarea 1, iar funcția se autoapelează pentru fiecare dintre elementele învecinate (sus, jos, stânga, dreapta)
 *  - în caz contrar, se iese din funcție
 */
const arr = [
  [0,1,1,0],
  [0,0,0,1],
  [0,1,1,1],
  [1,0,0,0]
];

function scriu(x, y, arr) {
  if (arr[x][y] === 0) {
    arr[x][y] = 1;
    
    if (y + 1 < arr[0].length) {
      scriu(x, y+1, arr);
    }

    if (y - 1 >= 0) {
      scriu(x, y-1, arr);
    }

    if (x + 1 < arr.length) {
      scriu(x+1, y, arr);
    }

    if (x - 1 >= 0) {
      scriu(x+1, y, arr);
    }
  }
}

console.log(arr);
scriu(0,0, arr);
console.log(arr);