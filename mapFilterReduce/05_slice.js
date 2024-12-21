const stringSlice = function(array, start, end) {
  const wordSlice = function(word) {
    return word.slice(start, end);
  }

  return array.split(" ").map(wordSlice);
}

console.log(stringSlice("this is a string", 0, 2));