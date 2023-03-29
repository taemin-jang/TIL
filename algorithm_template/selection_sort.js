// selection sort
// O(N^2)

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // 제일 작은 인덱스부터 시작
    let minIndex = i;
    // 다음 인덱스
    for (let j = i + 1; j < arr.length; j++) {
      // 만약 minIndex의 값이 다음 인덱스 값보다 크다면
      if (arr[minIndex] > arr[j]) {
        // minIndex에 다음 인덱스가 됨
        minIndex = j;
      }
    }
    // 현재 인덱스와 minIndex의 위치 swap
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}

console.log(selectionSort([2, 4, 3, 1, 9, 6, 8, 7, 5]));
