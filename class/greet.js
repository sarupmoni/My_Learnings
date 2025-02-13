class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old`;
  }
}

const c = new Person("sarup", 23);
console.log(c.greet());
