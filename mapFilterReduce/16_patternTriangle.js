const range = function (from, to, step) {
  const numbers = [];
  for (let number = from; number < to; number += step) {
    numbers.push(number);
  }

  return numbers;
}

range(1, 5, 1).map(function () {
  return 
})