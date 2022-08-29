// 10818번 최소, 최대

// const file =
//   process.platform === "linux" ? "/dev/stdin" : "./y22/BaekJoon/input.txt";

const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
});

rl.on("close", () => {
  let num = input[1].split(" ").map((el) => Number(el));
  num.sort((a, b) => a - b);
  console.log(num[0], num[Number(input[0]) - 1]);
  process.exit();
});
