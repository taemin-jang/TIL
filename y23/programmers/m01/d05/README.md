# 2023-01-05

## 93. (lv0) 이진수 더하기 Time : 5h

[이진수 더하기](https://school.programmers.co.kr/learn/courses/30/lessons/120885)

### 자바스크립트 진수 변환 방법

- 2진수 변환 (2진수 -> 10진수)
  `parseInt('이진수', 2)`

- 16진수 변환 (16진수 -> 10진수)
  `parseInt('16진수', 16)`

- 16진수 변환 (16진수 -> 2진수)
  `parseInt('16진수', 16).toString(2)`

- 10진수 변환 (10진수 -> 2진수)
  `(10진수).toString(2)`

- 10진수 변환 (10진수 -> 16진수)
  `(10진수).toString(16)`

## 94. (lv0) A로 B 만들기 Time : 10h

[A로 B 만들기](https://school.programmers.co.kr/learn/courses/30/lessons/120886)

```js
function solution(before, after) {
  let arr = [...after];
  before.split("").forEach((v) => {
    if (arr.includes(v)) {
      arr.splice(arr.indexOf(v), 1);
    }
  });
  return arr.length === 0 ? 1 : 0;
}
```

after는 arr에 배열로 저장하고, before도 배열로 만들어서 arr와 비교 후 있으면 arr에 그 값을 빼준다.

그래서 arr의 길이가 0이면 1을 리턴하고, 길이가 0이 아니면 0을 리턴한다.
