function bubbleSort(arr) {
  let temp = 0;
  for (let i = 0; i < arr.length; i++) {
    // 1.
    for (let j = 1; j < arr.length - i; j++) {
      // 2.
      if (arr[j - 1] > arr[j]) {
        // 3.
        // swap(arr[j-1], arr[j])
        temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
}

let arr1 = [5, 4, 3, 2, 1];
bubbleSort(arr1);

console.log(arr1);
