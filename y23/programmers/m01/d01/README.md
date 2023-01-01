# 2023-01-01

## 87. (프로그래머스) 겹치는 선분의 길이

[겹치는 선분의 길이](https://school.programmers.co.kr/learn/courses/30/lessons/120876)

### 첫번째 풀이 (실패)

```js
function solution(lines) {
  let set = new Set();
  let count = [];
  let cnt = 0;
  for (arr of lines) {
    for (let i = arr[0]; i <= arr[1]; i++) {
      if (!set.has(i)) {
        set.add(i);
      } else {
        count.push(i);
      }
    }
  }
  return count.sort((a, b) => a - b)[count.length - 1] -
    count.sort((a, b) => a - b)[0] +
    1 <=
    count.length
    ? count.sort((a, b) => a - b)[count.length - 1] -
        count.sort((a, b) => a - b)[0]
    : 0;
}
```

이상하게 풀어놨더니 다음날 코드를 보니까 왜 이렇게 풀었는지 이해가 안됨...

그래서 다시 생각해 보았다. 그냥 line 배열을 만들고 거기에 다 집어 넣으면 1로 들어가고 중복은 1이 넘어 갈 것이다. 그리고 중간이 비어있으면 0으로 되어있다.

배열은 0부터 시작인데 조건은 -100 ~ 100이므로 배열 인덱스에 100을 추가해서 0~199로 설정해주었다.

### 두번째 풀이 (실패)

```js
function solution(lines) {
  let set = new Set();
  let arr = new Array(200).fill(0);
  for (val of lines) {
    for (let i = val[0]; i <= val[1]; i++) {
      arr[i + 100]++;
    }
  }
  let filter = [];
  let cnt = 0;
  arr.forEach((v, i) => {
    if (v >= 1) {
      filter.push(i);
    }
  });
  filter.filter((v) => {
    if (arr[v] >= 2) {
      if (arr[v + 1] >= 2) {
        cnt++;
      }
    }
  });
  return cnt;
}
```

케이스 [[0, 3], [-3, -1], [-2, 3]] 이거인 경우 선분이 중간 한칸이 끊겨 있을때를 알 수가 없었다.

### 세번째 풀이 (성공)

```js
function solution(lines) {
  let set = new Set();
  let arr = new Array(200).fill(0);
  for (val of lines) {
    for (let i = val[0]; i < val[1]; i++) {
      arr[i + 100]++;
    }
  }
  return arr.filter((v) => v > 1).length;
}
```

어이없는 실수였다. 만약 선분이 [0,2] 이면 나는 0, 1, 2에 값을 다 추가해주었다. 이게 실수였다.

선분의 마지막은 추가해주면 안된다. 추가하게되면 길이가 3이 되기때문이다. 0, 1, 2의 길이는 2이므로 `for(let i = val[0]; i < val[1]; i++)` 이렇게 해주면 된다.

그러면 이제 2이상인 값의 개수만 리턴해주면 끝이다.

이 문제를 푸는데 2일동안 풀었다... 문제 접근하는 법을 잘 모르는 것 같다.

계속 생각하고 안되면 다른 방법으로 빠르게 접근하도록 노력해야겠다.
