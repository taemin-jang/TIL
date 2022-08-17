// 1000번 A+B
// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let sum = 0;

rl.on("line", (line) => {
  input = line.split(" ").map((el) => parseInt(el));
  rl.close();
});

rl.on("close", () => {
  for (let i = 0; i < input.length; i++) {
    sum += input[i];
  }
  console.log(sum);

  process.exit();
});

// fs로 풀었을 경우!

// var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString().split(' ');
// var a = parseInt(input[0]);
// var b = parseInt(input[1]);
// console.log(a + b);
