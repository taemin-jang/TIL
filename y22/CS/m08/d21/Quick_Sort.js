function quickSort(arr, left, right) {
  if (left >= right) return;

  // 분할
  let pivot = partition(arr, left, right);

  // 피벗은 제외한 2개의 부분 배열을 대상으로 순환 호출
  quickSort(arr, left, pivot - 1); // 정복
  quickSort(arr, pivot - 1, right); // 정복
}

function partition(arr, left, right) {
  const pivot = arr[right]; // 가장 오른쪽 값을 피벗으로 설정
  let pivotIndex = left;

  for (let i = left; i < right; i++) {
    if (arr[i] < pivot) {
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
      pivotIndex++;
    }
  }
  [arr[pivotIndex], arr[right]] = [arr[right], arr[pivotIndex]];
  return pivotIndex;
}

array = [7, -2, 4, 1, 6, 5, 0, -4, 2];
quickSort(array, 0, array.length - 1);

console.log(array);
