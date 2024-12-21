const indexAdd = function(array) {
  return array.map(function (element, index) {
    console.log("element :", element);
    console.log("index :", index);
    return element + index;
  });
};

console.log(indexAdd([1,2,3]));

const indexAdd1 = function(array) {
  return array.reduce(function (element, element2) {
    console.log("element :", element);
    console.log("element2 :", element2);
    console.log(element + element2);
    return element + element2;
  });
};

console.log(indexAdd1([1,2,3]));