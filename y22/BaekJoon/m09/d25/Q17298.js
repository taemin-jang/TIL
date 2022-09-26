// 17298번 오큰수

const file =
  process.platform === "linux" ? "/dev/stdin" : "./y22/BaekJoon/input.txt";

let input = require("fs").readFileSync(file).toString().trim().split("\n");
let result = [];
function solution(arr) {
  arr.forEach((v, i) => {
    // let f = arr.slice(i + 1).filter((va, i) => v < va);
    let f = arr.slice(i + 1).map((va) => {
      if (v < va) {
        return va;
      }
    });
    console.log(f);
    if (v < f[0]) {
      result.push(f[0]);
    } else {
      result.push(-1);
    }
  });
  console.log(result.join(" "));
}

solution(input[1].split(" "));
