// 17299번 오등큰수

const file =
  process.platform === "linux" ? "/dev/stdin" : "./y22/BaekJoon/input.txt";

let input = require("fs").readFileSync(file).toString().trim().split("\n");
let arr = input[1].split(" ").map((el) => +el);
let a = input[1].split(" ").map((el) => +el);
let answer = Array.from({ length: +input[0] }, (x) => -1);
let cnt = Array.from(
  { length: a.sort((a, b) => a - b)[a.length - 1] },
  (x) => 0
);
let stack = [];
for (let i = 0; i < arr.length; i++) {
  stack.push(arr[i]);
  while (stack.length) {
    cnt[stack.pop() - 1] += 1;
  }
}

for (let i = 0; i < arr.length; i++) {
  console.log(stack);
  console.log("i : ", i);
  while (
    stack.length &&
    cnt[
      stack[stack.length - 1] >= cnt.length
        ? arr[i - 1] - 1
        : stack[stack.length - 1]
    ] < cnt[i >= cnt.length ? arr[i] - 1 : i]
  ) {
    answer[
      stack[stack.length - 1] >= cnt.length ? arr[i - 1] - 1 : stack.pop()
    ] = cnt[i >= cnt.length ? arr[i] - 1 : i];
    console.log(i);
  }
  // console.log(stack);
  console.log(
    cnt[
      stack[stack.length - 1] >= cnt.length
        ? arr[i - 1] - 1
        : stack[stack.length - 1]
    ],
    stack
  );
  console.log(cnt[i > cnt.length ? arr[i] - 1 : i]);
  console.log(
    cnt[
      stack[stack.length - 1] >= cnt.length
        ? arr[i - 1] - 1
        : stack[stack.length - 1]
    ] < cnt[i >= cnt.length ? arr[i] - 1 : i]
  );
  console.log("----");
  stack.push(i);
}

// console.log(answer);
// console.log(cnt);

console.log(cnt[4 >= cnt.length ? arr[4] - 1 : 4]);
console.log(arr);
console.log(cnt[3]);
