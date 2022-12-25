# 2022-10-04

## 1935번 후위 표기식2

어제 생각해본 대로 풀었지만 역시나 런타임에러가 떴다...

출력은 잘 되는데 모가 문제인지 모르겠다.

그래서 일단 다른사람 푼 코드로 제출했다.

```js
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input.shift());
const expression = input.shift();
const stack = [];
let result = 0;
let sh = new Map();

for (let i = 0; i < expression.length; i++) {
  let current = expression[i];

  if (current.charCodeAt(0) >= 65 && current.charCodeAt(0) <= 90) {
    if (!sh.has(current)) {
      sh.set(current, input.shift());
    }
    stack.push(sh.get(current));
  } else {
    let second = Number(stack.pop());
    let first = Number(stack.pop());
    let tempResult = 0;

    switch (current) {
      case "+":
        tempResult = first + second;
        break;
      case "-":
        tempResult = first - second;
        break;
      case "/":
        tempResult = first / second;
        break;
      case "*":
        tempResult = first * second;
        break;
    }

    stack.push(tempResult);
  }
}

console.log(stack[0].toFixed(2));
```

아스키코드로 변환해서 했냐 안했냐 차이인거 같은데 잘 뭐가 맞는건지 잘 모르겠다...

프로그래머스로 풀까..?
