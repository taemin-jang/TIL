// 4673번 셀프 넘버

// let answer_not = [];
// let answer = [];
// let answer_true = [];
// for (let i = 1; i <= 10000; i++) {
//   answer.push(i);
// }

// function selfNumber(num) {
//   let num_1000 = parseInt(num / 1000);
//   let num_100 = parseInt((num / 100) % 10);
//   let num_10 = parseInt((num / 10) % 10);
//   let num_1 = num % 10;
//   let new_num = num + num_1000 + num_100 + num_10 + num_1;

//   if (new_num < 10000) {
//     answer_not.push(new_num);
//     // answer_not = answer_not.filter((el) => {
//     //   el !== new_num;
//     // });
//     // answer_not += new_num + "\n";
//     // selfNumber(new_num);
//   } else {
//     return answer_not;
//   }
// }
// for (let i = 1; i <= 10000; i++) {
//   selfNumber(i);
// }
// // selfNumber(1);
// let cnt = "";
// let count = 0;
// answer_not.sort((a, b) => a - b);

// for (let i = 0; i < 10000; i++) {
//   if (answer[i] === answer_not[count]) {
//     answer[i] = false;
//     count++;
//   }
// }
// let result = answer.filter((el) => el !== false);
// // for (let i = 0; i < result.length; i++) {
// //   console.log(result[i]);
// // }
// console.log(answer_not;

// 다른 사람 풀이
// 0~10000까지 false로 채운다.
let arr = Array(10001).fill(false);
let n = 1;
// 1부터 9999까지 입력한다
while (n < 10000) {
  // 생성자 숫자를 배열인덱스에 넣고 그 값을 true로 바꿔준다
  arr[n + (n + "").split("").reduce((a, c) => a + +c, 0)] = true;
  n++;
}
let r = [];
// false인 값을 배열 r에 넣어준다
arr.forEach((v, i) => {
  if (!v) r.push(i);
});
console.log(r.slice(1).join("\n"));
