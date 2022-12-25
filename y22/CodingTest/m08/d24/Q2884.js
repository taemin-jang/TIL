// 2884번 알람 시계

// const rl = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let input = [];

// rl.on("line", (line) => {
//   input = line.split(" ").map((el) => parseInt(el));
//   rl.close();
// });

// rl.on("close", () => {
//   const H = input[0];
//   const M = input[1];
//   let sum = H * 60 + M;

//   const alram = sum < 45 ? 1440 - (45 - sum) : sum - 45;
//   const alram_H =
//     alram / 60 >= 24 ? parseInt(alram / 60 - 24) : parseInt(alram / 60);
//   const alram_M = alram % 60;

//   console.log(alram_H, alram_M);
//   process.exit;
// });

const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split(" ")
  .map((el) => parseInt(el));

const H = input[0];
const M = input[1];
let sum = H * 60 + M;

const alram = sum < 45 ? 1440 - (45 - sum) : sum - 45;
const alram_H =
  alram / 60 >= 24 ? parseInt(alram / 60 - 24) : parseInt(alram / 60);
const alram_M = alram % 60;

console.log(alram_H, alram_M);
