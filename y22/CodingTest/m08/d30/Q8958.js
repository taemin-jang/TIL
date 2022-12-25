// 8958번 OX퀴즈

const file =
  process.platform === "linux" ? "/dev/stdin" : "./y22/BaekJoon/input.txt";

const input = require("fs").readFileSync(file).toString().trim().split("\n");

let totalCount = [];
let count = 0;
let sumCount = 0;

input.forEach((value, index) => {
  // 입력 값 첫 줄은 제외하려고 쓴 조건
  if (index >= 1) {
    // pos는 입력 값 각 줄마다 O가 있으면 index 값 저장
    let pos = input[index].indexOf("O");
    // pos_x는 pos의 이전 값 저장
    let pos_x = pos;
    while (true) {
      // pos 값이 X의 인덱스 값보다 작거나 X의 인덱스 값이 -1이면
      // 카운트 1 해주고
      // pos 값이 X의 인덱스 값보다 크거나 X의 인덱스 값이 -1이 아니면
      // 카운트를 초기화해준다.
      if (
        pos > input[index].indexOf("X", pos_x + 1) &&
        input[index].indexOf("X", pos_x + 1) !== -1
      ) {
        count = 0;
        // console.log("pos: ", pos);
        // console.log(input[index].indexOf("X", pos_x + 1));
        pos_x = input[index].indexOf("X", pos_x + 1);
      } else {
        if (pos === -1) {
          totalCount.push(sumCount);
          pos = input[index].indexOf("O");
          pos_x = pos;
          count = 0;
          sumCount = 0;
          break;
        }
        count++;
        pos_x = pos;
        // console.log("pos: ", pos);
        pos = input[index].indexOf("O", pos + 1);
        // console.log("count: ", count);

        sumCount += count;
        // console.log("sumCount: ", sumCount);
      }
    }
  }
});
totalCount.forEach((el) => console.log(el));

// 다른 풀이
// 돌려보면 맞게 나오는데 제출하면 틀림으로 나옴

// input.forEach((value, index) => {
//   if (index >= 1) {
//     for (let j = 0; j < input[index].length; j++) {
//       if (value.indexOf("O", j) === j) {
//         count++;
//       } else {
//         count = 0;
//       }
//       sumCount += count;
//     }
//     totalCount.push(sumCount);
//     sumCount = 0;
//   }
// });

// totalCount.forEach((el) => console.log(el));
