// 17299번 오등큰수

const file =
  process.platform === "linux" ? "/dev/stdin" : "./y22/BaekJoon/input.txt";

let input = require("fs").readFileSync(file).toString().trim().split("\n");
let num = input[1].split(" ").map((x) => +x);
let answer = Array.from({ length: +input[0] }, (x) => -1);

let stack = [];

let count = {};
for (let n in num) {
  console.log(n);
  if (!count[num[n]]) {
    count[num[n]] = 1;
  } else {
    count[num[n]]++;
  }
}

for (let i = 0; i < +input[0]; i++) {
  while (stack.length && count[num[stack[stack.length - 1]]] < count[num[i]]) {
    console.log(stack, i, num[i]);
    answer[stack.pop()] = num[i];
    console.log(answer);
  }
  stack.push(i);
}

console.log(answer.join(" "));
