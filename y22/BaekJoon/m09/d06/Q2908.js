// 2908번 상수
// @ts-check
const file =
  process.platform === "linux" ? "/dev/stdin" : "./y22/BaekJoon/input.txt";

const input = require("fs").readFileSync(file).toString().trim().split(" ");
let answer = [];

input.forEach((v, i) => {
  let a = v.split("");
  v = "";
  for (let j = 2; j >= 0; j--) {
    v += a[j];
  }
  answer.push(+v);
});

answer[0] < answer[1] ? console.log(answer[1]) : console.log(answer[0]);
