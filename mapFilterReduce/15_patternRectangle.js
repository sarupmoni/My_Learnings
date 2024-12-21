const STAR = "*";
const SPACE = " ";

const range = function (from, to, step) {
  const numbers = [];
  for (let number = from; number <= to; number += step) {
    numbers.push(number);
  }

  return numbers;
}

const filledLine = function (times) {
  return STAR.repeat(times);
}

const hollowLine = function (times) {
  return (STAR + SPACE.repeat(times - 2) + STAR);
}

const filledRectangle = function ([column, row]) {
  return range(1, row, 1).map(function () {
    return filledLine(column);
  }).join("\n");
};

const hollowRectangle = function ([column, row]) {
  if (row < 3) {
    return filledRectangle([column, row]);
  }
  const pattern = range(3, row, 1).map(function () {
    return hollowLine(column);
  });;
  pattern.unshift(filledLine(column));
  pattern.push(filledLine(column));

  return pattern.join("\n");
}

// console.log(filledRectangle([5, 5]));
// console.log(filledRectangle([3, 5]));
// console.log(filledRectangle([9, 3]));

console.log(hollowRectangle([3, 2]));
console.log(hollowRectangle([3, 3]));
console.log(hollowRectangle([9, 6]));