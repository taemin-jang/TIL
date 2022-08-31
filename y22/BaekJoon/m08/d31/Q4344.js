// 4344번 평균은 넘겠지

const file =
  process.platform === "linux" ? "/dev/stdin" : "./y22/BaekJoon/input.txt";

const input = require("fs").readFileSync(file).toString().trim().split("\n");
let score = [];

let result = "";
input.forEach((value, index) => {
  if (index >= 1) {
    let sum = 0;
    let average = 0;
    let count = 0;
    score = value.split(" ").map((el) => Number(el));
    score.forEach((val, idx) => {
      if (idx >= 1) {
        sum += val;
      }
    });
    average = Number(sum / (score.length - 1));
    score.forEach((val, idx) => {
      if (idx >= 1) {
        if (val > average) count++;
      }
    });

    result += Number((count / (score.length - 1)) * 100).toFixed(3) + "%\n";
  }
});

console.log(result);
