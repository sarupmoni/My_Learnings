const waitForUpdateEnd = (sourceBuffer) => {
  return new Promise((resolve) => {
    if (!sourceBuffer.updating) {
      resolve();
    } else {
      sourceBuffer.addEventListener("updateend", resolve, { once: true });
    }
  });
};

const fetchFile = async (mediaSource, sourceBuffer) => {
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
      mediaSource.endOfStream();
      break;
    }

    let offset = 0;
    while (offset < value.length) {
      const chunk = value.subarray(
        offset,
        Math.min(offset + chunkSize, value.length)
      );

      await waitForUpdateEnd(sourceBuffer);

      sourceBuffer.appendBuffer(chunk);
      offset += chunkSize;
    }
  }
};

const setUpMediaSource = () => {
  const audio = new Audio();
  const mediaSource = new MediaSource();

  audio.src = URL.createObjectURL(mediaSource);

  mediaSource.addEventListener("sourceopen", async () => {
    const sourceBuffer = mediaSource.addSourceBuffer("audio/mpeg");

    await fetchFile(mediaSource, sourceBuffer);
  });

  document.getElementById("playButton").addEventListener("click", () => {
    audio.play();
  });

  document.getElementById("pauseButton").addEventListener("click", () => {
    audio.pause();
  });
};

setUpMediaSource();

// class Stream {
//   #musicFile = null;
//   #mediaSource = null;
//   constructor(mp3) {
//     this.#musicFile = mp3;
//     this.#mediaSource = new MediaSource();
//   }

//   start() {}

//   getChunk() {}
// }

// const stream = new Stream();
// stream.start();

// const chunk = stream.nextChunk();
