// const word = 'abca';

// const charCount = function (word) {
//   const chars = [...word];
//   return chars.map(function (n) {
//     let count = 0
//     return chars.map(function (n1) {
//       if (n1 === n) {
//         count++;
//       }
//       return (n + "->" + count);
//     })
//   })
// }

// console.log(charCount(word).flat().join("\n"));

const removeDuplicateChar = function (accumulator, char) {
  if (!accumulator.includes(char)) {
    accumulator.push(char);
  }

  return accumulator;
}

const removeDuplicates = function (word) {
  return word.reduce(removeDuplicateChar, []);
}

const word = "abca";
// const dup = "abc";

const getOccurence = function () {
  
}

const frequency = function (word) {
  const wordWithoutDuplicate = removeDuplicates([...word]);
  const Occurence = getOccurence(wordWithoutDuplicate, word, 0)
};

console.log(frequency(word));