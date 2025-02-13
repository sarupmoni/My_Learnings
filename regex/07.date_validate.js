const isDivisible = (dividend, divisor) => dividend % divisor === 0;

const leapYear = (year) => {
  const divisibleby4 = isDivisible(year, 4);
  const divisibleby100 = isDivisible(year, 100);
  const divisibleby400 = isDivisible(year, 400);

  return divisibleby4 && (!divisibleby100 || divisibleby400);
};

const dateValidate = (data) => {
  if (!data.match(/^(0[1-9]|[1-2][0-9]|3[0-1])-(0[1-9]|1[0-2])-\d{4}$/))
    return "invalid";
  const [_, day, month, year] = data.match(
    /^(0[1-9]|[1-2][0-9]|3[0-1])-(0[1-9]|1[0-2])-(\d{4})$/
  );
  // if ([4, 6, 8, 11].includes(+month) && +day > 30) return "invalid";
  // if (leapYear(+year) && +month === 2 && +day > 29) return "invalid";
  // if (!leapYear(+year) && +month === 2 && +day > 28) return "invalid";
  const daysInMonth = [
    31,
    leapYear(+year) ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
  ];

  return +day > daysInMonth[+month - 1] ? "invalid" : "valid";
};
