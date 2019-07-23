/**
 * create a function which given an array of strings, capitalizes the first
 * letter of each word on the array. It must return a new array with the
 * modified strings.
 * capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
 */
function capitalizeWords(words) {
  let newArr = [];

  if (words.length === 0) {
    return newArr;
  }

  let word = words[0];

  newArr.push(word[0].toUpperCase() + word.substring(1, word.length));

  return newArr.concat(capitalizeWords(words.slice(1)));
}


module.exports = capitalizeWords;