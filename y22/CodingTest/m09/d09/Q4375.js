// 4375번 1
// @ts-check

const file =
  process.platform === "linux" ? "/dev/stdin" : "./y22/BaekJoon/input.txt";

const input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((el) => +el);

let i = 1;
let cnt = 1;
let idx = 0;
let str = "1";
let answer = [];
while (true) {
  if (cnt % input[idx] === 0) {
    answer.push(i);
    i = 1;
    idx++;
    cnt = 1;
  } else {
    cnt = cnt * 10 + 1;
    cnt %= input[idx];
    i++;
  }

  // if (+str % input[idx] !== 0) {
  //   str += "1";
  //   i++;
  // } else {
  //   answer.push(i);
  //   str = "1";
  //   i = 1;
  //   idx++;
  // }
  if (answer.length === input.length) {
    break;
  }
}
console.log(answer.join("\n"));
