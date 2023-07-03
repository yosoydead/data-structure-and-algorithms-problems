/**
 * DESCRIPTION:
Acknowledgments:
I thank yvonne-liu for the idea and for the example tests :)

Description:
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.
Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
 */
var encryptThis = function (text) {
  // Implement me! :)
  const arr = text.split(" ").map((el) => {
    const l = el.charCodeAt(0);
    if (el.length === 1) {
      return l;
    }

    const str = el.split("");
    str[0] = l;
    const temp = str[1];
    str[1] = str[str.length - 1];
    str[str.length - 1] = temp;

    return `${str.join("")}`;
  });

  return arr.join(" ");
};
