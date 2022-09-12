// 10828번 스택
// @ts-check
// class Stack {
//   constructor() {
//     this.arr = [];
//   }

//   push(data) {
//     this.arr.push(data);
//   }

//   pop() {
//     this.arr.length === 0 ? console.log(-1) : console.log(this.arr.pop());
//   }

//   size() {
//     console.log(this.arr.length);
//   }

//   empty() {
//     this.arr.length === 0 ? console.log(1) : console.log(0);
//   }

//   top() {
//     this.arr.length === 0
//       ? console.log(-1)
//       : console.log(this.arr[this.arr.length - 1]);
//   }
// }
// let s = new Stack();

const file =
  process.platform === "linux" ? "/dev/stdin" : "./y22/BaekJoon/input.txt";

const input = require("fs").readFileSync(file).toString().trim().split("\n");

let answer = [];

for (let i = 1; i <= Number(input[0]); i++) {
  let str = "";
  let arr = [];
  let num = 0;
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
