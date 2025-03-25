const handleConnection = async (connection, clientId, reader) => {
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

    const msg = decoder.decode(buffer.slice(0, byteCount));
    console.log(`msg from client${clientId}: ${msg}`);
    Deno.stdout.write(encoder.encode("reply:- "));
    const { value } = await reader.read();
    await connection.write(value);
    handleConnection(connection, clientId, reader);
  } catch (e) {
    console.log("Message not send; No Client Available");
    console.error(e);
  }
};

const main = async () => {
  const listener = Deno.listen({ port: 8000 });
  let connectionId = 0;
  const reader = Deno.stdin.readable.getReader();

  for await (const connection of listener) {
    handleConnection(connection, connectionId++, reader);
  }
};

main();
