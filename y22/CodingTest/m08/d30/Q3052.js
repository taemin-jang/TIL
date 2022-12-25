// 3052번 나머지

const file =
  process.platform === "linux" ? "/dev/stdin" : "./y22/BaekJoon/input.txt";

const input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((el) => Number(el));

let rest = [];
let count = 0;
let sameNumber = [];

for (let i = 0; i < input.length; i++) {
  rest.push(input[i] % 42);
}

for (let i = 0; i < input.length - 2; i++) {
  if (sameNumber.includes(i)) {
    continue;
  }
  for (let j = 0; j < input.length; j++) {
    if (rest[i] === rest[j] && i !== j) {
      count++;
      sameNumber.push(j);
    }
  }
}
console.log(rest.length - count);
