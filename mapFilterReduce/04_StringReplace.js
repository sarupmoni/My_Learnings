const stringReplace = function(string, match, replacement) {
  const replace = function(word) {
    return word.replaceAll(match, replacement);
  }

  return [...string].map(replace).join("");
}

console.log(stringReplace("This is a string", "i", "o"));