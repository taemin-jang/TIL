// 2739번 구구단

const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split(" ")
  .map((el) => parseInt(el));

gugudan();

function gugudan() {
  for (let i = 1; i <= 9; i++) {
    let mul = input[0] * i;
    console.log(input[0] + " * " + i + " = " + mul);
  }
}
