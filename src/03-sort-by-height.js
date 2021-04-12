function sortByHeight(arr) {
  const newArr = [];
  arr.forEach((item) => {
    if (item !== -1) {
      newArr.push(item);
    }
  });

  newArr.sort((a, b) => a - b);

  const arr1 = [];
  let index = 0;
  arr.forEach((item) => {
    if (item !== -1) {
      arr1.push(newArr[index]);
      index++;
    } else {
      arr1.push(-1);
    }
  });

  return arr1;
}

module.exports = sortByHeight;
