# 2022-09-14

## 9012번 괄호

괄호는 여는 괄호`(`와 닫는 괄호`)`가 한 쌍으로 있어야 한다.

그래서 성립되지 않는 조건은

1. 닫는 괄호`)`가 맨 처음부터 나올 경우
2. 여는 괄호`(`와 닫는 괄호`)` 개수가 맞지 않을 경우
3. 개수는 같지만 여는 괄호`(`보다 닫는 괄호`)`가 더 많을 경우

- 예를 들면, `())(()`가 있다.

우선 첫번째에 닫는 괄호가 있는지 부터 검사한다. 만약 있을 경우 cnt_b를 1증가 해주고

없을 경우 그 자리 값과 인덱스 값이 같으면 cnt_a를 1증가 해준다.

두번째 조건은 cnt_b의 값이 cnt_a의 값보다 클 경우 `break`를 해준다.

```js
let answer = "";
for (let i = 1; i <= +input[0]; i++) {
  let cnt_a = 0;
  let cnt_b = 0;
  for (let j = 0; j < input[i].trim().length; j++) {
    if (input[i].indexOf("(", j) === j) {
      cnt_a++;
    } else {
      cnt_b++;
    }
    if (cnt_a < cnt_b) {
      break;
    }
  }

  cnt_a === cnt_b ? (answer += "YES\n") : (answer += "NO\n");
}
console.log(answer.trim());
```
