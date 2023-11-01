/** Sum array
 * head-tail method
 * aduni elementul de la index 0 cu elementele de la index 1 -> capat
 * cand ajungi la array [], returnezi 0
 */
function sum(arr) {
  if (arr.length === 0) {
    return 0
  }

  const head = arr[0];
  const tail = arr.slice(1);
  return head + sum(tail);
}

console.log(sum([1,2,3,4,5])); // 15
console.log(sum([5,2,4,8])); // 19
console.log(sum([1,10,100,1000])); // 1111