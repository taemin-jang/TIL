# 병합 정렬(Merge Sort)

합병 정렬이라고도 부르며, 분할 정복 방법을 통해 구현

빠른 정렬로 분류되며, 퀵 정렬과 함께 많이 언급되는 정렬 방식이다.

퀵 정렬과는 반대로 `안정 정렬`에 속한다.

## 시간복잡도

| 평균     | 최선     | 최악     |
| -------- | -------- | -------- |
| Θ(nlogn) | Ω(nlogn) | O(nlogn) |

요소를 쪼갠 후, 다시 합병시키면서 정렬해나가는 방식으로, 쪼개는 방식은 퀵 정렬과 유사하다.

- mergeSort()
  ```jsx
  function mergeSort(array) {
    if (array.length < 2) {
      return array;
    }
    let pivot = Math.floor(array.length / 2);
    let left = array.slice(0, pivot);
    let right = array.slice(pivot, array.length);
    return merge(mergeSort(left), mergeSort(right));
  }
  ```
  정렬 로직에서 merge() 메소드가 핵심이다.

> 퀵 정렬과 차이점

퀵 정렬 : 피벗을 통해 정렬 → 영역을 쪼갬
병합 정렬 : 영역을 쪼갤 수 있는 만큼 쪼갬 → 정렬

>

- merge()
  ```jsx
  function merge(left, right) {
    let result = [];
    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    while (left.length) {
      result.push(left.shift());
    }
    while (right.length) {
      result.push(right.shift());
    }
    return result;
  }
  ```
  합병의 대상이 되는 두 영역이 각 영역에 대해서 정렬이 되어 있기 때문에 단순히 두 배열을 순차적으로 비교하면서 정렬할 수 있다.
    <aside>
    💡 병합 정렬은 순차적인 비교로 정렬을 진행하므로, LinkedList의 정렬이 필요할 때 사용하면 효율적!
    
    </aside>

- 전체 코드
  ```jsx
  function mergeSort(array) {
    if (array.length < 2) {
      return array;
    }
    let pivot = Math.floor(array.length / 2);
    let left = array.slice(0, pivot);
    let right = array.slice(pivot, array.length);
    return merge(mergeSort(left), mergeSort(right));
  }

  function merge(left, right) {
    let result = [];
    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    while (left.length) {
      result.push(left.shift());
    }
    while (right.length) {
      result.push(right.shift());
    }
    return result;
  }

  let array = [230, 10, 60, 550, 40, 220, 20];
  console.log(mergeSort(array));
  ```
