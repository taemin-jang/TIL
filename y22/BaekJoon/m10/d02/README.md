# 2022-10-02

## 17299번 오등큰수

```js
const file =
  process.platform === "linux" ? "/dev/stdin" : "./y22/BaekJoon/input.txt";

let input = require("fs").readFileSync(file).toString().trim().split("\n");
let num = input[1].split(" ").map((x) => +x);
let answer = Array.from({ length: +input[0] }, (x) => -1);

let stack = [];

let count = {};
for (let n in num) {
  console.log(n);
  if (!count[num[n]]) {
    count[num[n]] = 1;
  } else {
    count[num[n]]++;
  }
}

for (let i = 0; i < +input[0]; i++) {
  while (stack.length && count[num[stack[stack.length - 1]]] < count[num[i]]) {
    console.log(stack, i, num[i]);
    answer[stack.pop()] = num[i];
    console.log(answer);
  }
  stack.push(i);
}

console.log(answer.join(" "));
```

다른 사람 코드를 비교해보고 한 곳을 변경해서 풀었더니 시간초과가 안떴다.

```js
for (let n of num) {
  cnt[arr.indexOf(n) + 1]++;
}
```

이 부분인데 다른 분은 배열로 안받고 객체로 받아서 풀었다.

이렇게 카운트같은 경우는 객체로 받아서 해도 좋을 것 같다고 생각했다.

아직 시간복잡도가 감이 안잡힌다... 최대한 변수는 줄이고 반복문도 줄일 수 있게 해야겠다.
