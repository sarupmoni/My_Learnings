const range = function (from, to, step) {
  const number = [];
  for (let index = from; index < to; index += step) {
    number.push(index);
  }

  return number;
}

// const isPrime = function (primeCandidate) {
//   return range(2, primeCandidate, 1).filter(function (divisor) {
//     return primeCandidate % divisor === 0;
//   }). length === 0;
// };

// const isPrime = function (primeCandidate) {
//   return !(range(2, primeCandidate, 1).some(function (divisor) {
//     return primeCandidate % divisor === 0;
//   }));
// };

const isPrime = function (primeCandidate) {
  return range(2, primeCandidate, 1).every(function (divisor) {
    return primeCandidate % divisor !== 0;
  });
};

function testIsPrime(primeCandidate) {
  console.log(primeCandidate, isPrime(primeCandidate));
}

function testAll() {
  testIsPrime(2);
  testIsPrime(3);
  testIsPrime(4);
  testIsPrime(5);
  testIsPrime(6);
  testIsPrime(7);
  testIsPrime(8);
  testIsPrime(9);
  testIsPrime(10);
  testIsPrime(11);
}

testAll();