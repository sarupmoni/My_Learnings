const isVowel = function (char) {
  const vowels = ["a", "e", "i", "o", "u"];
  return vowels.includes(char);
}

const sortAccordingVowel = function (string) {
  return string.sort(function (a, b) {
    if ([a].some(isVowel) && [b].some(!(isVowel))) {
      return -1
    }
  });
};

console.log(sortAccordingVowel(["bc", "def", "ghi"]));