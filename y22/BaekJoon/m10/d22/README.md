# 2022-10-22

## (프로그래머스) 올바른 괄호

아 처음에 스택으로 풀려했지만 오랜만에 해서 그런지 도저히 머리가 안돌아가서

그냥 cnt_a, cnt_b로 각각의 괄호 갯수를 구한 뒤 비교했다.

만약 처음 )가 나올 경우
`if(str[0] === ')') return false;` 이 조건을 줘서 바로 종료할 수 있도록 했고

만약 여는 괄호보다 닫는괄호가 중간에 더 많을 경우 ()))((()

```js
if (cnt_a < cnt_b) {
  return false;
}
```

와 같은 조건문으로 걸러주었다.

[올바른 괄호](https://school.programmers.co.kr/learn/courses/30/lessons/12909#)
