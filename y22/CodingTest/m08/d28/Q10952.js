// 10952번 A+B-5

const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line.trim());

  if (input.includes("0 0")) {
    rl.close();
  }
});

rl.on("close", () => {
  let idx = 0;
  let sum = [];
  while (idx < input.length - 1) {
    let [a, b] = input[idx].split(" ").map((el) => Number(el));
    sum.push(a + b);
    idx++;
  }
  console.log(sum.join("\n"));

  process.exit();
});
