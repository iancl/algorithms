/**
 * Given 2 strings, write a function to determine if the second string is an
 * anagram of the first. An anagram is a word, phrase or name formed by
 * rearranging the letters of another, such as cinema, formed from iceman.
 * Spaces and special characters dont count.
 * examples:
 * - anagram(Protectional, Lactoprotein) // true
 * - anagram(Replays, Parsley) // true
 */
// ============================================================================
// Solution A *slow*
// ============================================================================
// O(n)
function anagramA(str1, str2) {
  return str1.toLowerCase().match(/\w/ig).sort().join('') ===
    str2.toLowerCase().match(/\w/ig).sort().join('');
}

// ============================================================================
// Solution B
// ============================================================================
// O(n)
function anagramB(str1, str2) {
  let str1FrequencyMap = buildFrequencyMap(str1.toLowerCase().match(/\w/ig));
  let result = true;

  const normalizedStr2 = str2.toLowerCase().match(/\w/ig);

  for (let char of normalizedStr2) {
    if (!str1FrequencyMap[char]) {
      result = false;
      break;
    }

    str1FrequencyMap[char]--;
  }

  return result;
}

// ============================================================================
// Solution C
// ============================================================================
// O(n)
function anagramC(str1, str2) {

  if (str1.length !== str2.length) {
    return false;
  }

  const strAMap = buildFrequencyMap(str1.toLowerCase().match(/\w/ig));
  const strBMap = buildFrequencyMap(str2.toLowerCase().match(/\w/ig));
  let result = true;

  for (let key in strAMap) {
    if (strAMap[key] !== strBMap[key]) {
      result = false;
      break;
    }
  }

  return result;
}


// O(n)
function buildFrequencyMap(arr) {
  return arr.reduce((accumulator, currentValue) => {
    accumulator[currentValue] = accumulator[currentValue] + 1 || 1;
    return accumulator;
  }, {});
}

module.exports = { anagramA, anagramB, anagramC };