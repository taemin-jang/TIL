//  1065번 한 수

const file =
  process.platform === "linux" ? "/dev/stdin" : "./y22/BaekJoon/input.txt";

const input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split(" ")
  .map((el) => Number(el));

const num = input[0];

let cnt = 99;
let d = 0;

if (num < 100) {
  cnt = num;
} else if (num > 99) {
  for (let i = 100; i <= num; i++) {
    let arr = (i + "").split("").map((el) => Number(el));

    d = arr[1] - arr[0];
    if (arr[0] + 2 * d === arr[2]) {
      cnt++;
    }
  }
}
console.log(cnt);
