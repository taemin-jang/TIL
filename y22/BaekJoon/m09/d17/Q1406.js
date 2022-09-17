// 1406번 에디터

const file =
  process.platform === "linux" ? "/dev/stdin" : "./y22/BaekJoon/input.txt";

const input = require("fs").readFileSync(file).toString().trim().split("\n");

let [str, n, ...arr] = input;

let command = "";
let value = "";
let cursor = str.trim().length;
let answer = "";

for (let i = 0; i < +n; i++) {
  let ar = arr[i].trim().split(" ");
  if (ar.length > 1) {
    command = ar[0];
    value = ar[1];
  } else {
    command = ar[0];
  }
  switch (command) {
    case "L":
      if (cursor < 0) {
        cursor = 0;
      } else {
        cursor--;
      }
      break;
    case "D":
      if (cursor > str.trim().length) {
        cursor = str.trim().length;
      } else {
        cursor++;
      }
      break;
    case "B":
      if (cursor < 0) {
        cursor = 0;
      } else {
        // console.log(cursor);
        answer = str.substring(0, cursor - 1) + "" + str.substring(cursor);
        str = answer;
        // console.log("B : " + answer);
        cursor--;
      }
      break;
    case "P":
      // console.log(cursor);
      answer = str.substring(0, cursor) + value + str.substring(cursor);
      str = answer;
      cursor++;
      // console.log(str);
      // console.log("P : " + cursor);

      // 여기서 value 값을 사용
      break;
  }
}

console.log(answer);
