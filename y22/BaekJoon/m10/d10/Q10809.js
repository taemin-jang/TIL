// 10809번 알파벳 찾기

const file =
  process.platform === "linux" ? "/dev/stdin" : "./y22/BaekJoon/input.txt";

let input = require("fs").readFileSync(file).toString().trim().split("");

let alphabet = Array(26).fill(-1);

input.forEach((v, i) => {
  if (alphabet[v.codePointAt() - 97] === -1) {
    alphabet[v.codePointAt() - 97] = i;
  }
});

console.log(alphabet.join(" "));
