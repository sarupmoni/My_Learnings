const reader = Deno.stdin.readable.getReader();
while (true) {
  Deno.stdout.write(new TextEncoder().encode("enter:- "));
  const { value } = await reader.read();
  const input = new TextDecoder().decode(value);
  console.log(`input:- ${input}`);
}
// const decoder = new TextDecoder();
// for await (const chunk of Deno.stdin.readable) {
//   const text = decoder.decode(chunk);
//   console.log(text);
//   // do something with the text
// }
