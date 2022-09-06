// 5622번 다이얼

const file =
  process.platform === "linux" ? "/dev/stdin" : "./y22/BaekJoon/input.txt";

const input = require("fs").readFileSync(file).toString().trim().split("");
let cnt = 0;
input.forEach((v, i) => {
  if ("ABC".includes(v)) {
    cnt += 3;
  } else if ("DEF".includes(v)) {
    cnt += 4;
  } else if ("GHI".includes(v)) {
    cnt += 5;
  } else if ("JKL".includes(v)) {
    cnt += 6;
  } else if ("MNO".includes(v)) {
    cnt += 7;
  } else if ("PQRS".includes(v)) {
    cnt += 8;
  } else if ("TUV".includes(v)) {
    cnt += 9;
  } else if ("WXYZ".includes(v)) {
    cnt += 10;
  }
});

console.log(cnt);

// 다른 풀이

// const dialObj = {
//   3: "ABC",
//   4: "DEF",
//   5: "GHI",
//   6: "JKL",
//   7: "MNO",
//   8: "PQRS",
//   9: "TUV",
//   10: "WXYZ",
// };

// let count = 0;

// for(let i = 0; i < input.length; i++){
//   for(let j = 3; j <= 10; j++){
//     if(dialObj[j].includes(input[i])){
//       count += j;
//     }
//   }
// }

// console.log(count);
