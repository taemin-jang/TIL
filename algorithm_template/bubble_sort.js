// bubble sort
// O(N^2)

function bubbleSort(arr) {
  // 마지막부터 정렬이 되므로 끝에서부터 줄어듦
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      // 현재 값과 다음 값을 비교해서 크면
      if (arr[j] > arr[j + 1]) {
        // swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([9, 8, 2, 4, 3]));
