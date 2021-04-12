function getCommonCharacterCount(s1, s2) {
  const arr1 = s1.split('');
  const arr2 = s2.split('');
  let result = 0;

  arr1.forEach((item) => {
    if (arr2.indexOf(item) !== -1) {
      result++;
      arr2.splice(arr2.indexOf(item), 1);
    }
  });

  return result;
}

module.exports = getCommonCharacterCount;
