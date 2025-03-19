const reader = Deno.stdin.readable.getReader();
const { value } = await reader.read();
console.log(value);
