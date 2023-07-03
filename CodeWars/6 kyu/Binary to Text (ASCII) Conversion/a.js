/**
 * DESCRIPTION:
Write a function that takes in a binary string and returns the equivalent decoded text (the text is ASCII encoded).

Each 8 bits on the binary string represent 1 character on the ASCII table.

The input string will always be a valid binary string.

Characters can be in the range from "00000000" to "11111111" (inclusive)

Note: In the case of an empty binary string your function should return an empty string.
 */
function binaryToString(binary) {
  if (binary === "") {
    return "";
  }

  let result = "";
  for (let i = 0; i < binary.length; i += 8) {
    let current = binary.slice(i, i + 8);
    let char = String.fromCharCode(convert(current));

    result += char;
  }

  return result;
}

function convert(bin) {
  let pow = 7;
  let result = 0;

  for (let i = 0; i < bin.length; i++) {
    if (bin[i] === "1") {
      result += 1 * Math.pow(2, pow);
    } else {
      result += 0 * Math.pow(2, pow);
    }

    pow--;
  }

  return result;
}
