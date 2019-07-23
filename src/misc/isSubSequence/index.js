/**
 * Write a function that takes 2 strings and checks whether the characters in
 * the first string form a subsequence of the characters in the second string.
 * In other words, the function should check whether the characters in the
 * first string appear somewhere in the second string without their order
 * changing.
 *
 * examples:
 * - ('hello', 'hello world') // true
 * - (sing, sting) // true
 * - (abc, abracadabra) // true
 * - (abc, acb) // false (order is important)
 */
// O(n)
function isSubsequenceA(word, phrase) {
  let wordPointer = 0;
  let phrasePointer = 0;

  while(phrasePointer < phrase.length) {

    if (phrase[[phrasePointer]] === word[wordPointer]) {
      wordPointer++;
    }

    if (wordPointer === word.length) {
      return true;
    }

    phrasePointer++;
  }

  return false;
}

// O(n)
function isSubsequenceB(word, phrase) {
  if (!word.length) {
    return true;
  }
  if (!phrase.length) {
    return false;
  }
  if (word[0] === phrase[0]) {
    return isSubsequenceB(
      word.substring(1),
      phrase.substring(1)
    );
  }

  return isSubsequenceB(word, phrase.substring(1));
}

module.exports = { isSubsequenceA, isSubsequenceB };