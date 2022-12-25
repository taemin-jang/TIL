// 2675번 문자열 반복

const file =
  process.platform === "linux" ? "/dev/stdin" : "./y22/BaekJoon/input.txt";

const input = require("fs").readFileSync(file).toString().trim().split("\n");

let answer = "";

input.forEach((v, i) => {
  if (i >= 1) {
    let num = v.split(" ");
    let str = num[1].trim().split("");

    str.forEach((v, i) => {
      for (let j = 0; j < num[0]; j++) {
        answer += v;
      }
    });
    answer += "\n";
  }
});

console.log(answer);
