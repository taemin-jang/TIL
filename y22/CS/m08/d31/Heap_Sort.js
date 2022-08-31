let arr = [7, 6, 8, 9, 10, 1];

arr = heapSort(arr);
console.log(arr);

function heapSort(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    arr = heapify(arr, i);

    if (arr[0] > arr[i]) {
      let temp = arr[i];
      arr[i] = arr[0];
      arr[0] = temp;
    }
  }
  return arr;
}

function heapify(arr, lastIdx) {
  let idx = parseInt(lastIdx / 2) - 1;

  while (idx >= 0) {
    const left = arr[idx * 2 + 1];
    const right = arr[idx * 2 + 2];

    if (left >= right && arr[idx] < left) {
      temp = arr[idx];
      arr[idx * 2 + 1] = temp;
      arr[idx] = left;
    } else if (right > left && arr[idx] < right) {
      temp = arr[idx];
      arr[idx * 2 + 2] = temp;
      arr[idx] = right;
    }
    idx--;
  }
  return arr;
}
