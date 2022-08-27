// 25304번 영수증

// const rl = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// const input = [];

// rl.on("line", (line) => {
//   input.push(line);
// });

// rl.on("close", () => {
//   let index = 2;
//   let sum = 0;
//   for (let i = 0; i < input[1]; i++) {
//     let num = input[index].split(" ").map((el) => parseInt(el));

//     sum += num[0] * num[1];
//     index++;
//   }
//   console.log(sum);
//   if (sum === Number(input[0])) {
//     console.log("Yes");
//   } else {
//     console.log("No");
//   }
//   process.exit();
// });

const input = require("fs").readFileSync(0).toString().trim().split("\n");

let index = 2;
let sum = 0;
for (let i = 0; i < input[1]; i++) {
  let num = input[index].split(" ").map((el) => parseInt(el));

  sum += num[0] * num[1];
  index++;
}

if (sum === Number(input[0])) {
  console.log("Yes");
} else {
  console.log("No");
}
