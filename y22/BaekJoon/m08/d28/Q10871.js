// 10871번 x보다 작은 수

const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let answer = "";
let i = 0;
rl.on("line", (line) => {
  input.push(line);
});

rl.on("close", () => {
  let [n, x] = input[0].split(" ").map((el) => Number(el));
  let num = input[1].split(" ").map((el) => Number(el));
  while (i < num.length) {
    if (num[i] < x) {
      answer += num[i] + " ";
    }
    i++;
  }
  console.log(answer);
  process.exit();
});
