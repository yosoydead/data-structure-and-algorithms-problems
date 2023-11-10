/**2705. Compact Object
Medium
113
9
Companies
Given an object or array obj, return a compact object. A compact object is the same as the original object, except with keys containing falsy values removed. This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. A value is considered falsy when Boolean(value) returns false.

You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.

 

Example 1:

Input: obj = [null, 0, false, 1]
Output: [1]
Explanation: All falsy values have been removed from the array.
Example 2:

Input: obj = {"a": null, "b": [false, 1]}
Output: {"b": [1]}
Explanation: obj["a"] and obj["b"][0] had falsy values and were removed.
Example 3:

Input: obj = [null, 0, 5, [0], [false, 16]]
Output: [5, [], [16]]
Explanation: obj[0], obj[1], obj[3][0], and obj[4][0] were falsy and removed.
 

Constraints:

obj is a valid JSON object
2 <= JSON.stringify(obj).length <= 106
Accepted
8.2K
Submissions
12.6K
Acceptance Rate
65.0%
 */
/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
  const c = (iter) => {
    if (Array.isArray(iter)) {
      let i = 0;
      while (i < iter.length) {
        if (Boolean(iter[i]) === false) {
            iter.splice(i, 1);
        } else {
          if (typeof iter[i] === 'object') {
            c(iter[i]);
          }
          i++;
        }
      }
    } else {
      const keys = Object.keys(iter);
      for (let i = 0; i < keys.length; i++) {
        if (Boolean(iter[keys[i]]) === false) {
          delete iter[keys[i]];
        } else {
          if (typeof iter[keys[i]] === 'object') {
            c(iter[keys[i]]);
          }
        }
      }
    }
  };
  c(obj);

  return obj;
};