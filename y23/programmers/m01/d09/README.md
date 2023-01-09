# 2023-01-09

## 100. (lv0) 다음에 올 숫자 Time : 3m

[다음에 올 숫자](https://school.programmers.co.kr/learn/courses/30/lessons/120924)

```js
function solution(common) {
  if (common[1] / common[0] === common[2] / common[1]) {
    // 등비수열
    let r = common[1] / common[0];
    return common[common.length - 1] * r;
  } else {
    // 등차수열
    let d = common[1] - common[0];
    return common[0] + common.length * d;
  }
}
```

이제야 lv0 100문제를 다 풀었다.

lv0이라 쉬울 줄만 알았지만 중간중간 막히는 부부분이 종종 있어서 당황했었다.

사실 지금까지 푼 문제는 기본 문법을 익히기 위한 용도였던 것 같다.

이제 알고리즘과 자료구조를 공부하면서 lv1, lv2 문제들을 풀어봐야겠다.
