// 2438번 별 찍기 -1

// const rl = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// let input = [];

// rl.on("line", (line) => {
//   input = line.split(" ").map((el) => Number(el));
//   rl.close();
// });
// rl.on("close", () => {
//   let answer = "";

//   for (let i = 1; i <= input[0]; i++) {
//     for (let j = 1; j < i + 1; j++) {
//       answer += "*";
//     }
//     answer += "\n";
//   }
//   console.log(answer);
//   process.exit();
// });

const input = require("fs")
  .readFileSync(0)
  .toString()
  .split(" ")
  .map((el) => Number(el));

let answer = "";

for (let i = 1; i <= input[0]; i++) {
  for (let j = 1; j < i + 1; j++) {
    answer += "*";
  }
  answer += "\n";
}
console.log(answer);
