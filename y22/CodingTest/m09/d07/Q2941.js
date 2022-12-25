// 2941번 크로아티아 알파벳
// @ts-check

const file =
  process.platform === "linux" ? "/dev/stdin" : "./y22/BaekJoon/input.txt";

const input = require("fs").readFileSync(file).toString().trim();

let croatia = {
  1: "c=",
  2: "c-",
  3: "dz=",
  4: "d-",
  5: "lj",
  6: "nj",
  7: "s=",
  8: "z=",
};

let arr = input;

for (let j = 1; j <= 8; j++) {
  if (arr.indexOf(croatia[j]) >= 0) {
    arr = arr.replace(croatia[j], "@");
    j = 0;
  }
}
console.log(arr.length);
