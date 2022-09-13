// 9093번 단어 뒤집기

const file =
  process.platform === "linux" ? "/dev/stdin" : "./y22/BaekJoon/input.txt";

const input = require("fs").readFileSync(file).toString().trim().split("\n");

let answer = "";

for (let i = 1; i <= +input[0]; i++) {
  let str = input[i].split(" ");

  for (let j = 0; j < str.length; j++) {
    let reverse = str[j].trim().split("").reverse().join("");
    reverse += " ";
    answer += reverse;
  }
  answer += "\n";
}

console.log(answer.trim());
