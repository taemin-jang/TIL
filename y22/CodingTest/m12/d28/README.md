# 2022-12-28

## 73. (프로그래머스) 7의 개수

[7의 개수](https://school.programmers.co.kr/learn/courses/30/lessons/120912)

## 74. (프로그래머스) 잘라서 배열로 저장하기

[잘라서 배열로 저장하기](https://school.programmers.co.kr/learn/courses/30/lessons/120913)

## 75. (프로그래머스) 중복된 숫자 개수

[중복된 숫자 개수](https://school.programmers.co.kr/learn/courses/30/lessons/120583)

## 76. (프로그래머스) 머쓱이보다 키 큰 사람

[머쓱이보다 키 큰 사람](https://school.programmers.co.kr/learn/courses/30/lessons/120585)

## 77. (프로그래머스) 직사각형 넓이 구하기

[직사각형 넓이 구하기](https://school.programmers.co.kr/learn/courses/30/lessons/120860)

## 78. (프로그래머스) 캐릭터의 좌표

[캐릭터의 좌표](https://school.programmers.co.kr/learn/courses/30/lessons/120861)

## 79. (프로그래머스) 최댓값 만들기 (2)

[최댓값 만들기 (2)](https://school.programmers.co.kr/learn/courses/30/lessons/120862)

## 80. (프로그래머스) 다항식 더하기

[다항식 더하기](https://school.programmers.co.kr/learn/courses/30/lessons/120862)

```js
function solution(polynomial) {
  // x의항 구하기
  // x가 포함되어 있다면 x를 제외한 상수까지 자르고 *1을 해준 이유는 x일경우 ''으로 나오므로 *1을 하면 0이된다. 그래서 0일 경우 1을 리턴하고 아니면 원래 값을 리턴
  // x가 포함되어 있지 않다면 null 리턴
  let x =
    polynomial.split(" + ").filter((v) => v.includes("x")).length !== 0
      ? polynomial
          .split(" + ")
          .filter((v) => v.includes("x"))
          .map((v) =>
            v.slice(0, v.length - 1) * 1 === 0
              ? 1
              : v.slice(0, v.length - 1) * 1
          )
          .reduce((acc, cur) => acc + cur)
      : null;

  // 상수항 구하기
  // x가 없다면 상수항들 더해준다
  // 상수항이 없다면 null 리턴
  let v =
    polynomial.split(" + ").filter((v) => !v.includes("x")).length !== 0
      ? polynomial
          .split(" + ")
          .filter((v) => !v.includes("x"))
          .reduce((acc, cur) => +acc + +cur)
      : null;

  // x와 v가 있다면
  if (x && v) {
    // x의 값이 1일 경우 x로 리턴해줘야함
    return `${x === 1 ? "" : x}x + ${v}`;
  } else if (x) {
    // x의 값이 1일 경우 x로 리턴해줘야함
    return `${x === 1 ? "" : x}x`;
  } else {
    return `${v}`;
  }
}
```

생각하기 조금 어려웠지만 풀만 했다.

1x가 아니라 x로 출력해야하는 것만 주의하면 될 것 같다.
