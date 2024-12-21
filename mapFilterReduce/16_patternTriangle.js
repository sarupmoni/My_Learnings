const STAR = "*";

const range = function (from, to, step) {
  const numbers = [];
  for (let number = from; number < to; number += step) {
    numbers.push(number);
  }

  return numbers;
};

const filledLine = function (times) {
  return STAR.repeat(times);
};

const filledTriangle = function (height) {
  return range(1, height, 1).map(function (height) {
    return filledLine(height);
  }).join("\n");
}

console.log(filledTriangle(5));