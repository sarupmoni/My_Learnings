const isEven = function (array) {
  const mapper = function(number) {
    return number % 2 === 0;
  }

  return array.map(mapper);
}

const evenNumbers = function (array) {
  const pradicate = function(number) {
    return number % 2 === 0;
  }

  return array.filter(pradicate);
}

console.log(isEven([1, 2, 3, 4]));
console.log(evenNumbers([1, 2, 3, 4]));