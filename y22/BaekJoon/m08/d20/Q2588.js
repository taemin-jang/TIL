// 2588번 곱셈
// (세 자리 수) × (세 자리 수)는 다음과 같은 과정을 통하여 이루어진다.
// (1)과 (2)위치에 들어갈 세 자리 자연수가 주어질 때 (3), (4), (5), (6)위치에 들어갈 값을 구하는 프로그램을 작성하시오.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", (line) => {
  input.push(line);
});

rl.on("close", () => {
  let num1 = parseInt(input[0]);
  let num2 = parseInt(input[1]);
  let num2_1 = num2 % 10;
  let num2_10 = parseInt(num2 / 10) % 10;
  let num2_100 = parseInt(num2 / 100);
  console.log(num1 * num2_1);
  console.log(num1 * num2_10);
  console.log(num1 * num2_100);
  console.log(num1 * num2);
  process.exit;
});
