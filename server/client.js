const handleConnection = async (connection, reader) => {
  try {
    const encoder = new TextEncoder();
    const decoder = new TextDecoder();
    const buffer = new Uint8Array(1024);

    Deno.stdout.write(encoder.encode("Request:- "));
    const { value, done } = await reader.read();
    console.log(done);

    if (done || !value) {
      connection.close();
      return;
    }

    await connection.write(value);

    const byteCount = await connection.read(buffer);

    if (byteCount === null) {
      connection.close();
      return;
    }

    const msg = decoder.decode(buffer.slice(0, byteCount));
    console.log(`msg from server: ${msg}`);
    handleConnection(connection, reader);
  } catch {
    console.log("Connection Failed");
    connection.close();
    return;
  }
};

const main = async () => {
  try {
    const reader = Deno.stdin.readable.getReader();
    const connection = await Deno.connect({ port: 8000 });
    handleConnection(connection, reader);
  } catch {
    console.log("No Connection");
  }
};

main();
