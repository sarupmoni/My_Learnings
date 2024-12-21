const numbers = prompt("Enter the number");

const addition = function (accumulator, digit) {
  return accumulator + +digit;
}

const sumOfDigits = function (numbers) {
  const digits = [...numbers];
  return digits.reduce(addition, 0);
}

console.log("Sum Of Digits = ", sumOfDigits(numbers));

console.log("************* Sum Of Digits In Array ****************");


const numberArray = prompt("Enter arrays of number");
const array = numberArray.split(" ");

console.log("Sum Of All Digits Of Array");

console.log(array.map(sumOfDigits));