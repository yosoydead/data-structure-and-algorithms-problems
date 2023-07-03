/**
 * DESCRIPTION:
Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
 */
function highestRank(arr) {
  //Your Code logic should written here
  const frec = {};
  let max = -100;
  let res = 0;

  for (let i = 0; i < arr.length; i++) {
    if (frec[arr[i]]) {
      frec[arr[i]]++;
    } else {
      frec[arr[i]] = 1;
    }

    if (frec[arr[i]] > max) {
      max = frec[arr[i]];
    }
  }

  const x = Object.keys(frec).filter((e) => {
    return frec[e] === max;
  });

  return +x[x.length - 1];
}
