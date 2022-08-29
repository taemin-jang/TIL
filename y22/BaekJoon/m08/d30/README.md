# 2022-08-30

## 2562번 최댓값

배열의 인덱스 값을 찾기 위해 자바스크립트 내장 메소드인 array.findIndex()를 사용했다.

array.findIndex()는 주어진 `판별 함수를 만족하는` 배열의 첫 번째 요소에 대한 인덱스를 반환한다. 없으면 -1을 반환한다.

여기서 판별 함수가 중요하다.

### findIndex() 사용 예

```js
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// expected output: 3
```

여기서 isLargeNumber는 13보다 큰 값을 찾는 함수이다.

array1.findIndex(isLargeNumber)를 하면 array1 중에서 13보다 큰 값의 첫 번째 요소에 대한 인덱스를 반환해준다.

따라서 13보다 큰 첫 번째 요소는 130이므로 3이 반환되는 것이다.
