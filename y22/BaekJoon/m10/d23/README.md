# 2022-10-23

## (프로그래머스) 짝수와 홀수

[짝수와 홀수](https://school.programmers.co.kr/learn/courses/30/lessons/12937)

## (프로그래머스) 이진 변환 반복하기

[이진 변환 반복하기](https://school.programmers.co.kr/learn/courses/30/lessons/70129)

1. x의 모든 0을 제거하기
2. 제거한 길이의 개수를 이진 변화 값으로 표현
3. 이진 변환 값이 1이 될 때까지 반복

1번을 해결하려면 문자열을 잘라서 filter()로 0인 것을 걸러주면 어떨까? 성공
`let str = s.split("").filter((v) => +v === 1).join("");`

2번은 반복문을 돌려서 개수를 2로 나눴을 때 몫이 0이 될때까지 돌리고 나머지를 arr 배열에 넣어준다.

```js
let arr = [];
let len = str.length;
while (len !== 0) {
  arr.push(len % 2);
  len = parseInt(len / 2);
}
```
