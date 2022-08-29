// 2562번 최댓값

const file =
  process.platform === "linux" ? "/dev/stdin" : "./y22/BaekJoon/input.txt";

const input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((el) => Number(el));

/**
 * 정렬된 배열
 */
const new_array = [...input];
new_array.sort((a, b) => a - b);

/** @function isLargeNumber - 정렬된 배열에서 최대값이 주어진 배열에서의 몇번째 index에 있는지 판별하는 함수
 * @param {number} el - input 배열에 값
 * @returns {index}
 */
const isLargeNumber = (el) => el === new_array[input.length - 1];

console.log(new_array[input.length - 1]);
console.log(input.findIndex(isLargeNumber) + 1);
