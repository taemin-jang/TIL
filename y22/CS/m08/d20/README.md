# 삽입 정렬(Insertion Sort)

## 목표

- Insertion Sort에 대해 설명할 수 있다.
- Insertion Sort 과정에 대해 설명할 수 있다.
- Insertion Sort를 구현할 수 있다.
- Insertion Sort의 시간복잡도와 공간복잡도를 계산할 수 있다.

## Abstract

Insertion Sort는 Selection Sort와 유사하지만, 좀 더 효율적인 정렬 알고리즘이다.

Insertion Sort는 **2번째 원소부터 시작하여 그 앞(왼쪽)의 원소들과 비교하여 삽입할 위치를 지정한 후, 원소를 뒤로 옮기고 지정된 자리에 자료를 삽입** 하여 정렬하는 알고리즘이다.

최선의 경우 O(n)이라는 엄청나게 빠른 효율성을 가지고 있어, 다른 정렬 알고리즘의 일부로 사용될 만큼 좋은 정렬 알고리즘이다.

## Process (Ascending)

1. 정렬은 2번째 위치(index)의 값을 temp에 저장한다.
2. temp와 이전에 있는 원소들과 비교하며 삽입해 나간다.
3. ‘1’번으로 돌아가 다음 위치(index)의 값을 temp에 저장하고, 반복한다.

## Java Code

```java
void insertionSort(int[] arr)
{
   for(int index = 1 ; index < arr.length ; index++){ // 1.
      int temp = arr[index];
      int prev = index - 1;
      while( (prev >= 0) && (arr[prev] > temp) ) {    // 2.
         arr[prev+1] = arr[prev];
         prev--;
      }
      arr[prev + 1] = temp;                           // 3.
   }
   System.out.println(Arrays.toString(arr));
}
```

## JavaScript Code

```jsx
function insertionSort(arr) {
  for (let index = 1; index < arr.length; index++) {
    // 1.
    let temp = arr[index];
    let prev = index - 1;
    while (prev >= 0 && arr[prev] > temp) {
      // 2.
      arr[prev + 1] = arr[prev];
      prev--;
    }
    arr[prev + 1] = temp; // 3.
  }
}

let arr1 = [5, 4, 3, 2, 1];
insertionSort(arr1);

console.log(arr1);
```

1. 첫 번째 원소 앞(왼쪽)에는 어떤 원소도 갖고 있지 않기 때문에, 두 번째 위치(index)부터 탐색을 시작한다. temp에 임시로 해당 위치 값을 저장하고, prev에는 해당 위치의 이전 위치를 저장한다.
2. 이전 위치를 가리키는 prev가 음수가 되지 않고, 이전 위치의 값이 ‘1’번에서 선택한 값보다 크다면, 서로 값을 교환해주고 prev를 더 이전 위치를 가리키도록한다.
3. ‘2’번에서 반복문이 끝나고 난 뒤, prev에는 현재 **temp 값보다 작은 값들 중 제일 큰 값의 위치**를 가리키게 된다. 따라서 (prev + 1)에 temp 값을 삽입해준다.

## GIF로 이해하는 Selection Sort

![https://github.com/GimunLee/tech-refrigerator/blob/master/Algorithm/resources/insertion-sort-001.gif?raw=true](https://github.com/GimunLee/tech-refrigerator/blob/master/Algorithm/resources/insertion-sort-001.gif?raw=true)

## 시간복잡도

최악의 경우(역으로 정렬되어 있을 경우) Selection Sort와 마찬가지로, O(n^2)이다.

하지만 모두 정렬이 되어 있을 경우 한 번씩 밖에 비교를 안하므로 O(n)의 시간복잡도를 가지게 된다.

또한 이미 정렬되어 있는 배열에 자료를 하나씩 삽입/제거하는 경우, 현실적으로 최고의 정렬 알고리즘이 되는데, 탐색을 제외한 오버헤드가 매우 적기 때문이다.

최선의 경우 O(n)의 시간 복잡도를 갖고, 평균과 최악의 경우 O(n^2)의 시간 복잡도를 갖는다.

## 공간복잡도

주어진 배열 안에서 교환(swap)을 통해, 정렬이 수행되므로 O(n)이다.

## 장점

- 알고리즘이 단순하다.
- 대부분의 원소가 이미 정렬되어 있을 경우, 매우 효율적일 수 있다.
- 정렬하고자 하는 배열 안에서 교환하는 방식이므로, 다른 메모리 공간을 필요로 하지 않는다. ⇒ 제자리 정렬(in place sorting)
- 안정 정렬(stable sort)이다.
- Selection Sort나 Bubble Sort와 같은 O(n^2) 알고리즘에 비교하여 상대적으로 빠르다

## 단점

- 시간복잡도가 최악, 최선, 평균 모두 O(n^2)로, 굉장히 비효율적이다
- Bubble Sort와 Selection Sort와 마찬가지로, 배열의 길이가 길어질수록 비효율적이다.

## Conclusion

Selection Sort와 Insertion Sort는 k번째 반복 이후, 첫번째 k 요소가 정렬된 순소로 온다는 점에서 유사하다.

하지만, Selection Sort는 k + 1번째 요소를 찾기 위해 나머지 모든 요소들을 탐색하지만 Insertion Sort는 k + 1 번째 요소를 배치하는 데

필요한 만큼의 요소만 탐색하기 대문에 훨씬 효율적으로 실행된다는 차이가 있다.