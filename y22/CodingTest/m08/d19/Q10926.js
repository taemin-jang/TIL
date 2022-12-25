// 10926번 ??!
// 준하는 사이트에 회원가입을 하다가 joonas라는 아이디가 이미 존재하는 것을 보고 놀랐다. 준하는 놀람을 ??!로 표현한다. 준하가 가입하려고 하는 사이트에 이미 존재하는 아이디가 주어졌을 때, 놀람을 표현하는 프로그램을 작성하시오.

var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

console.log(input[0] + "??!");

// fs로 풀었을 경우

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let input = [];

// rl.on("line", (line) => {
//   input = line.split(" ").map((el) => el);
//   rl.close();
// });

// rl.on("close", () => {
//   console.log(input[0] + "??!");
//   process.exit();
// });
