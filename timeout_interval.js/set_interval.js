const setId = setInterval(() => {
  console.log("This is setInterval 1");
}, 1000);

const setId2 = setInterval(() => {
  console.log("This is setInterval 2");
}, 2000);

setTimeout(() => {
  clearInterval(setId);
}, 6000);

setTimeout(() => {
  clearInterval(setId2);
}, 6000);
