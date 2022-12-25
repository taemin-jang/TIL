// 17413번 단어 뒤집기2

const file =
  process.platform === "linux" ? "/dev/stdin" : "./y22/BaekJoon/input.txt";

const input = require("fs").readFileSync(file).toString().trim();

let arr = [];
let answer = [];
let ad = [];
let pre = 0;
let word = "";

function solution(str) {
  let pos = input.indexOf("<");
  if (str.includes("<") === false) {
    console.log(str, "1");
    arr = str.split(" ");
    // arr.forEach((el) => {
    //   answer.push(el.split("").reverse().join(""));
    // });
  } else {
    if (str.includes("<", pos)) {
      pre = pos;
      pos = str.indexOf(">", pos + 1);
      // str =
      //   pre === 0
      //     ? str.replace(str.slice(pos + 1), " ") + str.slice(pos + 1)
      //     : str.slice(pre) +
      //       str.replace(str.slice(pre, pos + 1), " ") +
      //       str.slice(pos + 1);
      if (pre === 0) {
        str = str.slice(pos + 1);
        ad.push(str.slice(pre, str.indexOf("<", pre)));
      }
      // console.log(pre, pos);
      // console.log(str);
      // console.log(answer);
      solution(str.trim());
    }
    // str.slice(str.indexof("<", pos), str.indexOf(">", pos++));
    // answer = answer.join(" ");
  }
}
solution(input);
console.log(ad);
arr.forEach((el) => {
  answer.push(el.split("").reverse().join(""));
});
// answer = answer.join(" ");
// console.log(answer);

// console.log(answer.trim());
