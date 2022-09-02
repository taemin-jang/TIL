// 11654번 아스키 코드

const file =
  process.platform === "linux" ? "/dev/stdin" : "./y22/BaekJoon/input.txt";

const input = require("fs").readFileSync(file).toString().trim().split(" ");

console.log(input[0].charCodeAt(0));

console.log(input[0].codePointAt(0));
