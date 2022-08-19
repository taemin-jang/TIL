# 선택 정렬(Selection Sort)

## 목표

- Selection Sort에 대해 설명할 수 있다.
- Selection Sort 과정에 대해 설명할 수 있다.
- Selection Sort를 구현할 수 있다.
- Selection Sort의 시간복잡도와 공간복잡도를 계산할 수 있다.

## Abstract

Selection Sort는 Bubble Sort(거품 정렬)와 유사한 알고리즘으로, **해당 순서에 원소를 넣을 위치는 이미 정해져 있고, 어떤 원소를 넣을지 선택하는 알고리즘**이다.

Selection Sort와 Insertion Sort(삽입 정렬)를 헷갈려하는 사람들이 종종 있는데, Selection Sort는 배열에서 **해당 자리를 선택하고 그 자리에 오는 값을 찾는 것**이라고 생각하면 편하다.

## Process (Ascending)

1. 주어진 배열 중에 최소값을 찾는다.
2. 그 값을 맨 앞에 위치한 값과 교체한다. (pass)
3. 맨 처음 위치를 뺀 나머지 배열을 같은 방법으로 교체한다.

## Java Code

```java
void selectionSort(int[] arr) {
    int indexMin, temp;
    for (int i = 0; i < arr.length-1; i++) {        // 1.
        indexMin = i;
        for (int j = i + 1; j < arr.length; j++) {  // 2.
            if (arr[j] < arr[indexMin]) {           // 3.
                indexMin = j;
            }
        }
        // 4. swap(arr[indexMin], arr[i])
        temp = arr[indexMin];
        arr[indexMin] = arr[i];
        arr[i] = temp;
  }
  System.out.println(Arrays.toString(arr));
}
```

## JavaScript Code

```jsx
function selectionSort(arr) {
  let indexMin, temp;
  for (let i = 0; i < arr.length - 1; i++) {
    // 1.
    indexMin = i;
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
```

1. 위치(index)를 선택해준다. 오름차순이므로 0번 인덱스부터이다.
2. i + 1번째 원소부터 선택한 위치(index)의 값과 비교를 시작한다.
3. 오름차순이므로 현재 선택한 자리에 있는 값보다 순회하고 있는 값이 작다면, 위치(index)를 갱신해준다.
4. ‘2’번 반복분이 끝난 뒤에는 indexMin에 작은 값의 위치가 ‘1’번에서 선택한 위치에 들어가야하는 값의 위치를 갖고 있으므로 서로 교환(swap)해준다.

## GIF로 이해하는 Selection Sort

![https://github.com/GimunLee/tech-refrigerator/blob/master/Algorithm/resources/selection-sort-001.gif?raw=true](https://github.com/GimunLee/tech-refrigerator/blob/master/Algorithm/resources/selection-sort-001.gif?raw=true)

## 시간복잡도

데이터의 개수가 n개라고 했을 때,

- 첫 번째 회전에서의 비교횟수 : 1 ~ (n-1) ⇒ n-1
- 두 번째 회전에서의 비교횟수 : 2 ~ (n-1) ⇒ n-2
  …
- `(n-1) + (n-2) + ... + 2 + 1 => n(n-1)/2`

비교하는 것이 상수 시간에 이루어진다는 가정 아래, n개의 주어진 배열을 정렬하는데 O(n^2) 만큼의 시간이 걸린다.

최선, 평균, 최악의 경우 시간복잡도는 O(n^2)로 동일하다.

## 공간복잡도

주어진 배열 안에서 교환(swap)을 통해, 정렬이 수행되므로 O(n)이다.

## 장점

- Bubble Sort와 마찬가지로 알고리즘이 단순하다.
- 정렬을 위한 비교 횟수는 많지만, Bubble Sort에 비해 실제로 교환하는 횟수는 적기 때문에 많은 교환이 일어나야 하는 자료상태에서 비교적 효율적이다.
- Bubble Sort와 마찬가지로 정렬하고자 하는 배열 안에서 교환하는 방식이므로, 다른 메모리 공간을 필요로 하지 않는다. ⇒ 제자리 정렬 (in-place-sorting)

## 단점

- 시간복잡도가 최악, 최선, 평균 모두 O(n^2)로, 굉장히 비효율적이다
- **불안정 정렬(Unstable Sort)**이다.

## Conclusion

Bubble Sort와 유사하지만, 조금 더 빠른 Selection Sort에 대해 알아봤다.

기술 면접이나 시험(n번째 회전에 정렬 상태)에서도 종종 나오는 정렬이리 알아두자!
