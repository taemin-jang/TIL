// 1406번 에디터
// @ts-check

const file =
  process.platform === "linux" ? "/dev/stdin" : "./y22/BaekJoon/input.txt";

const input = require("fs").readFileSync(file).toString().trim().split("\n");

let [str, n, ...arr] = input;

let lStack = str.trim().split("");
let rStack = [];
let [command, value] = ["", ""];
for (let i = 0; i < +n; i++) {
  let ar = arr[i].trim().split(" ");
  if (ar.length > 1) {
    [command, value] = ar;
  } else {
    command = ar[0];
  }
  switch (command) {
    case "L":
      if (lStack.length !== 0) {
        rStack.push(lStack[lStack.length - 1]);
        lStack.pop();
      }

      break;
    case "D":
      if (rStack.length !== 0) {
        lStack.push(rStack[rStack.length - 1]);
        rStack.pop();
      }
      break;
    case "B":
      if (lStack.length !== 0) {
        lStack.pop();
      }

      break;
    case "P":
      lStack.push(value);
      break;
  }
}
console.log(lStack.join("") + rStack.reverse().join(""));
