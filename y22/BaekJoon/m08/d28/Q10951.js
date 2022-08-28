// 10951번 A+B-4

const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line.trim());
});

rl.on("close", () => {
  let idx = 0;
  let sum = [];
  while (idx < input.length) {
    let [a, b] = input[idx].split(" ").map((el) => Number(el));
    sum.push(a + b);
    idx++;
  }
  console.log(sum.join("\n"));

  process.exit();
});
