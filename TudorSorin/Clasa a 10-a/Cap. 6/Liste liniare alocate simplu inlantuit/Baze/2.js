/**
 * Operatiuni asupra unei liste liniare
 * 
 * Orice Lista va fi retinuta prin 2 informatii de adresa: a primului nod
 * si a ultimului nod. Precizam faptul ca, in general, numai prima informatie
 * este indispensabila. Pentru simplitate si rapiditatea executarii vom retine
 * si adresa ultimului nod
 */
class Node {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

class LinkedList {
    #head = null;
    #tail = null;
    constructor() {
        this.length = 0;
    }

    /** Fiind data o lista liniara, se cere sa se adauge la sfarsitul ei un nod
     * cu o anumita valoare.
     * 
     * Se disting 2 cazuri:
     *   - lista este vida
     *      Sa presupunem ca vrem sa adaugam un nod cu informatia 3. Se aloca nodul,
     *      si cum lista are un singur nod, adresa primului si ultimului nod vor coincide.
     *   - lista este nevida
     *      Fie lista: 3 -> 7 -> 9. 9 = coada
     *      Nod nou = 6
     *      Lista noua: 3 -> 7 -> 9 -> 6. 6 = coada
     */
    push(val) {
        const newNode = new Node(val);
        if (this.length === 0) {
            this.#head = newNode;
            this.#tail = newNode;
            this.length++;
            return;
        }
        this.#tail.next = newNode;
        this.#tail = newNode;
    }

    /** Fie lista din figura anterioara. Dorim sa adaugam dupa nodul cu info 3,
     * un altul cu info 5.
     * 
     * Initial, se identifica nodul dupa care se face adaugarea. In cazul de fata,
     * acesta este primul. Se aloca spatiu pt noul nod. Se completeaza adesa si 
     * anume adresa nodului care urmeaza dupa cel de info 3.
     * 3 -> 7 -> 9 -> 6
     * nou nod 5
     * 
     * Apoi, campul de adresa al nodului cu info 3 va retine adresa noului nod.
     * 3 -> 5 -> 7 -> 9 -> 6
     */
    insertAfter(target, newVal) {
        let cur = this.#head;
        while (cur) {
            if (cur.val === target) { break; }
            cur = cur.next;
        }

        if (!cur) {
            this.push(newVal);
            return;
        }

        const newNode = new Node(newVal);
        newNode.next = cur.next;
        cur.next = newNode;
        this.length++;

        if (!newNode.next) { this.#tail = newNode; }
    }

    /** Operatia este asemanatoare cu insertBefore */
    insertBefore(target, val) {
        let prev = null;
        let cur = this.#head;

        while (cur) {
            if (cur.val === target) { break; }
            prev = cur;
            cur = cur.next;
        }

        const newNode = new Node(val);

        if (!prev) {
            newNode.next = this.#head;
            this.#head = newNode;
            this.length++;
            return;
        }

        if (!cur) {
            this.push(val);
            return;
        }

        newNode.next = prev.next;
        prev.next = newNode;
        this.length++;
    }

    /** Algoritmul este diferit in functie de pozitia in lista a nodului
     * care va fi sters - daca este primul sau nu.
     * 
     * a. Daca nu este primul. Pentru nodul care va fi sters, informatia de
     * adresa a predecesorului va retine adresa nodului succesor:
     * 3 -> 5 -> 7 -> 9
     * sterg 5
     * 3 -> 7 -> 9
     * 
     * b. Daca este primul
     * 3 -> 5 -> 7 -> 9
     * Variabila V va retine adresa celui de-al doilea nod: 5 ->
     * Spatiul ocupat de primul nod va fi eliberat.
     */
    delete(val) {
        let prev;
        let cur = this.#head;

        while (cur) {
            if (cur.val === val) { break; }
            prev = cur;
            cur = cur.next;
        }

        // val e prima valoare din lista
        if (!prev) {
            this.#head = cur.next;
            this.length--;
            return;
        }

        if (!cur) {
            this.#tail = prev;
            this.length--;
            return;
        }

        prev.next = cur.next;
        this.length--;
    }

    print() {
        console.log("--------------------");
        let cur = this.#head;
        while (cur) {
            console.log(cur.val);
            cur = cur.next;
        }
        console.log("--------------------");
    }
}

const l = new LinkedList();
l.push(3);
// l.print();
l.push(7);
// l.print();
l.push(9);
// l.print();
l.push(6);
// l.print();
l.insertAfter(10, 5);
// l.print();

l.insertBefore(100, 10);
// l.print();

l.delete(7);
l.print();
