//******************* Sort Even And Odd *****************************/
const isOdd = function (num) {
  return num % 2 !== 0;
};

// const _sort = function (numbers) {
//   return numbers.sort(function (number) {
//     if (isOdd(number)) {
//       return -1;
//     }
//     return 1;
//   });
// };

// console.log(_sort([1,2,3,4,6]));
// console.log(_sort([11,20,33,42,63,33]));

//***************** Sort OddEven in Assending Order Type 1 ***************/

const isEven = function (num) {
  return num % 2 === 0;
};

// const sort = function (numbers) {
//   return numbers.sort(function (a, b) {
//     return a - b;
//   });
// };

// const getSorted = function (numbers) {
//   const oddNumbers = numbers.filter(isOdd);
//   const evenNumbers = numbers.filter(isEven);
//   const sortedOddnumbers = sort(oddNumbers);
//   const sortedEvenNumbers = sort(evenNumbers);  
//   return (sortedOddnumbers.concat(sortedEvenNumbers));
// }

// console.log(getSorted([1,2,3,4,6]));
// console.log(getSorted([9, 5, 11, 0, 2, 3]));
// console.log(getSorted([11,20,33,42,63,33]));

//****************** Sort OddEven in Assending Order Type 2 ***************/

const sortOddEven = function (numbers) {
  return numbers.sort(function (a, b) {
    if (isOdd(a) && isEven(b)) {
      return -1;
    }
    if (isEven(a) && isEven(b) || isOdd(a) && isOdd(b)) {
      return a - b;
    }
  });
};

console.log(sortOddEven([1, 2, 3, 4, 6]));
console.log(sortOddEven([9, 5, 11, 0, 2, 3]));
console.log(sortOddEven([11, 20, 33, 42, 63, 33]));