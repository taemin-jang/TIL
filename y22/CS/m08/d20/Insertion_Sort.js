function insertionSort(arr) {
  for (let index = 1; index < arr.length; index++) {
    let temp = arr[index];
    let prev = index - 1;
    while (prev >= 0 && arr[prev] > temp) {
      arr[prev + 1] = arr[prev];
      prev--;
    }
    arr[prev + 1] = temp;
  }
}

let arr1 = [5, 4, 3, 2, 1];
insertionSort(arr1);

console.log(arr1);
