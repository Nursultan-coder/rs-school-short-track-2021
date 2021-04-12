function getSumOfDigits(n) {
  const arr = String(n).split('');
  let result = 0;

  arr.forEach((item) => {
    result += Number(item);
  });

  if ((result) >= 10) {
    result = getSumOfDigits(result);
  }

  return result;
}

module.exports = getSumOfDigits;
