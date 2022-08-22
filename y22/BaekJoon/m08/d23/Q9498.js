// 9498번 시험 성적
// 시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input = line.split(" ").map((el) => parseInt(el));
  rl.close();
});

rl.on("close", () => {
  checkPoint(input[0]);
  process.exit;
});

function checkPoint(num) {
  if (num >= 90 && num <= 100) {
    console.log("A");
  } else if (num >= 80 && num < 90) {
    console.log("B");
  } else if (num >= 70 && num < 80) {
    console.log("C");
  } else if (num >= 60 && num < 70) {
    console.log("D");
  } else {
    console.log("F");
  }
}
