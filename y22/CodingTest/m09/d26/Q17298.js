// 17298번 오큰수
// @ts-check

const file =
  process.platform === "linux" ? "/dev/stdin" : "./y22/BaekJoon/input.txt";

let input = require("fs").readFileSync(file).toString().trim().split("\n");
let arr = input[1].split(" ").map((el) => +el);
let answer = Array.from({ length: +input[0] }, (x) => -1);
let stack = [];
for (let i = 0; i < +input[0]; i++) {
  while (stack.length && arr[stack[stack.length - 1]] < arr[i]) {
    answer[stack.pop()] = arr[i];
  }
  stack.push(i);
}

console.log(answer.join(" "));
