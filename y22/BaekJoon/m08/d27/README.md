# 15552번 빠른 A+B

for문 문제를 풀 때 주의해야할 점이 있다.  
입출력 방식이 느리면 여러 줄을 입력받거나 출력할 때 시간 초과가 날 수도 있다.

```javascript
const input = require("fs").readFileSync(0).toString().trim().split("\n");
for (let i = 1; i <= input[0]; i++) {
  let num = input[i].split(" ");
  console.log(num[0] + num[1]);
}
```

실제로 console.log로 다 출력하니까 시간 초과가 나왔다.

그래서 문제를 풀 때 answer 변수를 빈 문자열로 선언하고 마지막에 개행문자(\n)를 써서 해결했다.
