// insertion sort
// O(N^2)

function insertionSort(arr) {
  // 첫번째 인덱스 값은 정렬된 셈 치고 다음 인덱스부터 시작
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      // 만약 이전 값이 현재보다 크다면
      if (arr[j - 1] > arr[j]) {
        // swap
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      } else {
        // 만약 이전 값이 현재 보다 작으면 stop
        break;
      }
    }
  }
  return arr;
}

console.log(insertionSort([2, 4, 3, 1, 9, 6, 8, 7, 5]));
