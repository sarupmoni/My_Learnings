const sortcolours = function () {
  return ["red", "yellow", "green", "pink", "blue"].sort(
    function (fruit1, fruit2) {
      return fruit1.length - fruit2.length;
    });
};

console.log("sorted according to length : ",sortcolours());

const sortAlpha = function () {
  return ["red", "yellow", "green", "pink", "blue"].sort()
};

console.log("sorted alphabetically : ",sortAlpha());