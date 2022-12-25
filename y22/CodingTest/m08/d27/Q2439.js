// 2439번 별 찍기 - 2

const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];

rl.on("line", (line) => {
  input = line.split(" ").map((el) => Number(el));
  rl.close();
});
rl.on("close", () => {
  let answer = "";

  for (let i = 1; i <= input[0]; i++) {
    for (let j = 0; j < input[0] - i; j++) {
      answer += " ";
    }
    for (let j = 0; j < i; j++) {
      answer += "*";
    }
    answer += "\n";
  }
  console.log(answer);
  process.exit();
});
