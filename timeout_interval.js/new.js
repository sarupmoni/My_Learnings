// const start = Date.now();

// console.log(start);

// setTimeout(() => {
//   const timeNow = Date.now();
//   console.log(timeNow);
//   console.log(Math.floor((timeNow - start) / 1000));
// }, 3000);

const time = setInterval(() => {
  const date = new Date();
  console.clear();
  console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
}, 1000);

// setTimeout(() => {
//   clearInterval(time);
// }, 60000);
