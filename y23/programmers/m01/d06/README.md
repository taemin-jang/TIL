# 2023-01-06

## 97. (lv0) 문자열 밀기 Time : 5m

[문자열 밀기](https://school.programmers.co.kr/learn/courses/30/lessons/120921)

```js
function solution(A, B) {
  let answer = [...A];
  let cnt = null;
  for (let i = 0; i < B.length; i++) {
    if (answer.join("") !== B) {
      answer.unshift(answer.pop());
    } else {
      cnt = i;
      break;
    }
  }
  return cnt === null ? -1 : cnt;
}
```

A를 answer 배열에 담고, 만약 answer와 B의 값이 같지 않다면 answer.pop()으로 맨 마지막 값을 빼고 그 값을 answer.unshift()를 사용하여 맨 앞에 넣어줬다.

만약 아니면 cnt = i로 반복한 횟수를 cnt에 넣어주고 break를 해서 반복문을 끝낸다.

그러고 cnt === null이면 없다는 의미로 -1을 리턴하고, 아니면 cnt 값을 리턴한다.

다른 사람풀이를 봤는데 놀라운 풀이를 봤다.

`let solution=(a,b)=>(b+b).indexOf(a)` 이 풀이를 해보면 B의 문자열을 연속해서 연결했을 때 A의 값이 있는 부분의 index값을 리턴하는 것이다.

이것을 보고 진짜 다양한 풀이가 많구나라고 느꼈고, 그렇게 생각하도록 노력해야겠다.
