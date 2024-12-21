const reverse = function (accumulator, currentValue) {
  accumulator.unshift(currentValue);
  return accumulator;
};

const _reverse = function (accumulator, currentvalue) {
  accumulator.push(currentvalue);
  return accumulator;
}

console.log([1,2,3].reduce(reverse, []));
console.log([1,2,3].reduceRight(_reverse, []));

const range = function (from, to, step) {
  const array = [];
  for (let index = from; index <= to; index += step) {
    array.push(index);
  }

  return array;
}


console.log(range(0, 5, 1).reduce(reverse, []));