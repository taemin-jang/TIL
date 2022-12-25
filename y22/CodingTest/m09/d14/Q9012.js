// 9012번 괄호

const file =
  process.platform === "linux" ? "/dev/stdin" : "./y22/BaekJoon/input.txt";

const input = require("fs").readFileSync(file).toString().trim().split("\n");

let answer = "";
for (let i = 1; i <= +input[0]; i++) {
  let cnt_a = 0;
  let cnt_b = 0;
  for (let j = 0; j < input[i].trim().length; j++) {
    if (input[i].indexOf("(", j) === j) {
      cnt_a++;
    } else {
      cnt_b++;
    }
    if (cnt_a < cnt_b) {
      break;
    }
  }

  cnt_a === cnt_b ? (answer += "YES\n") : (answer += "NO\n");
}
console.log(answer.trim());
