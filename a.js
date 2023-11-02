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

// compactObject({"a": null, "b": [false, 1]});
// compactObject([null, 0, false, 1]);
compactObject([[null, 0, 5, [0], [false, 16]]]);