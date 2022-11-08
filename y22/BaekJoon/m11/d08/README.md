# 2022-11-08

## 7. (프로그래머스) 분수의 덧셈 \*

[분수의 덧셈](https://school.programmers.co.kr/learn/courses/30/lessons/120808#qna)

기약분수를 구할 때 분모와 분자에 최소 공배수로 나눠줘야 한다.

## 8. (프로그래머스) 배열 두 배 만들기

[배열 두 배 만들기](https://school.programmers.co.kr/learn/courses/30/lessons/120809)

map()을 사용하여 풀었다.

## 9. (프로그래머스) 나머지 구하기

[나머지 구하기](https://school.programmers.co.kr/learn/courses/30/lessons/120810)

## 10. (프로그래머스) 중앙값 구하기

[중앙값 구하기](https://school.programmers.co.kr/learn/courses/30/lessons/120811)

## 11. (프로그래머스) 최빈값 구하기 \*

[최빈값 구하기](https://school.programmers.co.kr/learn/courses/30/lessons/120812#)

값이 0부터 시작함으로 최빈값이 0일 때 찾는 것이 좀 오래 걸렸다.

`let cnt = Array(array.sort((a,b) => a-b)[array.length - 1] + 1).fill(0)` + 1을 해준 이유는 0까지 포함하기 위해서이다.

```js
if (cnt.filter((a) => a === max).length === 1) {
  cnt.map((v, i) => {
    if (v === max) {
      return (answer = i);
    }
  });
}
```

if문 조건식은 cnt의 최빈값이 1개일 경우이다.

그리고 cnt.map을 사용한 이유는 최빈값인 인덱스 값을 얻기 위해서이다.

예를 들면 cnt = [0, 4, 1, 2] 이면 1이 최빈값이 되므로 4의 인덱스 값은 1이 된다.

이 2가지만 유의하면 될 것 같다... 오랜만에 풀어서 그런지 시간을 오래 잡아먹었다.
