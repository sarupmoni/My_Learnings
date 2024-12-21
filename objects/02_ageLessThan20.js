const people = [
  { name: "Aarav", phone: "9876543210", age: 25, address: "123 MG Road, Mumbai", gardians: ["9123456780", "Suresh"] },
  { name: "Ananya", phone: "8765432109", age: 35, address: "456 Brigade Road, Bengaluru", gardians: ["8223456781", "Lakshmi"] },
  { name: "Ishaan", phone: "7654321098", age: 19, address: "789 Park Street, Kolkata", gardians: ["8323456782", "Ramesh"] },
  { name: "Meera", phone: "6543210987", age: 42, address: "101 Connaught Place, Delhi", gardians: ["8423456783", "Sunita"] },
  { name: "Rohan", phone: "5432109876", age: 28, address: "202 Marine Drive, Chennai", gardians: ["8523456784", "Arun"] },
  { name: "Priya", phone: "4321098765", age: 31, address: "303 Sarjapur Road, Hyderabad", gardians: ["8623456785", "Geeta"] },
  { name: "Kavya", phone: "3210987654", age: 18, address: "404 Carter Road, Pune", gardians: ["8723456786", "Rajesh"] },
  { name: "Aditya", phone: "2109876543", age: 45, address: "505 Residency Road, Ahmedabad", gardians: ["8823456787", "Vimala"] },
  { name: "Naina", phone: "1098765432", age: 23, address: "606 MG Road, Jaipur", gardians: ["8923456788", "Ashok"] },
  { name: "Veer", phone: "0198765431", age: 37, address: "707 Lodhi Road, Chandigarh", gardians: ["9023456789", "Manju"] }
];

const isYoungerThan = function (targetAge) {
  return function (person) {
    return targetAge > person.age
  }
}

const invert = function (f) {
  return function (arg) {
    return !f(arg);
  };
};

const isYoungerThan20 = isYoungerThan(20);
const isYoungerThan30 = isYoungerThan(30);

console.table(people.filter(invert(isYoungerThan20)));
console.table(people.filter(isYoungerThan30));