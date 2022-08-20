// 3003번 킹, 퀸, 룩, 비숍, 나이트, 폰
// 동혁이는 오래된 창고를 뒤지다가 낡은 체스판과 피스를 발견했다.
// 체스판의 먼지를 털어내고 걸레로 닦으니 그럭저럭 쓸만한 체스판이 되었다. 하지만, 검정색 피스는 모두 있었으나, 흰색 피스는 개수가 올바르지 않았다.
// 체스는 총 16개의 피스를 사용하며, 킹 1개, 퀸 1개, 룩 2개, 비숍 2개, 나이트 2개, 폰 8개로 구성되어 있다.
// 동혁이가 발견한 흰색 피스의 개수가 주어졌을 때, 몇 개를 더하거나 빼야 올바른 세트가 되는지 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
for (let i = 0; i < 6; i++) {
  if (i === 0) {
    input[i] = 1 - input[i];
  } else if (i === 1) {
    input[i] = 1 - input[i];
  } else if (i === 2) {
    input[i] = 2 - input[i];
  } else if (i === 3) {
    input[i] = 2 - input[i];
  } else if (i === 4) {
    input[i] = 2 - input[i];
  } else if (i === 5) {
    input[i] = 8 - input[i];
  }
}
console.log(
  `${input[0]} ${input[1]} ${input[2]} ${input[3]} ${input[4]} ${input[5]}`
);

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
//   for (let i = 0; i < 6; i++) {
//     if (i === 0) {
//       input[i] = 1 - input[i];
//     } else if (i === 1) {
//       input[i] = 1 - input[i];
//     } else if (i === 2) {
//       input[i] = 2 - input[i];
//     } else if (i === 3) {
//       input[i] = 2 - input[i];
//     } else if (i === 4) {
//       input[i] = 2 - input[i];
//     } else if (i === 5) {
//       input[i] = 8 - input[i];
//     }
//   }
//   console.log(
//     `${input[0]} ${input[1]} ${input[2]} ${input[3]} ${input[4]} ${input[5]}`
//   );
//   process.exit;
// });
