function* fiboGenerator() {
  let a = 0;
  let b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const main = () => {
  const number = prompt("Enter The Number Of Fibonacci series required");
  const gen = fiboGenerator(number);

  for (let index = 0; index < number; index++) {
    console.log(gen.next().value);
  }
};

main();
