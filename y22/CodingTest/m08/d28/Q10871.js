// 10871번 x보다 작은 수

const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let [n, x] = [0, 0];
rl.on("line", (line) => {
  input.push(line);
  [n, x] = input[0].split(" ").map((el) => Number(el));
  if (input.length === 2) {
    rl.close();
  }
});

rl.on("close", () => {
  let num = input[1].split(" ").map((el) => Number(el));

  const answer = num.filter((el) => x > el);

  console.log(answer.join(" "));
  process.exit();
});

// let input = require('fs').readFileSync(0).toString().split('\n');

// let max = Number(input[0].split(' ')[1]);
// let arr = input[1].split(' ').map(x => Number(x));

// const answer = arr.filter(v => max > v);

// console.log(answer.join(' '));
