const sortList = function (list) {
  return list.sort(function (a, b) {
    if (a[1] < b[1]) {
      return -1;
    }
    return 1;
  });
}

console.log(sortList([["xyz", 1], ["pqr", -1], ["mno", 0]]));