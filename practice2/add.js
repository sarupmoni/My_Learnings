const main = (args) => {
  const numbers = args;
  const sum = numbers.reduce((sum, number) => sum + +number, 0);
  console.log(`Sum of ${numbers} : ${sum}`);
};

main(Deno.args);
