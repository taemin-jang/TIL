// 10828번 스택

const file =
  process.platform === "linux" ? "/dev/stdin" : "./y22/BaekJoon/input.txt";

const input = require("fs").readFileSync(file).toString().trim().split("\n");

let answer = [];

for (let i = 1; i <= Number(input[0]); i++) {
  let [str, num] = input[i].trim().split(" ");
  switch (str) {
    case "push":
      answer.push(+num);
      break;
    case "pop":
      answer.length === 0 ? console.log(-1) : console.log(answer.pop());

      break;
    case "size":
      console.log(answer.length);

      break;
    case "empty":
      answer.length === 0 ? console.log(1) : console.log(0);

      break;
    case "top":
      answer.length === 0
        ? console.log(-1)
        : console.log(answer[answer.length - 1]);
      break;
  }
}
