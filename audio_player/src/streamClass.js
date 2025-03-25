class Stream {
  #reader;
  #mediaSource;
  #sourceBuffer;
  #chunkSize = 50 * 1024;
  #audio;

  constructor(mp3, mediaInstance, audioInstance) {
    this.#audio = audioInstance;
    this.#mediaSource = mediaInstance;
    this.#audio.src = URL.createObjectURL(this.#mediaSource);

    this.#mediaSource.addEventListener("sourceopen", async () => {
      this.#sourceBuffer = this.#mediaSource.addSourceBuffer("audio/mpeg");
      await this.#fetchFile(mp3);
    });
  }

  async #fetchFile(mp3) {
    const url = new URL(mp3, "http://127.0.0.1:5500/index.html");
    const response = await fetch(url);
    this.#reader = response.body.getReader({ mode: "byob" });
  }

  async #waitForUpdateEnd() {
    if (!this.#sourceBuffer.updating) return;
    await new Promise((resolve) => {
      this.#sourceBuffer.addEventListener("updateend", resolve, { once: true });
    });
  }

  async getChunk() {
    if (this.#mediaSource.readyState !== "open") return;

    const buffer = new Uint8Array(this.#chunkSize);
    const { value, done } = await this.#reader.read(buffer);

    if (done) {
      console.log("End of Reading File");
      this.#mediaSource.endOfStream();
      return;
    }

    await this.#waitForUpdateEnd();

    this.#sourceBuffer.appendBuffer(value || buffer);
  }

  start() {
    this.#audio.play();
    this.getChunk();

    setInterval(async () => {
      const loadedSizeDuration = this.#sourceBuffer.timestampOffset;
      const currentTime = this.#audio.currentTime;
      const durationDifference = loadedSizeDuration - currentTime;

      if (durationDifference < 2) {
        await this.getChunk();
      }
    }, 1000);
  }
}

const stream = new Stream(
  "assests/audio/song.mp3",
  new MediaSource(),
  new Audio()
);

document.getElementById("playButton").addEventListener("click", () => {
  stream.start();
});
