# 2023-01-03

## 89. (프로그래머스) 특이한 정렬

[특이한 정렬](https://school.programmers.co.kr/learn/courses/30/lessons/120880)

```js
function solution(numlist, n) {
  var answer = [];
  numlist = numlist.map((v, i) => {
    return { diff: Math.abs(n - v), value: v };
  });
  numlist.sort((a, b) => {
    if (a.diff > b.diff) {
      return 1;
    }
    if (a.diff < b.diff) {
      return -1;
    }
    if (a.diff === b.diff) {
      if (a.value < b.value) {
        return 1;
      }
      if (a.value > b.value) {
        return -1;
      }
    }
  });
  numlist.forEach((v) => {
    answer.push(v.value);
  });
  return answer;
}
```

mdn에서 sort에 대해 봤는데 평소에 하던 오름차순 a-b 이런식이 아니라

직접 값을 비교해서 정렬을 해줄 수 있었다.

그래서 map()을 사용해서 numlist안에 diff라는 key값을 만들고 값에는 `Math.abs(n - v)` 주어진 n의 값과 numlist의 값의 차이를 넣어주었다.

그래서 이 diff의 값을 비교하여 diff을 오름차순으로 해주었다. (diff가 더 작은 값이 -1)

만약 diff값이 같다면 value 값이 큰 것이 먼저 오도록 -1 을 리턴해주었다.

마지막으로 numlist를 forEach문으로 돌려서 v.value 값을 answer에 넣어주고 리턴하면 끝이다.

이번 기회에 sort()에 대해 좀 더 자세히 알 수 있었다.

다른 분들 풀이를 보니까 `return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);` 이렇게 한번에 할 수도 있다.

|| b - a를 해준 이유는 직접 해보니까 만약 안해줬을 때 값의 차이가 같을 경우 오름차순으로 정렬이 된다.

그래서 b - a를 해줌으로써 내림차순으로 정렬해준 것이다.
