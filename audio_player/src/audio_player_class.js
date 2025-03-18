const streamAudio = async () => {
  const file = await Deno.open("assests/audio/song.mp3");
  const reader = file.readable.getReader();
  const arrayBuffer = (await reader.read()).value;
  console.log(arrayBuffer);

  const blob = new Blob([arrayBuffer], { type: "audio/mpeg" });
  const url = URL.createObjectURL(blob);

  const audioPlayer = document.getElementById("audioPlayer");
  audioPlayer.src = url;
  audioPlayer.play();
  console.log(url);
};

streamAudio();
