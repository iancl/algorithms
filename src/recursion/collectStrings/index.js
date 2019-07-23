/**
 * write a function that accepts an object and returns
 */
// assumes there are only strings and literal objects in the passed obj
function collectStrings(obj) {
  let arr = [];

  for (let [key, val] of Object.entries(obj)) {
    if (typeof val === 'string') {
      arr.push(val);
    }
    else {
      arr = arr.concat(collectStrings(val));
    }
  }

  return arr;
}

module.exports = collectStrings;