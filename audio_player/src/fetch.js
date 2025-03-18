const fetchFile = async () => {
  const filePath = "assests/audio/song.mp3";
  const url = new URL(filePath, "http://127.0.0.1:5500/index.html");
  const response = await fetch(url);
  const readableStream = response.body;
  const reader = readableStream.getReader();
  const chunkSize = 50 * 1024;

  while (true) {
    const { value, done } = await reader.read();

    if (done) {
      console.log("file read completely");
      break;
    }

    let offset = 0;
    while (offset < value.length) {
      const chunk = value.subarray(
        offset,
        Math.min(offset + chunkSize, value.length)
      );

      console.log(chunk);
      offset += chunkSize;
    }
  }
};

fetchFile();
