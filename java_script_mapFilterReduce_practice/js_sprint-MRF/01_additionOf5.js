const range = function (from, to, step) {
  const numbers = [];
  for (let number = from; number < to; number += step) {
    numbers.push(number);
  }

  return numbers;
}

const add = function (accumulator, number) {
  return accumulator + number;
}

const additionOf5ConsicutiveNumber = function (number) {
  return range(number, number + 5, 1).reduce(add, 0);
}

console.log(additionOf5ConsicutiveNumber(5));