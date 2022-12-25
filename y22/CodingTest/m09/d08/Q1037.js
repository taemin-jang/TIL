// 1037번 약수

const file =
  process.platform === "linux" ? "/dev/stdin" : "./y22/BaekJoon/input.txt";

const input = require("fs").readFileSync(file).toString().trim().split("\n");
let num = input[1].split(" ").map((el) => +el);
let answer = 0;

if (Number(input[0]) === 1) {
  answer = num[0] * num[0];
} else {
  num.sort((a, b) => a - b);
  answer = num[0] * num[Number(input[0]) - 1];
}

console.log(answer);
