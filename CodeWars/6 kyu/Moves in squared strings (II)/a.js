/**
 * DESCRIPTION:
You are given a string of n lines, each substring being n characters long: For example:

s = "abcd\nefgh\nijkl\nmnop"

We will study some transformations of this square of strings.

Clock rotation 180 degrees: rot
rot(s) => "ponm\nlkji\nhgfe\ndcba"
selfie_and_rot(s) (or selfieAndRot or selfie-and-rot) It is initial string + string obtained by clock rotation 180 degrees with dots interspersed in order (hopefully) to better show the rotation when printed.
s = "abcd\nefgh\nijkl\nmnop" --> 
"abcd....\nefgh....\nijkl....\nmnop....\n....ponm\n....lkji\n....hgfe\n....dcba"
or printed:
|rotation        |selfie_and_rot
|abcd --> ponm   |abcd --> abcd....
|efgh     lkji   |efgh     efgh....
|ijkl     hgfe   |ijkl     ijkl....   
|mnop     dcba   |mnop     mnop....
                           ....ponm
                           ....lkji
                           ....hgfe
                           ....dcba
 */
function rot(strng) {
  // your code
  let words = strng.split("\n");

  for (let i = 0; i < words.length; i++) {
    let w = words[i].split("").reverse().join("");

    words[i] = w;
  }

  return words.reverse().join("\n");
}
function selfieAndRot(strng) {
  // your code
  let sep = ".".repeat(strng.split("\n")[0].length);
  let words = strng.split("\n").join(`${sep}\n`);
  let rotated = rot(strng).split("\n").join(`\n${sep}`);
  // console.log(rotated)
  // return `${words}....\n....${rotated}`;

  return `${words}${sep}\n${sep}${rotated}`;
}
function oper(fct, s) {
  // your code
  return fct(s);
}
