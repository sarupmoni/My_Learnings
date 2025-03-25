import { fetchFile } from "./fetch.js";

const setUpMediaSource = () => {
  const audio = new Audio();
  const mediaSource = new MediaSource();

  audio.src = URL.createObjectURL(mediaSource);

  mediaSource.addEventListener("sourceopen", () => {
    const sourceBuffer = mediaSource.addSourceBuffer("audio/mpeg");

    fetchFile(mediaSource, sourceBuffer);
  });

  audio.addEventListener("canplay", () => {
    audio.play();
  });
};

setUpMediaSource();
