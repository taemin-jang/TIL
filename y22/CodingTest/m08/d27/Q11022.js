// 11022번 A+B-8

const input = require("fs").readFileSync(0).toString().trim().split("\n");

let answer = "";
let sum = 0;
for (let i = 1; i <= input[0]; i++) {
  let num = input[i].split(" ").map((el) => Number(el));
  sum = num[0] + num[1];

  answer += `Case #${i}: ${num[0]} + ${num[1]} = ${sum}\n`;
}
console.log(answer);
