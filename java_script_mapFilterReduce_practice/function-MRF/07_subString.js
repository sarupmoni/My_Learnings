const isSubsetPresent = function(string, target) {
  const isSubset = function (word) {
    return word.includes(target);
  };

  return string.split(" ").map(isSubset);
};

console.log(isSubsetPresent("this is a string", "is"));

const findWordsWithSubset = function(string, target) {
  const isSubset = function (word) {
    return word.includes(target);
  };
  
  return string.split(" ").filter(isSubset);
};

console.log(findWordsWithSubset("this is a string", "is"));

const subStringCount = function(string, target) {
  return findWordsWithSubset(string, target).length;
};

console.log(subStringCount("this is a string", "is"));