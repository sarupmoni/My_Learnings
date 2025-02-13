// setTimeout(() => {
//   console.log("delay for 1 sec");
// }, 1000);
// setTimeout(() => {
//   console.log("delay for 2 sec");
// }, 2000);
// setTimeout(() => {
//   console.log("delay for 3 sec");
// }, 3000);
// setTimeout(() => {
//   console.log("delay for 4 sec");
// }, 4000);
// setTimeout(() => {
//   console.log("delay for 5 sec");
// }, 5000);

// setTimeout(
//   (a, b) => {
//     console.log(`addition of ${a} , ${b} = `, a + b);
//   },
//   1000,
//   4,
//   5
// );

// let time = 5;
// const clock = () => {
//   let timer;
//   console.log(time);
//   time--;
//   clearTimeout(timer);
//   if (time !== 0) {
//     timer = setTimeout(clock, 1000);
//   }
// };

// clock();

let number = 0;
const id = setInterval(() => {
  console.log(number);
  number++;
});

setTimeout(() => {
  clearInterval(id);
}, 1000);
