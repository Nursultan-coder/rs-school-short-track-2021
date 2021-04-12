function getMatrixElementsSum(matrix) {
  let result = 0;

  matrix.forEach((items, i) => {
    items.forEach((item, j) => {
      if(i === 0) {
        result += item;
      }
      if(item = 0) {
        result += items[j];
      }
    });

    return result;
  });
}

module.exports = getMatrixElementsSum;
