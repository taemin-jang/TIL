// 10866번 덱

const file =
  process.platform === "linux" ? "/dev/stdin" : "./y22/BaekJoon/input.txt";

const input = require("fs").readFileSync(file).toString().trim().split("\n");

let [num, ...arr] = input;

let queue = [];
let answer = "";
for (const command of arr) {
  let [com, n] = command.trim().split(" ");
  switch (com) {
    case "push_front":
      queue.splice(0, 0, n);
      break;
    case "push_back":
      queue.push(n);
      break;
    case "pop_front":
      answer += queue.length === 0 ? "-1" : queue.splice(0, 1);
      answer += "\n";
      break;
    case "pop_back":
      answer += queue.length === 0 ? "-1" : queue.pop();
      answer += "\n";
      break;
    case "size":
      answer += queue.length;
      answer += "\n";
      break;
    case "empty":
      answer += queue.length === 0 ? "1" : "0";
      answer += "\n";
      break;
    case "front":
      answer += queue.length === 0 ? "-1" : queue[0];
      answer += "\n";
      break;
    case "back":
      answer += queue.length === 0 ? "-1" : queue[queue.length - 1];
      answer += "\n";
      break;
  }
}

console.log(answer);
