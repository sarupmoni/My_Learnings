const read = () => {
  const data = Deno.readTextFileSync("hello.txt");
  console.log(data);
};

read();
