/** @function getDigit - 숫자 num의 i번째 (1의 자리는 0부터) 자릿수의 수를 반환
 * @param {number} num - 정렬할 숫자
 * @param {number} i - 자릿수를 의미
 * @returns {console.log(getDigit(1234,3)) // 1}
 */
function getDigit(num, i) {
  return Math.floor((Math.abs(num) / Math.pow(10, i)) % 10);
}
// 예시
// getDigit(12345, 0); // 5
// getDigit(12345, 1); // 4
// getDigit(12345, 2); // 3
// getDigit(12345, 3); // 2
// getDigit(12345, 4); // 1
// getDigit(12345, 5); // 0

/** @function digitCount - 최대 자릿수를 반환
 *
 * @param {number} num
 * @returns {console.log(digitCount(314)) // 3}
 */
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
  // return num.toString().length;
}
// 예시
// digitCount(1); // 1
// digitCount(25); // 2
// digitCount(314); // 3

/** @function mostDigits - 숫자들의 배열을 입력하면 그 중 자릿수가 가장 큰 수의 자릿수를 반환
 *
 * @param {*} nums
 * @returns {console.log(mostDigits([1234, 56, 7])) // 4}
 */
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}
// 예시
// mostDigits([1234, 56, 7]); // 4
// mostDigits([1, 1, 11111, 1]); // 5
// mostDigits([12, 34, 56, 78]); // 2

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));
// [ 12, 23, 345, 2345, 5467, 9852 ]
