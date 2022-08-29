# 2022-08-29

## Q10818번 최소, 최대

javascript의 내장 메소드인 sort를 이용해봤다.  
sort()는 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환한다.

`주의할 점`은 array.sort()를 하면 우리가 생각하던 정렬로 되지 않는다는 것이다.

```js
const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]
```

이렇게 되는 이유는 유니코드 순서에 따라 정렬이 되기 때문이다.

따라서 우리는 sort()안에 파라미터를 활용해야한다.

### sort() 사용 예

- 오름차순 정렬

```js
const arr = [2, 1, 3, 10];

arr.sort(function (a, b) {
  if (a > b) return 1;
  if (a === b) return 0;
  if (a < b) return -1;
});
console.log(arr); // [1,2,3,10]
```

또 다른 오름차순 정렬 방식

```js
const arr = [2, 1, 3, 10];

arr.sort((a, b) => a - b);
console.log(arr); // [1,2,3,10]
```

- 내림차순 정렬

```js
const arr = [2, 1, 3, 10];

arr.sort((a, b) => b - a);
console.log(arr); // [10,3,2,1]
```
