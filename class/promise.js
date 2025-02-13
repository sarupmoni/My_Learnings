const executor = (resolve, reject) => {
  // console.log("Before setTimeout");
  // resolve("resolve message");
  resolve(1);
  console.log("after resolve");

  // reject("reject message");
  // setTimeout(() => {
  //   const message = "inside setTimeout";
  //   console.log(message);
  // }, 3000);
  // resolve("after setTimeout");
};

const display = (message) => {
  console.log("Before message in display");
  console.log(message);
};

// const promise = new Promise(executor);
// const a = promise.then(display);
// // console.log(promise.then());

const promise = new Promise(executor);
console.log(promise.then(display));
