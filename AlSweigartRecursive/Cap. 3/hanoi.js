/**
 * 1. the player can move only one disk at a time
 * 2. the player can move disks only to and from the top of a tower
 * 3. the player can never place a larger disk on top of a smaller disk
 *
 * Pentru 1 disc, doar il muti pe un alt stalp si gata.
 * Pentru 2 discuri:
 *  - muti discul mic pe temp stalp
 *  - muti discul 2 pe end pole
 *  - muti discul de pe temp pe end
 *
 * Pentru 3 discuri:
 *  - solve the n-1 disks puzzle by moving those disks from the start pole to the temp pole
 *  - move the nth disk from the start pole to the end pole
 *  - solve the n-1 disks puzzle by moving those disks from the temp pole to the end pole
 *
 * Base case: muti discul 1
 * Minimul de mutari sa rezolvi problema: 2*n - 1
 *
 * Questions:
 *  1. What is the base case? -> solving a tower of one disk
 *  2. What argument is passed to the recursive function call? -> solving a tower
 *    of size one less than the current size
 *  3. How does this argument become closer to the base case? The size of the tower
 *    to solve decreases by one disk for each recursive call until it is a one-disk
 *    tower
 */

const towers = {
  a: [1,2,3],
  b: [],
  c: []
}
const move = (start, end) => {
  const d = towers[start].shift();
  towers[end].unshift(d)
};

console.log(towers)
// function solve(n, start, end, temp) {
//   if (n === 1) {
//     move(start,end)
//   	console.log(towers)
//     return;
//   } else {
//   	solve(n-1, start, temp, end)
//     move(start,end)
//     console.log(towers);
//     solve(n-1, temp, end, start)
//     return;
//   }
// }

// solve(3, 'a', 'b', 'c');

function solve(n, start, temp, end) {
  if (n === 1) {
    move(start,end)
    console.log(towers)
    return;
  } else {
    solve(n-1, start, end, temp)
    move(start,end)
    console.log(towers);
    solve(n-1, temp, start, end)
    return;
  }
}

solve(3, 'a', 'b', 'c');
