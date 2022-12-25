// 1874번 스택 수열
// @ts-check

const file =
  process.platform === "linux" ? "/dev/stdin" : "./y22/BaekJoon/input.txt";

const input = require("fs").readFileSync(file).toString().trim().split("\n");

const [n, ...nums] = input;

let num = nums.map((el) => +el.trim());

let arr = [];
let answer = [];
let str = "";
let j = 0;
let i = 1;
while (i <= +n) {
  // console.log(i);
  if (!answer.includes(i) && !arr.includes(i)) {
    arr.push(i);
    str += "+\n";
    // console.log(i, !answer.includes(i) && !arr.includes(i));
    // console.log("arr : " + arr);

    if (num[j] === i) {
      answer.push(arr.pop());

      str += "-\n";
      j++;
      i = 0;
    }
  } else {
    if (num[j] === i) {
      answer.push(arr.pop());
      str += "-\n";
      j++;
      // console.log(answer);
      i = 0;
    }
  }

  i++;
}
if (answer.join("") === num.join("")) {
  console.log(str.trim());
  console.log(answer);
} else {
  console.log("NO");
}
