// 1874번 스택 수열
// @ts-check

const file =
  process.platform === "linux" ? "/dev/stdin" : "./y22/BaekJoon/input.txt";

const input = require("fs").readFileSync(file).toString().trim().split("\n");

const [n, ...nums] = input;

let num = nums.map((el) => +el.trim());

let arr = [];
let result = "";
let j = 1;
for (let i = 0; i < +n; i++) {
  for (j; j <= num[i]; j++) {
    result += "+\n";
    arr.push(j);
  }

  let ar = arr.pop();
  if (ar !== num[i]) {
    result = "NO";
    break;
  }

  result += "-\n";
}
console.log(result.trim());
