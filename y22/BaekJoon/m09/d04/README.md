# 2022-09-04

## 11720번 숫자의 합

이 부분이 핵심이다.

```js
let num = input[1]
  .split("")
  .map((el) => +el)
  .filter((v, i) => i < input[0]);
```

입력 받은 숫자 `input[1]`은 현재 문자열이고, `split("")`으로 각 자리수마다 끊어서 배열에 담아줬다.

그리고 `map((el) => +el)` map()을 이용해서 각 배열을 +(단항 더하기)를 활용하여 정수로 변환해주었다.

`filter((v, i) => i < input[0])` filter()를 이용하여 `input[0]`개 만큼 끊어주었다.

그러고 이제 forEach문으로 돌려서 합을 구했다.
