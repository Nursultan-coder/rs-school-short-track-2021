function encodeLine(str) {
  let index = 1;
  let result = '';

  str.split('').forEach((item, i) => {
    if (item === str[i + 1]) {
      index++;
    }

    if (item !== str[i + 1]) {
      if (index !== 1) {
        result += `${index}${item}`;
        index = 1;
      } else {
        result += item;
      }
    }
  });

  return result;
}

module.exports = encodeLine;
