// 1316번 그룹 단어 체커

const file =
  process.platform === "linux" ? "/dev/stdin" : "./y22/BaekJoon/input.txt";

const input = require("fs").readFileSync(file).toString().trim().split("\n");
let cnt = 0;
for (let i = 1; i <= input[0]; i++) {
  let arr = [];
  let str = input[i].split("");
  for (let j = 0; j < str.length; j++) {
    if (!arr.includes(str[j])) {
      arr.push(str[j]);
    } else {
      if (str[j - 1] === str[j]) {
        arr.push(str[j]);
      } else {
        cnt--;

        break;
      }
    }
  }
  cnt++;
}

console.log(cnt);
