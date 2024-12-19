const findIndices = function(string, target) {
  const findIndex = function(word) {
    return word.indexOf(target);
  }

  return string.split(" ").map(findIndex);
}

console.log(findIndices("this is a string", "i"));