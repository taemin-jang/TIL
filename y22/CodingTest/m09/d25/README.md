# 2022-09-25

## 17298번 오큰수

우선 풀긴 풀었는데 메모리 초과가 떴다..

이중 for문으로 풀려했지만 그러면 시간 복잡도가 O(n^2)이 되면서 시간초과가 뜰 것 같아서

최대한 중첩하지 않고 풀어보려고 노력했다.

```js
let input = require("fs").readFileSync(file).toString().trim().split("\n");
let result = [];
function solution(arr) {
  arr.forEach((v, i) => {
    // let f = arr.slice(i + 1).filter((va, i) => v < va);
    let f = arr.slice(i + 1).map((va) => {
      if (v < va) {
        return va;
      }
    });
    console.log(f);
    if (v < f[0]) {
      result.push(f[0]);
    } else {
      result.push(-1);
    }
  });
  console.log(result.join(" "));
}

solution(input[1].split(" "));
```

처음엔 filter()를 사용하여 현재 값인 v와 v 다음 숫자들인 va를 비교하여

va가 v보다 크면 배열 f에 담아준다.

그래서 f[0]이 곧 v 보다 큰 오른쪽 숫자들 중 가장 왼쪽이므로 f[0]을 result 배열에 넣어준다.

만약 없다면 result 배열에 -1을 넣어준다.

그러고 join(" ")으로 출력하면 정상적으로 나온다.

그런데 filter()가 이중 배열이라 메모리 초과가 뜬 것 같다.

그래서 map()으로도 풀어봤는데 똑같이 초과가 떠서 다른 방법을 생각해봐야겠다...
