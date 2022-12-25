// 10950번 A+B-3

// const rl = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let input = [];
// rl.on("line", (line) => {
//   input.push(line);
// });

// rl.on("close", () => {
//   let num = [];
//   for (let i = 1; i <= input[0]; i++) {
//     num = input[i].split(" ").map((el) => parseInt(el));

//     sum = num[0] + num[1];
//     console.log(sum);
//   }
// });

const input = require("fs").readFileSync(0).toString().split("\n");

for (let i = 1; i <= input[0]; i++) {
  let num = input[i].split(" ").map((el) => parseInt(el));

  console.log(num[0] + num[1]);
}
