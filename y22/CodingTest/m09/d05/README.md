# 2022-09-05

## 2675번 문자열 반복

이번 문제는 어렵지 않게 풀은 것 같다.

우선 `const input = require("fs").readFileSync(file).toString().trim().split("\n")`을 개행문자인 줄바꿈으로 받았다.

`input.forEach(v, i)`으로 돌려서 i가 1 이상일 경우, 즉 2번째 줄부터 가져온다는 것이다.

`let num = v.split(" ")`를 함으로써 num에는 반복 횟수와, 문자열이 담긴다.

`let str = num[1].trim().split("")` str에는 문자열이 담긴 num[1]을 각 자리마다 잘라서 넣어주었다.

```js
str.forEach((v, i) => {
  for (let j = 0; j < num[0]; j++) {
    answer += v;
  }
});
answer += "\n";
```

테스트 케이스 반복 횟수가 담긴 num[0]만큼 for문을 돌려서 반복 횟수 만큼 각 문자를 answer에 넣어준다.

그리고 for문이 끝나면 줄바꿈을 해주고 마지막에 출력해주면 끝이다.

## 1157번 단어 공부

이번에도 생각보다 쉽게 접근해서 풀었다.

`const input = require("fs").readFileSnc(file).toString(.trim().toLowerCae().split("")` 으로 input을 받을 때 다 소문자로 받게 해주는 toLoowerCase()를 사용하고, 각 자리마다 나눠줬다.

`let alphabet = Array(26).fill(0)` 알파벳이 총 26개라서 Array(26)으로 주었고, 값은 0으로 채웠다.

input을 forEach()문으로 돌려주고 안에는 `alphabet[v.codePointAt(0) - 97]++` v.codePointAt(0)으로 소문자를 정수로 바꿔주고 배열 범위를 0~25로 선언했기 때문에 97을 빼준다.

그리고 나온 값을 alphabet의 배열 인덱스 값으로 넣고 1증가를 해준다.

`let max_sort = [...alphabet]` 새로운 max_sort 변수를 선언하고 alphabet 배열을 스프레드 연산자를 사용해 얕은 복사한다.

`let max = max_sort.sort((a, b) => a - b)[alphabet.length - 1]` max 변수를 선언하고 max_sort를 오름차순으로 정렬하면 가장 마지막있는 값이 최댓값이 되므로 그 값을 max에 넣어준다.

`let max_a = []`는 가장 많이 사용된 알파벳을 대문자로 넣어주는 변수이다.

정렬되지 않은 alphabet 배열을 forEach(v,i)문으로 돌리고 v값이 max보다 클 경우 `max_a.push(String.fromCharCode(i + 65))` v의 해당 i 값과 65를 더해서 나온 정수를 fromCharCode()를 이용하여 문자로 바꿔준 뒤 max_a로 넣어준다.

그래서 마지막으로 `max_a.length === 1 ? console.log(max_a[0]) : console.log("?")` max_a의 길이가 1이면 해당 max_a[0]의 값을 출력하고 1보다 크면 ?로 출력한다.
