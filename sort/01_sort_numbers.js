const order = [[3], [9, 7], [4, 5, 2], [9, 5], [9, 2]].map(function (array) {
  return array.sort(function (a, b) {
    return a - b;
  });
}).sort(function (a, b) {
  return a[0] - b[0];
}).sort(function (a, b) {
  return a.length - b.length;
});

console.log(order);