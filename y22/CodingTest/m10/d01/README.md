# 2022-10-01

## 17299번 오등큰수

```js
const file =
  process.platform === "linux" ? "/dev/stdin" : "./y22/BaekJoon/input.txt";

let input = require("fs").readFileSync(file).toString().trim().split("\n");

let nums = input[1].split(" ").map((x) => +x);
let num = [...nums];
let answer = Array.from({ length: +input[0] }, (x) => -1);

let arr = [...new Set(nums.sort((a, b) => a - b))];
let cnt = Array.from({ length: arr.length + 1 }, (x) => 0);

let stack = [];

for (let n of num) {
  cnt[arr.indexOf(n) + 1]++;
}

for (let i = 0; i < +input[0]; i++) {
  while (stack.length && cnt[num[stack[stack.length - 1]]] < cnt[num[i]]) {
    // console.log(stack, i, num[i]);
    answer[stack.pop()] = num[i];
  }
  stack.push(i);
}
console.log(answer.join(" ").trim());
```

이렇게 했더니 시간초과가 떴다.

답은 맞게 나오니 시간복잡도를 다시 생각해보면서 내일 풀어봐야겠다.
