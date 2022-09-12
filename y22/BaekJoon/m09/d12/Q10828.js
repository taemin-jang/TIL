// 10828번 스택
// @ts-check

const file =
  process.platform === "linux" ? "/dev/stdin" : "./y22/BaekJoon/input.txt";

const input = require("fs").readFileSync(file).toString().trim().split("\n");

let answer = [];
let ans = "";
for (let i = 1; i <= Number(input[0]); i++) {
  let [str, num] = input[i].trim().split(" ");
  switch (str) {
    case "push":
      answer.push(+num);
      break;
    case "pop":
      answer.length === 0 ? (ans += -1) : (ans += answer.pop());
      ans += "\n";
      break;
    case "size":
      ans += answer.length;
      ans += "\n";
      break;
    case "empty":
      answer.length === 0 ? (ans += 1) : (ans += 0);
      ans += "\n";
      break;
    case "top":
      answer.length === 0 ? (ans += -1) : (ans += answer[answer.length - 1]);
      ans += "\n";
      break;
  }
}

console.log(ans);
