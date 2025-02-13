const STAR = "*";
const SPACE = " ";

const range = function (from, to, step) {
  const numbers = [];
  for (let number = from; number <= to; number += step) {
    numbers.push(number);
  }
  
  return numbers;
};

const filledLine = function (times) {
  return STAR.repeat(times);
};

const hollowLine = function (width) {
  return (STAR + SPACE.repeat(width - 2) + STAR);
}

console.log("**************** Filled Triangle ******************");

const filledTriangle = function (height) {
  return range(1, height, 1).map(function (height) {
    return filledLine(height);
  }).join("\n");
}

console.log(filledTriangle(5));

console.log("**************** Hollow Triangle ******************");

const hollowTriangle = function (height) {
  if (height <= 3) {
    return filledTriangle(height);
  }
  const pattern = [];
  pattern.push(range(3, height - 1, 1).map(function (width) {
    return hollowLine(width);
  }));
  pattern.push(filledLine(height));
  pattern.push(filledTriangle(2));

  return pattern;
}

console.log(hollowTriangle(3));
console.log(hollowTriangle(6));