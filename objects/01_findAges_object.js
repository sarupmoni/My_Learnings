const people = [
  { name: "Alice", phone: "9876543210", age: 25, address: "123 Elm Street, Springfield" },
  { name: "Bob", phone: "8765432109", age: 35, address: "456 Oak Avenue, Metropolis" },
  { name: "Charlie", phone: "7654321098", age: 19, address: "789 Pine Road, Gotham City" },
  { name: "Diana", phone: "6543210987", age: 42, address: "101 Maple Lane, Smallville" },
  { name: "Eve", phone: "5432109876", age: 28, address: "202 Birch Boulevard, Star City" },
  { name: "Frank", phone: "4321098765", age: 31, address: "303 Cedar Drive, Central City" },
  { name: "Grace", phone: "3210987654", age: 18, address: "404 Willow Way, Coast City" },
  { name: "Hank", phone: "2109876543", age: 45, address: "505 Aspen Circle, Riverdale" },
  { name: "Ivy", phone: "1098765432", age: 23, address: "606 Fir Terrace, Hill Valley" },
  { name: "Jack", phone: "0198765431", age: 37, address: "707 Spruce Court, Twin Peaks" }
]

//************************ Type 01 ********************************/

// const isOlderThan = function (targetAge, age) {
//   return age >= targetAge;
// }

// const peopleMoreThan20 = function (targetAge) {

//   return people.filter(function (person) {
//     return isOlderThan(targetAge, person.age);
//   }).map(function (person) {
//     return [person.name, person.age, person.phone, person.address];
//   });
// };

// console.table(peopleMoreThan20(20));

//****************************** Type 02 *******************************/

const isOlderThan = function (targetAge) {
  return function (person) {
    return person.age > targetAge;
  };
};

const invert = function (f) {
  return function (arg) {
    return !f(arg);
  };
};

const isOlderThan20 = isOlderThan(20);

console.table(people.filter(isOlderThan20).map(function (person) {
  return [person.name, person.age];
}));

console.table(people.filter(invert(isOlderThan20)));