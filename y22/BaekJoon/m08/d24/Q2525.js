// 2525번 오븐 시계

const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let now_time = [];
rl.on("line", (line) => {
  input.push(line);
  now_time = input[0].split(" ").map((el) => parseInt(el));
});

rl.on("close", () => {
  const time = now_time[0] * 60 + now_time[1] + parseInt(input[1]);
  const add_time_H =
    parseInt(time / 60) < 24 ? parseInt(time / 60) : parseInt(time / 60) - 24;
  const add_time_M = parseInt(time % 60);
  console.log(add_time_H, add_time_M);
  process.exit();
});
