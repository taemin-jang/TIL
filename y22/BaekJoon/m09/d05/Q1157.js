// 1157번 단어 공부

const file =
  process.platform === "linux" ? "/dev/stdin" : "./y22/BaekJoon/input.txt";

const input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .toLowerCase()
  .split("");
let alphabet = Array(26).fill(0);

input.forEach((v, i) => {
  alphabet[v.codePointAt(0) - 97]++;
});

let max_sort = [...alphabet];
let max = max_sort.sort((a, b) => a - b)[alphabet.length - 1];
let max_a = [];

alphabet.forEach((v, i) => {
  if (max <= v) {
    max_a.push(String.fromCharCode(i + 65));
  }
});

max_a.length === 1 ? console.log(max_a[0]) : console.log("?");
