const capSeperatedby3digits = (array) => {
  const regex = /[A-Z]\d{3}[A-Z]/;

  return array.filter((word) => regex.test(word));
};

console.log(
  capSeperatedby3digits(["T123P", "t123p", "P1234S", "T1P", "T123P0123P"])
);
