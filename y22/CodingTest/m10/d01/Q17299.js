// 17299번 오등큰수

const file =
  process.platform === "linux" ? "/dev/stdin" : "./y22/BaekJoon/input.txt";

let input = require("fs").readFileSync(file).toString().trim().split("\n");

let nums = input[1].split(" ").map((x) => +x);
let num = [...nums];
let answer = Array.from({ length: +input[0] }, (x) => -1);

let arr = [...new Set(nums.sort((a, b) => a - b))];
let cnt = Array.from({ length: arr.length + 1 }, (x) => 0);

let stack = [];

for (let n of num) {
  cnt[arr.indexOf(n) + 1]++;
}

for (let i = 0; i < +input[0]; i++) {
  while (stack.length && cnt[num[stack[stack.length - 1]]] < cnt[num[i]]) {
    // console.log(stack, i, num[i]);
    answer[stack.pop()] = num[i];
  }
  stack.push(i);
}

// let count = {};
// for (let n of num) {
//   if (!count[num[n]]) {
//     count[num[n]] = 1;
//   } else {
//     count[num[n]]++;
//   }
// }

// for (let i = 0; i < +input[0]; i++) {
//   while (stack.length && count[num[stack[stack.length - 1]]] < count[num[i]]) {
//     // console.log(stack, i, num[i]);
//     answer[stack.pop()] = num[i];
//     console.log(answer);
//   }
//   stack.push(i);
// }

console.log(answer.join(" ").trim());
