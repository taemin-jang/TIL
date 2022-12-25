// 1158번 요세푸스 문제

const file =
  process.platform === "linux" ? "/dev/stdin" : "./y22/BaekJoon/input.txt";

const input = require("fs").readFileSync(file).toString().trim().split(" ");

let [num, k] = input;
let cnt = 0;
let nums = [];
let answer = [];
let arr = [];

for (let i = 1; i <= +num; i++) {
  nums.push(i);
}
while (true) {
  if (nums.length === 0) {
    nums = [...arr];
    arr = [];
  }
  let n = nums.shift();
  cnt++;
  if (cnt % +k === 0) {
    answer.push(n);
  } else {
    arr.push(n);
  }
  if (answer.length === +num) {
    break;
  }
}
console.log(`<${answer.join(", ")}>`);
