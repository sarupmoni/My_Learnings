const file = await Deno.open("./fibo_generator.js");
console.log(file);

for await (const chunk of file.readable) {
  console.log("Received Chunk:", new TextDecoder().decode(chunk));
}

file.close();
console.log("Finished reading the file.");
