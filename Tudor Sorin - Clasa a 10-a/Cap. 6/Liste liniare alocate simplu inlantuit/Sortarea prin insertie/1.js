/**
 * Se citesc de la tastatura N numere naturale. Se cere ca acestea sa fie
 *  sortate crescator prin utilizarea metodei de sortare prin insertie.
 * 
 * Ideea de baza a metodei consta in a considera primele K valori sortate,
 *  urmand sa inseram valoarea K+1 in sirul deja sortat. Prin utilizarea listelor
 *  liniare inlantuite, insertia este mai simpla, intrucat nu necesita deplasarea
 *  componentelor, ca in cazul vectorilor.
 * 
 * Pentru simplificarea algoritmului, lista va contine valoarea maxima MAXINT
 *  alocata deja in lista. In acest fel, algoritmul se simplifica pt ca se
 *  porneste deja de la o lista liniara nevida. Evident, valoarea MAXINT nu va
 *  fi listata, atunci cand se tiparesc numerele sortate.
 * 
 * Problema se reduce la insertia unui nr intr-o lista deja sortata. Mai intai
 *  se aloca spatiu in HEAP pentru o valoare, apoi aceasta e citita. Se disting
 *  doua cazuri:
 *  a. Valoarea citita este mai mica decat prima valoare a listei. Aceasta
 *  inseamna ca ea este cea mai mica din lista si va fi introdusa prima in lista
 *  Fie lista si se citeste 2: 3 -> 7 -> 9 -> MAXINT
 *  Noua inregistrare va contine adresa nodului 3, iar V contine adresa noii inregistrari.
 *  b. Valoarea citita nu este cea mai mica din lista. In mod sigur, nu este cea mai mare,
 *  pentru ca am introdus MAXINT in lista. Daca nu a fost indeplinita conditia
 *  de la cazul 1, inseamna ca valoarea nu este nici cea mai mica. Aceasta inseamna
 *  ca ea va trebui introdusa in interiorul listei.
 *  Va trebui sa identificam prima valoare mai mare decat valoarea citita. Intrucat,
 *  odata gasita adresa acestei valori, avem nevoie de adresa precedenta (pentru
 *  a putea lega in lista noul nod) vom merge cu doi pointeri, C si C1, unde C1
 *  retine adresa inregistrarii cu valoare mai mare decat inregistrarea citita, iar
 *  C adresa inregistrarii precedente.
 *  Fie lista urmatoare si se citeste 8. Se identifica prima inregistrare care retine
 *  o valoare mai mare decat cea citita.
 *  3 -> 7 -> 9 -> MAXINT
 *       c    c1
 *  8
 *  Noua valare se insereaza in lista. 3 -> 7 -> 8 -> 9 -> MAXINT
 */
class Node {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

const MaxInt = 32000;
const arr = [10, 100, 46, 60, 96, 83, 53, 76, 3, 29, 46];
const list = new Node(MaxInt, null);

function sort() {
    let head = list;
    for (let i = 0; i < arr.length; i++) {
        const newNode = new Node(arr[i]);
        if (newNode.val <= head.val) {
            newNode.next = head;
            head = newNode;
        } else {
            let prev = null;
            let cur = head;
            while (cur.val < newNode.val) {
                prev = cur;
                cur = cur.next;
            }
            newNode.next = cur;
            prev.next = newNode;
        }
    }

    while (head) {
        console.log(head.val);
        head = head.next;
    }
}

sort();