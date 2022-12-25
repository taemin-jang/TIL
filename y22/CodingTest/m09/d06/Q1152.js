// 1152번 단어의 개수

const file =
  process.platform === "linux" ? "/dev/stdin" : "./y22/BaekJoon/input.txt";

const input = require("fs").readFileSync(file).toString().trim().split(" ");

if (input[0] === "") {
  input.length = 0;
}

console.log(input.length);
