# 2022-09-01

## 4673번 셀프 넘버

하루종일 생각을 해도 풀리지가 않았다.

풀것 같았지만 메모리가 많이 잡아먹어서 좋은 풀이도 아니었다.

그래도 어떻게든 풀어보려했지만 풀지 못하고 구글에 도움을 요청했다.

엄청난 풀이법을 발견했다...

단 11줄로 풀었는데 진짜 잘 짠 코드인거 같아서 소개하려고 한다.

```js
// 0~10000까지 false로 채운다.
let arr = Array(10001).fill(false);
let n = 1;
// 1부터 9999까지 입력한다
while (n < 10000) {
  // 생성자 숫자를 배열인덱스에 넣고 그 값을 true로 바꿔준다
  arr[n + (n + "").split("").reduce((a, c) => a + +c, 0)] = true;
  n++;
}
let r = [];
// false인 값을 배열 r에 넣어준다
arr.forEach((v, i) => {
  if (!v) r.push(i);
});
console.log(r.slice(1).join("\n"));
```

위에 주석처리는 내가 코드를 읽으면서 써본 것이다.

우선 arr이라는 배열을 선언하고, 0~10000까지 fill()를 사용하여 false 값으로 채워준다.

그리고 while 문으로 1~9999까지의 값을 돌려준다.

생성자를 배열 인덱스 값으로 바로 넣어 그 값을 true로 바꿔준다.

`arr[n + (n + "").split("").reduce((a, c) => a + +c, 0)] = true;` 이코드가 진짜 핵심이라고 보면된다.

여기서 얘기하고 싶은 것은 `(n + "").split("")`을 사용하여 각 숫자를 한자리씩 잘라서 배열에 넣어줬다는 것과 `reduce((a, c) => a + +c, 0)`에서 reduce()를 사용해서 각 자리의 합을 처리해줬다.

근데 여기서 또 의문이 들었던 것은 `a + +c`를 이해를 못했었다.

아래 단항 연산자 설명을 참고하기 바란다.

이어서 얘기 해보면 reduce의 파라미터인 `a`는 initialValue값이 존재하므로 0이고, `c`는 currentValue로써 `(n + "").split("")`의 배열 값에 해당한다. 배열 값은 지금 String이라서 `a + c`만 할 경우 문자열로 나오게 된다.

따라서 `a + +c`는 문자열인 c를 숫자로 변환해주고 각 자리의 합을 구해 배열 인덱스 값으로 넣어주고 `true` 값을 저장해준다.

그리고 그렇게 나온 arr값을 `if (!v) r.push(i)` v값이 true 값이 아니라면 즉, false 값이라면 r이라는 배열에 해당 인덱스 값인 i를 넣어주는 조건식으로 forEach문을 돌려준다.

마지막으로 `console.log(r.slice(1).join("\n"))`은 arr[0]은 false가 있다. 그래서 r[0]=0 있어서 `r.slice(1)`은 그 0을 잘라준다.

그리고 `join("\n")`을 통해 각 배열에 개행문자를 넣어줌으로써 줄바꿈 처리를 해주고 문자열로 변환 시켜서 출력을 해줬다.

11줄이라는 코드에 엄청난 알고리즘이 들어있는 것을 보고 이게 진짜 잘 짜는 코드구나 라고 생각이 들었다.

### reduce() 예시

reduce()는 빈 요소를 제외하고 배열 내에 존재하는 각 요소에 대해 callback 함수를 한번씩 실행하는데, 콜백 함수는 4개의 인수를 받는다

reduce(function(accumulator, currentValue, CurrentIndex, array) => {}, initialValue)

- accumulator
- currentValue
- CurrentIndex
- array

* initialValue

콜백의 최초 호출 때 `accumulator`와 `currentValue` 두 가지 중 하나를 가질 수 있다. 만약 reduce() 함수 호출에서 `initialValue`를 제공한 경우, `accumulator`는 `initialValue`와 같고 `currentValue`는 배열의 첫 번째 값과 같다. `initialValue`를 제공하지 않았다면, `accumulator`는 배열의 첫번째 값과 같고, `currentValue`는 두 번째 값과 같다.

```js
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial);
// expected output: 10
```

### 우선 단항 더하기(+)란?

피연산자 앞에 위치하며 피연산자를 평가하지만, 피연산자가 숫자가 아니라면 숫자로 변환해준다.

### 예시

```js
const x = 10;
const y = -1;

console.log(+x);
// expected output: 10

console.log(+y);
// expected output: -1

console.log(+"");
// expected output: 0

console.log(+true);
// expected output: 1

console.log(+false);
// expected output: 0

console.log(+"hello");
// expected output: NaN
```
