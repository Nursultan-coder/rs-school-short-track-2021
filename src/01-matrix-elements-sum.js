function getMatrixElementsSum(matrix) {
  const x = matrix;
  for (let i = 0; i < x.length - 1; i++) {
    for (let j = 0; j < x[i].length; j++) {
      if (x[i][j] === 0) {
        x[i + 1][j] = 0;
      }
    }
  }
  return x.join(',').split(',').map(Number).reduce((a, b) => a + b);
}

module.exports = getMatrixElementsSum;
