# 2023-01-07

## 99. (lv0) 연속된 수의 합 Time :

[연속된 수의 합](https://school.programmers.co.kr/learn/courses/30/lessons/120923)

### 첫 번째 풀이 (실패)

```js
function solution(num, total) {
  let answer = [];
  let start = parseInt(total / num) - (num % 2 === 0 ? 1 : parseInt(num / 2));
  let i = 0;
  while (i < num) {
    answer.push(start + i);
    if (answer.reduce((acc, cur) => acc + cur, 0) === total) {
      break;
    }
    i++;
  }
  return answer;
}
```

처음 접근 방법은 시작 숫자를 먼저 정하기 위해 total/num 값에서 num%2 === 0이면 1 아니면 num/2를 빼준다.

그렇게 시작 숫자를 정하고 반복문을 돌리면서 start + i 값을 answer에 넣어주었다.

그러고 만약 answer.reduce한 값이 total값과 같으면 반복문을 멈추고 answer을 리턴해주었다.

그런데 테스트 케이스 4개를 실패했다.

생각해보니 합은 정해져 있고, 연속된 숫자의 합이므로 등차수열의 합 공식을 사용해보기로 했다.

### 두 번째 풀이 (실패)

```js
function solution(num, total) {
  let answer = [];
  let a = (total * 2) / num;
  let a1 = a - num;
  let an = num;
  let i = 0;
  let result = [];
  if (num === 1) {
    return [total];
  }
  while (true) {
    a1 = a - num + 1 * i;
    an = num - 1 * i;
    if (Math.abs(a1 - an) + 1 === num) {
      answer.push(a1);
      answer.push(an);
      break;
    }
    i++;
  }
  for (
    let i = answer.sort((a, b) => a - b)[0];
    i <= answer.sort((a, b) => a - b)[1];
    i++
  ) {
    result.push(i);
  }
  return result;
}
```
