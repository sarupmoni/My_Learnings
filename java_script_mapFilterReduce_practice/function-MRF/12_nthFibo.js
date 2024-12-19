const range = function (from, to, step) {
  const array = [];
  for (let number = from; number < to; number += step) {
    array.push(number);
  }

  return array;
}

const fibonacci = function (accumulator, currentElement) {
  const nextTerm = accumulator.length < 2 ? currentElement :
  accumulator.at(-1) + accumulator.at(-2);
  accumulator.push(nextTerm);
  return accumulator;
}

const getFibonacciSeries = function (number) {
  const series = range(0, number, 1).reduce(fibonacci, []);
  console.log(series);
}

getFibonacciSeries(1);
getFibonacciSeries(2);
getFibonacciSeries(3);
getFibonacciSeries(4);
getFibonacciSeries(5);
getFibonacciSeries(6);
getFibonacciSeries(7);