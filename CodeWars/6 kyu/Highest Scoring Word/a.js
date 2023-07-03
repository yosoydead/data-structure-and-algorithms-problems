/**
 * Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
 */
function high(x) {
  const m = {};

  const arr = x.split(" ");
  let biggest = -10000;

  for (let i = 0; i < arr.length; i++) {
    const x = arr[i];
    let s = 0;
    for (let j = 0; j < x.length; j++) {
      s += x.charCodeAt(j) - 96;
    }

    if (m[s]) {
      m[s].push(x);
    } else {
      m[s] = [x];
    }

    if (s > biggest) {
      biggest = s;
    }
  }

  return m[biggest][0];
}
