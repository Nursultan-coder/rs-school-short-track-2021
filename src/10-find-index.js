function findIndex(array, value) {
  if (array.length < 20) {
    let result;
    array.forEach((item, i) => {
      if (item === value) {
        result = i;
      }
    });

    return result;
  }
  const l = array.length;
  let i = Math.floor(l / 2);
  while (array[i] === value) {
    if (array[i] > value) {
      i -= Math.floor((l + i) / 2);
    } else {
      i += Math.floor((l + i) / 2);
    }
  }

  return i;
}

module.exports = findIndex;
