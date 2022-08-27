// 11021번 A+B-7

// const rl = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// const input = [];

// rl.on("line", (line) => {
//   input.push(line);
// });

// rl.on("close", () => {
//   let sum = 0;
//   let answer = "";
//   for (let i = 1; i <= input[0]; i++) {
//     let num = input[i].split(" ").map((el) => Number(el));
//     sum = num[0] + num[1];
//     answer += "Case #" + i + ": " + sum + "\n";
//   }
//   console.log(answer);
// });

const input = require("fs").readFileSync(0).toString().split("\n");

let sum = 0;
let answer = "";
for (let i = 1; i <= input[0]; i++) {
  let num = input[i].split(" ").map((el) => Number(el));
  sum = num[0] + num[1];
  answer += "Case #" + i + ": " + sum + "\n";
}
console.log(answer);
