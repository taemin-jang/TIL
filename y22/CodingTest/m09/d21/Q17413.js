// 17413번 단어 뒤집기2

const file =
  process.platform === "linux" ? "/dev/stdin" : "./y22/BaekJoon/input.txt";

const input = require("fs").readFileSync(file).toString().trim();
let arr = [];
let answer = [];
let word = [];

let result = "";
let pos = 0;
let [pre_a, pre_b, next_a, next_b] = [0, 0, 0, 0];

function solution(value) {
  arr = value.split("");
  // console.log(value);
  if (arr.includes("<", pos)) {
    pre_a = arr.indexOf("<", pos);
    pos++;
    if (arr.includes(">", pos)) {
      pre_b = arr.indexOf(">", pos);
      pos++;
    }
    if (arr.includes("<", pos)) {
      next_a = arr.indexOf("<", pos);
      pos++;
      if (arr.includes(">", pos)) {
        next_b = arr.indexOf(">", pos);
        pos++;
        console.log(pre_a, pre_b);
        console.log(next_a, next_b);
      }
    }
    answer = arr
      .slice(pre_b + 1, next_a)
      .reverse()
      .join("");

    console.log(answer);
    arr.splice(pre_b + 1, next_a - pre_b - 1, answer);
    result = arr.join("");
  } else {
    answer.push(arr.reverse().join(""));

    if (input.length === idx + 1) {
      result = answer.join(" ");
    }
  }
}

solution(input);
console.log(result);
