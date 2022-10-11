// 10820번 문자열 분석

const file =
  process.platform === "linux" ? "/dev/stdin" : "./y22/BaekJoon/input.txt";

let input = require("fs").readFileSync(file).toString().trim().split("\n");
let answer = [];
let count = [];
for (let i = 0; i < input.length; i++) {
  count = Array(4).fill(0);
  if (input[i] === "") continue;

  for (let j of input[i]) {
    if (/[a-z]/g.test(j)) {
      count[0]++;
    } else if (/[A-Z]/g.test(j)) {
      count[1]++;
    } else if (/[0-9]/g.test(j)) {
      count[2]++;
    } else if (j === " ") {
      count[3]++;
    }
  }

  answer.push(count.join(" "));
}
console.log(answer.join("\n"));

// console.log(/[A-Z]/.test(input[0][1]));
// console.log(input[1][1]);
