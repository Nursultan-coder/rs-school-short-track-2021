function deleteDigit(n) {
  const arr = String(n).split('');
  let result = arr[0];
  let index = 0;

  arr.forEach((item, i) => {
    if (item < result) {
      index = i;
      result = item;
    }
  });

  arr.splice(index, 1);

  return Number(arr.join(''));
}

module.exports = deleteDigit;
