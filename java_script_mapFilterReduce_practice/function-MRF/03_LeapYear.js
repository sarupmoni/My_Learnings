const isDivisble = function (dividend, divisor) {
  return dividend % divisor === 0;
}

const areYearsLeap = function (years) {
  const result = [];

  const isYearLeap = function (year) {
    const isYearDivisbleBy4 = isDivisble(year, 4);
    const isYearDivisbleBy100 = !isDivisble(year, 100);
    const isYearDivisbleBy400 = isDivisble(year, 400);
    result = isYearDivisbleBy4 && (isYearDivisbleBy100 || isYearDivisbleBy400);
  }

  return years.map(isYearLeap);
}

console.log(areYearsLeap[1200, 2024, 2025]);
// console.log([1200, 2024, 2025].filter(isLeapyear));