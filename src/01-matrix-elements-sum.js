function getMatrixElementsSum(matrix) {
  let result = 0;

  matrix.forEach((items, i) => {
    items.forEach((item, j) => {
      if (i === 0) {
        result += item;
      }
      if (item !== 0) {
        const index = i + 1;
        if (index < matrix.length) {
          result += matrix[i + 1][j];
        }
      }
    });
  });

  return result;
}

module.exports = getMatrixElementsSum;
