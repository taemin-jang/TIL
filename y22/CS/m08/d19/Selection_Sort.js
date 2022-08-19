function selectionSort(arr) {
  let indexMin, temp;
  for (let i = 0; i < arr.length - 1; i++) {
    indexMin = i;
    // 1.
    for (let j = i + 1; j < arr.length; j++) {
      // 2.
      if (arr[j] < arr[indexMin]) {
        // 3.
        indexMin = j;
      }
    }
    // 4. swap(arr[indexMin], arr[i])
    temp = arr[indexMin];
    arr[indexMin] = arr[i];
    arr[i] = temp;
  }
}

let arr1 = [5, 4, 3, 2, 1];
selectionSort(arr1);

console.log(arr1);
