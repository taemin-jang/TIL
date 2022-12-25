// 11720번 숫자의 합

const file =
  process.platform === "linux" ? "/dev/stdin" : "./y22/BaekJoon/input.txt";

const input = require("fs").readFileSync(file).toString().trim().split("\n");

let num = input[1]
  .split("")
  .map((el) => +el)
  .filter((v, i) => i < input[0]);

let sum = 0;

num.forEach((v, i) => {
  sum += v;
});
console.log(sum);
