// 10808번 알파벳 개수

const file =
  process.platform === "linux" ? "/dev/stdin" : "./y22/BaekJoon/input.txt";

let input = require("fs").readFileSync(file).toString().trim().split("");

let alphabet = Array(26).fill(0);

for (let i of input) {
  alphabet[i.codePointAt() - 97]++;
}

console.log(alphabet.join(" "));
