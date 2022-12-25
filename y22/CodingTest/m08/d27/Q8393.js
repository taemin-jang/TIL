// 8393번 합

const input = require("fs").readFileSync(0).toString().trim().split(" ");
let sum = 0;
for (let i = 1; i <= input[0]; i++) {
  sum += i;
}
console.log(sum);
