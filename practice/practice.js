// const repeat = function (char) {
//   return function (times) {
//     return char.repeat(times);
//   };
// };

// const stars = repeat("*");
// const spaces = repeat(" ");

// const pattern = [1,2,3,4].map(function (x) {
//   return [spaces, stars].map(function (y) {
//     return y(x);
//   });
// });

// const _pattern = [spaces, stars].map(function (x) {
//   return [1, 2, 3, 4].map(function (y) {
//     return x(y);
//   });
// });

// console.log(pattern.join("\n"));
// console.log(_pattern);

// console.log("************* addition & multiplication *************");

// function add(a, b) {
//   const x = a + b;
//   return function (y) {
//     return x * y;
//   };
// };

// const add3 = add(1, 2);

// const add4 = add(2, 2);

// console.log(add4(add3(2)));


// console.log("*************** counter *******************************");

const counter = function (n) {
  let x = 1;
  return function () {
    if (x > n) {
      x = 1;
    }
    return x++;
  };
};

const count3 = counter(3);

// console.log("*********** Moumita di's challenge ********************");

const names = ["abc", "def", "ghi"];

console.log(names.map(function (name) {
  return name.repeat(count3());
}));

// console.log("**************** Add *******************************");

// const add = function (x) {
//   return function (y) {
//     return x + y;
//   };
// };

// const add2 = add(2);
// console.log("2 + 5 = ", add2(5));

// console.log("**************** Substract *******************************");

// const sub = function (x) {
//   return function (y) {
//     return x - y;
//   };
// };

// const sub2 = sub(2);
// console.log("2 - 5 = ", sub2(5));

// console.log("**************** Division *******************************");

// const div = function (x) {
//   return function (y) {
//     return Math.round(x / y);
//   };
// };

// const div2 = div(2);
// console.log("2 / 5 = ", div2(5));

// console.log("**************** Multiply *******************************");

// const mul = function (x) {
//   return function (y) {
//     return x * y;
//   };
// };

// const mul2 = mul(2);
// console.log("2 * 5 = ", mul2(5));

// console.log("**************** Modulus *******************************");

// const mod = function (x) {
//   return function (y) {
//     return x % y;
//   };
// };

// const mod2 = mod(2);
// console.log("2 % 5 = ", mod2(5));

// console.log("**************** Distribution *******************************");

// const names = ["abc", "def", "ghi", "jkl"];
// const fruits = ["apple", "banana", "orange"];

// const counter = function () {
//   let x = 0;
//   return function () {
//     if (x === 3) {
//       x = 0;
//     }
//     return x++;
//   };
// };

// const count = counter();

// names.map(function (n) {
//   console.log(n + " " + fruits[count()]);
// });

// const counter = function (list) {
//   let x = -1;
//   return function (ele) {
//     if (x === list.length - 1) {
//       x = -1;
//     }
//     x++
//     return  ele + " " + list[x];
//   };
// };

// const count = counter(fruits);

// console.log(names.map(count));