const evenLengthWords = (words) => {
  const isEven = /^(\w{2})+$/;

  return words.filter((word) => isEven.test(word));
};

console.log("Even Length Words");
console.log(evenLengthWords(["abc", "fool", "cool", "donkey", "abcde"]));

const oddLengthWords = (words) => {
  const isOdd = /^(\w{2})*\w$/;

  return words.filter((word) => isOdd.test(word));
};

console.log("Odd Length Words");
console.log(oddLengthWords(["abc", "fool", "cool", "donkey", "abcde"]));
