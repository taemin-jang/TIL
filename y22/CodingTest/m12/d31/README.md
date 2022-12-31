# 2022-12-30

## 85. (프로그래머스) 저주의 숫자 3

[저주의 숫자 3](https://school.programmers.co.kr/learn/courses/30/lessons/120871)

```js
function solution(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 || /['3']/.test(i.toString())) {
      n++;
    }
  }
  return n;
}
```

간단하게 생각해보면 3의 배수, 3이 포함된 숫자가 나오면 +1을 해주면된다.

그래서 for문을 1부터 n까지 돌리고, 만약 3의 배수나 3이 포함된 숫자가 나오면 n++을 해주었다.

예를 들어 n = 15라면 3의 배수가 나오면 하나씩 늘어나므로 16, 17, 18... 25까지 돌리게되고 for문이 다 돌고 n을 리턴하면 끝이다.
