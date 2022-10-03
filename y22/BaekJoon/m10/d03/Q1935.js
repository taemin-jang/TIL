// 1935번 후위 표기식2

const file =
  process.platform === "linux" ? "/dev/stdin" : "./y22/BaekJoon/input.txt";

let [n, str, ...nums] = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n");

nums = nums.map((x) => +x);
let stack = [];
let cnt = 0;
for (let i = 0; i < str.trim().length; i++) {
  if (/[a-zA-Z]/gi.test(str[i])) {
    stack.push(str[i]);
    cnt = 0;
  } else {
    if (cnt) {
      cnt++;
      stack.splice(stack.length - cnt - 1, 0, str[i]);
      // console.log(stack, i, "d");
    } else {
      cnt++;
      stack.splice(stack.length - cnt, 0, str[i]);
      // console.log(stack, i);
    }
  }
}
stack = stack.join("");
let i = stack.trim().match(/[a-zA-Z]/gi).length;
cnt = 0;

while (stack.trim().match(/[a-zA-Z]/gi)) {
  if (i === nums.length) {
    stack = stack.replace(/[a-zA-Z]/, nums[cnt]);
    cnt++;
  } else {
    stack = stack.replace(/[a-zA-Z]/, nums[cnt]);
  }
}

console.log(eval(stack).toFixed(2));
