function renameFiles(names) {
  const result = names;

  names.forEach((item, i) => {
    let index = 1;

    for (let j = i + 1; j < result.length; j++) {
      if (item === result[j]) {
        result[j] = `${result[j]}(${index++})`;
      }
    }
  });

  return result;
}

module.exports = renameFiles;
