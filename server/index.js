const handleConnection = async (connection, clientId) => {
  try {
    const encoder = new TextEncoder();
    const decoder = new TextDecoder();
    const buffer = new Uint8Array(1024);
    const byteCount = await connection.read(buffer);

    if (byteCount === null) {
      console.log("No Client Avaliable");
      connection.close();
      return;
    }

    const msg = decoder.decode(buffer.slice(0, byteCount - 2));
    console.log(`msg from client${clientId}: ${msg}`);
    const reply = prompt("reply: ");
    await connection.write(encoder.encode(`${reply} \n`));
    handleConnection(connection, clientId);
  } catch {
    console.log("Message not send; No Client Available");
  }
};

const main = async () => {
  const listener = Deno.listen({ port: 8000 });
  let connectionId = 0;

  for await (const connection of listener) {
    handleConnection(connection, connectionId++);
  }
};

main();
