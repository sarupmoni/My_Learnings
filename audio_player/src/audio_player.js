const audioPlayer = document.getElementById("audioPlayer");
const fileInput = document.getElementById("fileInput");

const appendBuffer = (sourceBuffer, chunk) => {
  return new Promise((resolve) => {
    sourceBuffer.addEventListener("updateend", resolve, { once: true });
    sourceBuffer.appendBuffer(chunk);
  });
};

const readChunk = async (file, start, size) => {
  const slice = file.slice(start, start + size);
  return await slice.arrayBuffer();
};

const streamAudio = (file) => {
  console.log(file);
  const chunkSize = 50 * 1024;
  const mediaSource = new MediaSource();
  audioPlayer.src = URL.createObjectURL(mediaSource);

  mediaSource.addEventListener("sourceopen", async () => {
    const sourceBuffer = mediaSource.addSourceBuffer("audio/mpeg");
    let offset = 0;

    // const chunk = await readChunk(file, offset, chunkSize);
    // await appendBuffer(sourceBuffer, chunk);

    while (offset < file.size) {
      const chunk = await readChunk(file, offset, chunkSize);
      console.log(chunk);

      await appendBuffer(sourceBuffer, chunk);
      offset += chunkSize;
    }

    mediaSource.endOfStream();
  });
};

fileInput.addEventListener("change", async (event) => {
  const file = event.target.files[0];
  if (file) {
    await streamAudio(file);
  }
});

// streamAudio("../assests/audio/song.mp3");
// console.log("");
