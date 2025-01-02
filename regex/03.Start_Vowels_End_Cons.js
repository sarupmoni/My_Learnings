const startVowEndCons = (array) => {
  const regex = /^[aeiou].+[b-df-hj-np-tv-z]$/i;

  return array.filter((word) => regex.test(word));
};

console.log(
  startVowEndCons([
    "auw.eyg",
    "Abdsdn",
    "Edkdja",
    "Inckadn",
    "odncjn",
    "udj!",
    "ud3jU3",
  ])
);
