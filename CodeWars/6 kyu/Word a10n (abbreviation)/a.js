/**
 * The word i18n is a common abbreviation of internationalization in the developer community, used instead of typing the whole word and trying to spell it correctly. Similarly, a11y is an abbreviation of accessibility.

Write a function that takes a string and turns any and all "words" (see below) within that string of length 4 or greater into an abbreviation, following these rules:

A "word" is a sequence of alphabetical characters. By this definition, any other character like a space or hyphen (eg. "elephant-ride") will split up a series of letters into two words (eg. "elephant" and "ride").
The abbreviated version of the word should have the first letter, then the number of removed characters, then the last letter (eg. "elephant ride" => "e6t r2e").
Example
abbreviate("elephant-rides are really fun!")
//          ^^^^^^^^*^^^^^*^^^*^^^^^^*^^^*
// words (^):   "elephant" "rides" "are" "really" "fun"
//                123456     123     1     1234     1
// ignore short words:               X              X

// abbreviate:    "e6t"     "r3s"  "are"  "r4y"   "fun"
// all non-word characters (*) remain in place
//                     "-"      " "    " "     " "     "!"
=== "e6t-r3s are r4y fun!"
 */
function transform(str) {
  let res = "";
  let count = 1;

  for (let i = 1; i < str.length - 2; i++) {
    count++;
  }
  res = `${str[0]}${count}${str[str.length - 1]}`;

  return res;
}

function abbreviate(string) {
  let word = "";
  let sent = "";

  const arr = [];
  for (let i = 0; i < string.length; i++) {
    // const r = arr[i].match(regex);
    // console.log(r);.
    if (string[i].match(/[a-z]/i)) {
      console.log("litera", string[i]);
      word += string[i];
    } else {
      console.log("nu litera");
      arr.push(word);
      arr.push(string[i]);
      word = "";
    }
  }
  arr.push(word);

  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 3) {
      sent += transform(arr[i]);
    } else {
      sent += arr[i].toString();
    }
  }

  return sent;
}

abbreviate("elephant-ride");
