function* rangeGenerator(from, to, step) {
  for (let index = from; index < to; index += step) {
    yield index;
  }
}

const main = async () => {
  const gen = rangeGenerator(2, 10, 2);
  for (let value of gen) {
    console.log(value);
  }
};

main();
