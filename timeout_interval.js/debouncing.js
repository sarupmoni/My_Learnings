const debounce = (callback, delay) => {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
};

const askInput = debounce(() => {
  const userInput = Deno.args[0];
  if (userInput) {
    console.log("input : ", userInput);
  } else {
    console.log("You entered nothing");
  }
}, 3000);

setInterval(askInput, 5000);
