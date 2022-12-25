# 2022-09-04

## 11720번 숫자의 합

이 부분이 핵심이다.

```js
let num = input[1]
  .split("")
  .map((el) => +el)
  .filter((v, i) => i < input[0]);
```

입력 받은 숫자 `input[1]`은 현재 문자열이고, `split("")`으로 각 자리수마다 끊어서 배열에 담아줬다.

그리고 `map((el) => +el)` map()을 이용해서 각 배열을 +(단항 더하기)를 활용하여 정수로 변환해주었다.

`filter((v, i) => i < input[0])` filter()를 이용하여 `input[0]`개 만큼 끊어주었다.

마지막으로 forEach문으로 돌려서 합을 구하고 출력해주면 끝.

## 10809번 알파벳 찾기

```js
const file =
  process.platform === "linux" ? "/dev/stdin" : "./y22/BaekJoon/input.txt";

const input = require("fs").readFileSync(file).toString().trim().split("");
let arr = Array(26).fill(-1);
for (let i = 0; i < input.length; i++) {
  if (input.indexOf(input[i], i) >= 0) {
    if (arr[input[i].codePointAt(0) - 97] !== -1) {
      continue;
    }
    arr[input[i].codePointAt(0) - 97] = i;
  }
}

console.log(arr.join(" "));
```

우선 출력문을 보면 포함되어 있지 않은 숫자는 -1로 표시를 해주었다.

그래서 바로 알파벳 개수가 26개이므로 `Array(26).fill(-1)` 배열 26개를 만들고 fill(-1)을 이용하여 다 -1로 채워놨다.

그러고 알파벳이 포함되어 있으면 포함되어 있는 인덱스 값을 반환해주는 `indexof()`를 이용하였다. 포함 되어 있으면 0 이상을 반환해주기 때문에

조건문에 0 이상으로 해주었고, `arr[input[i].codePointAt(0) - 97] !== -1` 만약 -1이 아니라는 것은 이미 앞에서 같은 알파벳이 있다는 것이므로

넘어갈 수 있도록 `continue`를 사용하였다.

정상적으로 조건문을 통과했다면 `arr[input[i].codePointAt(0) - 97] = i` 이 코드를 만나게 된다.

arr 배열 인덱스는 0부터 25까지이고 a부터 z 순으로 넣어줄 생각이다.

따라서 해당 알파벳을 `codePointAt()`을 이용하여 아스키 코드 값으로 반환해주고 a의 아스키 코드 값이 97이므로 -97을 해주었다.

그러면 0~25가 자연스럽게 들어가기 때문이다. 그러고 등장하는 위치인 i를 넣어주면 된다.

arr 배열에 숫자가 담겨있는데 이것을 한 줄로 출력하려면 `join(" ")`을 이용하여 문자열로 만들어 출력해주면 된다.
