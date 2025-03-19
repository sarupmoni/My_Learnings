const handleConnection = async (connection) => {
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();
  const buffer = new Uint8Array(1024);

  while (true) {
    try {
      const reply = prompt("reply:");
      await connection.write(encoder.encode(`${reply} \n`));

      const byteCount = await connection.read(buffer);
      const msg = decoder.decode(buffer.slice(0, byteCount - 2));
      console.log(`msg from server: ${msg}`);
    } catch {
      console.log("Connection Failed");
      connection.close();
    }
  }
};

const main = async () => {
  try {
    const connection = await Deno.connect({ port: 8000 });
    handleConnection(connection);
  } catch {
    console.log("No Connection");
  }
};

main();
