const range = function (from, to, step) {
  const numbers = [];

  for (let number = from; number <= to; number += step) {
    numbers.push(number);
  }

  return numbers;
}

const getSumOfNNaturalNumber = function (number) {
  return range(0, number, 1).reduce(function (number, initial) {
    return initial + number;
  });
};

console.log(getSumOfNNaturalNumber(5));
console.log(getSumOfNNaturalNumber(6));