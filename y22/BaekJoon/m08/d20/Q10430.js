// 10430번 나머지
// (A+B)%C는 ((A%C) + (B%C))%C 와 같을까?
// (A×B)%C는 ((A%C) × (B%C))%C 와 같을까?
// 세 수 A, B, C가 주어졌을 때, 위의 네 가지 값을 구하는 프로그램을 작성하시오.

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
//   console.log((input[0] + input[1]) % input[2]);
//   console.log(((input[0] % input[2]) + (input[1] % input[2])) % input[2]);
//   console.log((input[0] * input[1]) % input[2]);
//   console.log(((input[0] % input[2]) * (input[1] % input[2])) % input[2]);
//   process.exit;
// });

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
console.log((input[0] + input[1]) % input[2]);
console.log(((input[0] % input[2]) + (input[1] % input[2])) % input[2]);
console.log((input[0] * input[1]) % input[2]);
console.log(((input[0] % input[2]) * (input[1] % input[2])) % input[2]);
