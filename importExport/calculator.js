import { add, sub, multiply, divide } from "./operation.js";

const evaluate = (operation, operands) => operands.reduce(operation);

const printResult = (operation, ...operands) => {
  console.log(evaluate(operation, operands));
};

printResult(add, 2, 3);
printResult(sub, 2, 3);
printResult(multiply, 2, 3);
printResult(divide, 2, 3);
printResult(add, 2, 3, 4);
printResult(sub, 5, 4, 1);
printResult(multiply, 2, 3, 4);
printResult(divide, 6, 2, 3);
