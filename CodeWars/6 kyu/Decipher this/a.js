/**
 * You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:

the second and the last letter is switched (e.g. Hello becomes Holle)
the first letter is replaced by its character code (e.g. H becomes 72)
Note: there are no special characters used, only letters and spaces

Examples

decipherThis('72olle 103doo 100ya'); // 'Hello good day'
decipherThis('82yade 115te 103o'); // 'Ready set go'
 */
function decipherThis(str) {
  //have fun!
  const nums = "0123456789";
  const arr = str.split(" ");

  for (let i = 0; i < arr.length; i++) {
    let code = "";
    let x = arr[i].split("");

    let j = 0;

    while (nums.includes(arr[i][j])) {
      code += arr[i][j];
      j++;
    }

    x = x.slice(j);
    const a = x[0];
    x[0] = x[x.length - 1];
    x[x.length - 1] = a;
    x.unshift(String.fromCharCode(+code));
    arr[i] = x.join("");
  }

  return arr.join(" ");
}
