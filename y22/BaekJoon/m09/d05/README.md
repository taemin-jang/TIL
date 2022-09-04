# 2022-09-05

## 2675번 문자열 반복

이번 문제는 어렵지 않게 풀은 것 같다.

우선 `const input = require("fs").readFileSync(file).toString().trim().split("\n")`을 개행문자인 줄바꿈으로 받았다.

`input.forEach(v, i)`으로 돌려서 i가 1 이상일 경우, 즉 2번째 줄부터 가져온다는 것이다.

`let num = v.split(" ")`를 함으로써 num에는 반복 횟수와, 문자열이 담긴다.

`let str = num[1].trim().split("")` str에는 문자열이 담긴 num[1]을 각 자리마다 잘라서 넣어주었다.

```js
str.forEach((v, i) => {
  for (let j = 0; j < num[0]; j++) {
    answer += v;
  }
});
answer += "\n";
```

테스트 케이스 반복 횟수가 담긴 num[0]만큼 for문을 돌려서 반복 횟수 만큼 각 문자를 answer에 넣어준다.

그리고 for문이 끝나면 줄바꿈을 해주고 마지막에 출력해주면 끝이다.
