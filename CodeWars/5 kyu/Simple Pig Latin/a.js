/**
 * DESCRIPTION:
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
 */
function pigIt(str) {
  //Code here
  const punct = ["!", ",", ".", ";", ":", "?"];

  return str
    .split(" ")
    .map((el) => {
      if (punct.includes(el)) {
        return el;
      }

      const letter = el[0];
      const sub = el.substring(1, el.length);
      return `${sub}${letter}ay`;
    })
    .join(" ");
}
