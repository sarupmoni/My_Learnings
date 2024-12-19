const range = function(from, to, step) {
  const numbers = [];
  for (let number = from; number <= to; number += step) {
    numbers.push(number);
  }
  
  return numbers;
}

const factorial = function(n) {
  const multiply = function(multiplier, multiplicant) {
    return multiplier * multiplicant;
  }

  return range(1, n, 1).reduce(multiply, 1)
}

console.log(factorial(4));