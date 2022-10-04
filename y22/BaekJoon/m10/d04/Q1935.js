// 1935번 후위 표기식2
// @ts-check

const file =
  process.platform === "linux" ? "/dev/stdin" : "./y22/BaekJoon/input.txt";

let [n, str, ...nums] = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n");

let num = nums.map((x) => +x);

let st = str.trim().match(/[a-zA-Z]/g);
let change = {};
let stack = [];
let operator = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
};
for (let i = 0; i < +n; i++) {
  change[st[i]] = num[i];
}
let sttr = str
  .trim()
  .split("")
  .map((x) => (/[a-zA-Z]/.test(x) ? change[x] : x));
// console.log(str);
for (let i = 0; i < sttr.length; i++) {
  if (/[1-9]/gi.test(sttr[i])) {
    stack.push(sttr[i]);
  } else {
    // console.log(stack, i);
    let first = stack.pop();
    let second = stack.pop();
    stack.push(operator[str[i]](second, first));
  }
}
console.log(stack[0].toFixed(2));
