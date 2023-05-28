/**
 * DESCRIPTION:
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
 */
var countBits = function(n) {
  // Program Me
  let ones = 0;
  let backup = n;
  while(backup > 0) {
    let mod = backup % 2;
    if(mod === 1){
      ones++;
    }
    
    backup = Math.floor(backup/2);
  }
  
  return ones;
};