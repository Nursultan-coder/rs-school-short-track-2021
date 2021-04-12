function removeKFromList(l, k) {
  let result = l;
  
  while (result !== null) {
    if (result.value === k) {
      result.value = result.next.value;
      result.next = result.next.next;
    }
    
    result = result.next;
  }
  
  return l;
}

module.exports = removeKFromList;
