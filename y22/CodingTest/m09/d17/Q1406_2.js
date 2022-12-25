// 1406번 에디터
// @ts-check

const file =
  process.platform === "linux" ? "/dev/stdin" : "./y22/BaekJoon/input.txt";

const input = require("fs").readFileSync(file).toString().trim().split("\n");

let [str, n, ...arr] = input;

let Stack = str.trim().split("");
let cursor = Stack.length;
let lStack = Stack.slice(0, cursor);
let rStack = [];
let [command, value] = ["", ""];
for (let i = 0; i < +n; i++) {
  let ar = arr[i].trim().split(" ");
  if (ar.length > 1) {
    [command, value] = ar;
  } else {
    command = ar[0];
  }
  // console.log(command);
  switch (command) {
    case "L":
      if (cursor === 0) {
        cursor = 0;
      } else {
        cursor--;
      }
      // console.log(cursor);
      lStack = Stack.slice(0, cursor);
      rStack = Stack.slice(cursor);
      // console.log(lStack);
      // console.log(rStack);
      break;
    case "D":
      if (cursor > Stack.length) {
        cursor = Stack.length;
      } else {
        cursor++;
      }
      // console.log(cursor);

      lStack = Stack.slice(0, cursor);
      rStack = Stack.slice(cursor);
      // console.log(lStack);
      // console.log(rStack);
      break;
    case "B":
      lStack.pop();
      cursor--;
      Stack = lStack.concat(rStack);
      // console.log(Stack);
      break;
    case "P":
      lStack.push(value);

      // console.log("left : ", lStack);
      cursor++;
      Stack = lStack.concat(rStack);
      break;
  }
}
console.log(Stack.join(""));
