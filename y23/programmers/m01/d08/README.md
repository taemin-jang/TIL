# 2023-01-08

## 99. (lv0) 연속된 수의 합 Time : 15m

```js
function solution(num, total) {
  let startNum =
    Math.floor(total / num) -
    (num % 2 === 0 ? num / 2 - 1 : Math.floor(num / 2));
  let answer = [];
  for (let i = 1; i <= num; i++) {
    answer.push(startNum);
    startNum++;
  }
  return answer;
}
```

어제는 제대로 집중할 수 있던 상황이 아니였던 것 같다.

우선 접근은 시작하는 숫자만 정해지면 나머지는 반복문을 돌리면 되므로 시작하는 숫자만 정하면 됐다.

그래서 규칙이 있나 생각해보다가, 예를 들어 num = 3, total = 12 일 때, `Math.floor(total / num)`을 해주면 중앙값인 4가 나온다. 그러면 num이 홀수 이므로 시작 값은 `Math.floor(total / num) - Math.floor(num / 2)`를 해주면 된다.

그렇다면 num이 짝수 인 경우 num = 4, total = 14 일 때, `Math.floor(total / num)`해주면 3이 나오지만 짝수라 중앙값은 아니지만 이 값을 기준으로 왼쪽이 오른쪽보다 항상 1개가 적었다. result 값이 [2, 3, 4, 5]인데 3을 기준으로 보면 왼쪽은 [2], 오른쪽은 [4, 5]이다. 따라서 num / 2 - 1 을 해주면 되므로 `Math.floor(total / num) - (num / 2 - 1)` 시작 값을 알 수 있다.

이것을 하나로 합치면 `Math.floor(total/num) - (num % 2 === 0 ? (num / 2 - 1) : Math.floor(num / 2))`가 된다.

그러고 for문을 돌려 answer 배열안에 넣어주고 answer을 리턴해주면 된다.
