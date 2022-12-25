// 10799번 쇠막대기

const file =
  process.platform === "linux" ? "/dev/stdin" : "./y22/BaekJoon/input.txt";

let input = require("fs").readFileSync(file).toString().trim().split("");

let stack = [];
let answer = 0;
for (let i in input) {
  if (input[i] === "(") {
    stack.push(input[i]);
  } else {
    if (input[i - 1] === "(") {
      console.log(stack, "(");
      stack.pop();
      console.log(stack);
      answer += stack.length;
    } else {
      console.log(stack, ")");
      stack.pop();
      console.log(stack);
      answer++;
    }
  }
}
console.log(answer);
