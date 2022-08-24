// 14681번 사분면 고르기
// 점의 좌표를 입력받아 그 점이 어느 사분면에 속하는지 알아내는 프로그램을 작성하시오. 단, x좌표와 y좌표는 모두 양수나 음수라고 가정한다.

// const rl = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let input = [];

// rl.on("line", (line) => {
//   input.push(parseInt(line));
// });

// rl.on("close", () => {
//   const A = parseInt(input[0]);
//   const B = parseInt(input[1]);
//   Quadrant(A, B);
//   process.exit;
// });

// function Quadrant(A, B) {
//   if (A > 0 && B > 0) {
//     console.log("1");
//   } else if (A < 0 && B > 0) {
//     console.log("2");
//   } else if (A < 0 && B < 0) {
//     console.log("3");
//   } else if (A > 0 && B < 0) {
//     console.log("4");
//   }
// }

const [x, y] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);
if (x > 0) {
  y > 0 ? console.log("1") : console.log("4");
} else if (x < 0) {
  y > 0 ? console.log("2") : console.log("3");
}
