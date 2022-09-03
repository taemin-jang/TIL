// 10809번 알파벳 찾기

const file =
  process.platform === "linux" ? "/dev/stdin" : "./y22/BaekJoon/input.txt";

const input = require("fs").readFileSync(file).toString().trim().split("");
let arr = Array(26).fill(-1);
for (let i = 0; i < input.length; i++) {
  if (input.indexOf(input[i], i) >= 0) {
    if (arr[input[i].codePointAt(0) - 97] !== -1) {
      continue;
    }
    arr[input[i].codePointAt(0) - 97] = i;
  }
}

console.log(arr.join(" "));
