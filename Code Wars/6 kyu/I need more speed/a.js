/**
 * Write a function that will take in any array and reverse it.

Sounds simple doesn't it?

NOTES:

Array should be reversed in place! (no need to return it)
Usual builtins have been deactivated. Don't count on them.
You'll have to do it fast enough, so think about performances
 */
function reverse(arr) {
  //code me
  let low = 0;
  let high = arr.length - 1;
  
  while(low < high){
    let f = arr[low];
    let l = arr[high];
//      console.log(`low: ${f}, high: ${l}`);

    arr[low] = l;
    arr[high] = f;
//      console.log(arr);

    low++;
    high--;
  }
}