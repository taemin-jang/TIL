# 2022-12-29

## 81. (프로그래머스) 살아있는 숫자의 덧셈 (2)

[살아있는 숫자의 덧셈 (2)](https://school.programmers.co.kr/learn/courses/30/lessons/120862)

```js
function solution(my_string) {
  return my_string
    .split("") // 1개씩 분리하기
    .map((v) => +v) // 문자열이 숫자로 되어 있다면 숫자로 변환, 아니면 NaN으로 변환
    .join("") // 문자열로 만들어주고
    .split(NaN) // NaN으로 분리하기
    .filter((v) => v !== "").length !== 0 // ""이 아닌 숫자인 경우만 나오는데 만약 숫자가 없을 경우는 0 리턴
    ? +my_string // +를 해준 이유는 'zzz111'이런식으로 나오면 111은 reduce에서 계산이안되어 '111'로 나오므로 앞에 +를 해줌
        .split("")
        .map((v) => +v)
        .join("")
        .split(NaN)
        .filter((v) => v !== "")
        .reduce((acc, cur) => +acc + +cur)
    : 0;
}
```

너무 복잡하게 푼 것 같다.. 다른 분들 풀이 보니까 정규식을 활용해서 알파벳을 다 빈 문자열로 변환하고 계산하는 방법도 있었다.

다양하게 생각 해봐야겠다.
