function minesweeper(matrix) {
  const result = [];

  matrix.forEach((items, i) => {
    result.push([]);

    items.forEach((item, j) => {
      let count = 0;

      if (i > 0) {
        if (matrix[i - 1][j]) {
          count += 1;
        }
        if (matrix[i - 1][j + 1]) {
          count += 1;
        }
        if (matrix[i - 1][j - 1]) {
          count += 1;
        }
      }

      if (i < matrix.length - 1) {
        if (matrix[i + 1][j]) {
          count += 1;
        }
        if (matrix[i + 1][j + 1]) {
          count += 1;
        }
        if (matrix[i + 1][j - 1]) {
          count += 1;
        }
      }

      if (matrix[i][j + 1]) {
        count += 1;
      }

      if (matrix[i][j - 1]) {
        count += 1;
      }

      result[i].push(count);
    });
  });

  return result;
}

module.exports = minesweeper;
