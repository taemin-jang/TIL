// 10845번 큐

const file =
  process.platform === "linux" ? "/dev/stdin" : "./y22/BaekJoon/input.txt";

const input = require("fs").readFileSync(file).toString().trim().split("\n");

let [num, ...arr] = input;

let Queue = [];
let answer = "";

for (let i = 0; i < +num; i++) {
  let ar = arr[i].split(" ");
  let command = ar[0].trim();
  let value = ar[1];

  switch (command) {
    case "push":
      Queue.splice(0, 0, +value);
      break;
    case "pop":
      if (Queue.length !== 0) {
        answer += Queue[Queue.length - 1] + "\n";
        Queue.pop();
      } else {
        answer += "-1\n";
      }
      break;
    case "size":
      answer += Queue.length + "\n";
      break;
    case "empty":
      if (Queue.length === 0) {
        answer += "1\n";
      } else {
        answer += "0\n";
      }
      break;
    case "front":
      if (Queue.length === 0) {
        answer += "-1\n";
      } else {
        answer += Queue[Queue.length - 1] + "\n";
      }
      break;
    case "back":
      if (Queue.length === 0) {
        answer += "-1\n";
      } else {
        answer += Queue[0] + "\n";
      }
      break;
  }
}

console.log(answer.trim());
