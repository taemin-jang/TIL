// 1001번 A-B
// 두 정수 A와 B를 입력받은 다음, A-B를 출력하는 프로그램을 작성하시오.

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let input = [];

// rl.on("line", (line) => {
//   input = line.split(" ").map((el) => parseInt(el));
//   rl.close();
// });

// rl.on("close", () => {
//   console.log(input[0] - input[1]);

//   process.exit();
// });

// fs로 풀었을 경우!

var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split(" ");
// var input = fs.readFileSync(0, "utf8").toString().split(" ");
var a = parseInt(input[0]);
var b = parseInt(input[1]);
console.log(a - b);
