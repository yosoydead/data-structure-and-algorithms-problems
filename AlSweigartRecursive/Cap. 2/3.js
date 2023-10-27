// find substring iterative
function findIterative(needle, haystack) {
  let i = 0;
  while (i < haystack.length) {
    if (haystack.substring(i, i + needle.length) === needle) {
      return i;
    }
    i += 1;
  }

  return -1;
}

// find substring recursive
function findRecursive(needle, haystack, i) {
  if (i === undefined) {
    return 0;
  }

  if (i >= haystack.length) {
    // needle not found
    return -1;
  }

  if (haystack.substring(i, i + needle.length) === needle) {
    return i;
  }

  return findRecursive(needle, haystack, i + 1);
}
