// 1918번 후위 표기식

const file =
  process.platform === "linux" ? "/dev/stdin" : "./y22/BaekJoon/input.txt";

let input = require("fs").readFileSync(file).toString().trim().split("");
let answer = [];
let operator = [];
for (let i = input.length - 1; i >= 0; i--) {
  console.log(input.length);
  console.log(input[i]);
  // stack.push(word);
  // console.log(/[\+\-\*\/]/.test(word));
  if (/[A-Z]/.test(input[i])) {
    answer.splice(0, 0, input[i]);
  } else if (/[\(\)]/.test(input[i])) {
    if (input[i] === "(") {
      answer = answer.concat(operator);
      operator.pop();
    }
  } else if (/[\+\-\*\/]/.test(input[i])) {
    operator.push(input[i]);
  }
}
answer = answer.concat(operator);

console.log(answer.join(""));
// console.log(operator);
