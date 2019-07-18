function charCount_A(str) {
  const strArr = str.toLowerCase().match(/\w/ig);

  if (!strArr) {
    return {};
  }

  return strArr.reduce((accumulator, currentValue) => {
    accumulator[currentValue] = accumulator[currentValue] + 1 || 1;
    return accumulator;
  }, {});
}

module.exports = { charCount_A };