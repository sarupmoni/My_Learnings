const counter = function () {
  let n = 1;
  return function () {
    return n++;
  };
};

const serialNo = counter();

const assignSerialNo = function () {
  return ["apple", "pineapple", "banana", "grapes", "orange"].sort(
    function (fruit1, fruit2) {
      return fruit1.length - fruit2.length;
    }).map(function (fruit) {
      return (fruit + " " + serialNo());
    });
};

console.table(assignSerialNo());