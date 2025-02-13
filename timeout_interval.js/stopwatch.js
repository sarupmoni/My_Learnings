const stopWatch = (time) => {
  if (isNaN(time) || time < 0) {
    console.log("please provide countdown time");
    return;
  }

  console.log("stopWatch", time);
  if (time > 0) {
    time--;
    setTimeout(stopWatch, 1000, time);
  } else {
    console.log("Time's up");
  }
};

const stopWatch2 = (time) => {
  if (isNaN(time) || time < 0) {
    console.log("please provide countdown time");
    return;
  }

  console.log("CountDown Starts Now");

  const id = setInterval(() => {
    console.log("stopWatch2", time);
    time -= 1;
    if (time < 0) {
      console.log("Time's up");
      clearInterval(id);
    }
  }, 1000);
};

const main = () => {
  const input = parseInt(Deno.args, 10);
  // stopWatch(input);
  stopWatch2(input);
};

main();
