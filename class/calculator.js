class Calculator {
  constructor(num1, num2) {
    this.x = num1;
    this.y = num2;
  }

  add() {
    return this.x + this.y;
  }

  sub() {
    return this.x - this.y;
  }

  mul() {
    return this.x * this.y;
  }

  div() {
    return this.x / this.y;
  }
}
