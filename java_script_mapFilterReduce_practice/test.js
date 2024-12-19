const maxOf = function (num1, num2) {
  return Math.max(num1, num2);
};

const greatest = function (max, element) {
  return maxOf(max, element);
};

const findSecondGreatestNumber = function (array) {
  const grestestNumber = array.reduce(greatest, -Infinity);
  const remainingArray = array.filter(function (element) {
    return element < grestestNumber;
  });

  return remainingArray.reduce(greatest, -Infinity);
};

console.log(findSecondGreatestNumber([5, 5, 1, 2]));
console.log(findSecondGreatestNumber([1]));