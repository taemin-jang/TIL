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

## 3052번 나머지

조금 헤맨 문제이다.

내가 생각한 것은 인덱스 i번째 값과 인덱스 j번째 값을 비교하여 같으면 카운트를 세고  
비교한 값의 인덱스가 i과 j인데 같으면 j의 인덱스를 sameNumber로 넣어준다.

그러고 sameNumber에 i가 있다면 다음 인덱스로 넘기는 것이다.

이렇게 하면 중복된 값을 피할 수 있다.

카운트 값을 나머지의 개수에서 빼면 같지 않은 값들만 남는다.

## 1546번 평균

입력값에 첫 번째 줄은 과목 개수 두 번째 줄은 성적 이렇게 주어지면

3과목이다 하면 성적도 3개이여야 한다.

하지만 이전까지는 3과목이면 3개의 성적만 넣어야 한다는 조건을 안걸어줘도 코드 실행에는 문제가 없었다.

그렇다고 계속 이렇게 풀 수는 없어서 filter()를 사용해보기로 했다.

이전에도 array.filter()를 사용했지만 3개면 3개만 입력받도록 하는 조건식으로 사용한 적은 없었다.

filter()에는 index 값으로 자를 수 있는 방법이 있다.

### filter() 사용 에시

```js
/*
array.filter(function(value, index, array))
value : 현재 순회 중인 배열 요소
index : 현재 순회 중인 배열 요소의 index 값 (0부터 시작)
array : 배열 객체
*/
array.filter(function(value, index) => index < '자르고 싶은 개수')
```

저렇게 사용하면 이제 받고싶은 입력값의 수를 넘겨 받아도 알아서 필터에서 잘라주게 된다.

그러면 이제 받고싶은 입력값의 수보다 못받게 되면 어떻게 해야할지 생각해봐야 할 것 같다.
