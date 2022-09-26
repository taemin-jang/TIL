# 2022-09-26

## 17298번 오큰수

다른 사람들 풀이 보고 참고하여 풀었다.

우선 answer 배열에 값을 input[0]개 만큼 -1로 초기화한다.

그리고 stack 빈 배열을 선언하고, stack에는 인덱스가 담기게 된다.

```js
while (stack.length && arr[stack[stack.length - 1]] < arr[i]) {
  answer[stack.pop()] = arr[i];
}
stack.push(i);
```

stack에 값이 없다면 해당 인덱스 값을 stack에 넣어준다.

그러면 stack에는 [0], [1], [2, 3] 이런식으로 인덱스가 담긴다.

그렇게 stack에 값이 있고, `arr[stack[stack.length - 1]] < arr[i]`은 우선 바로 오른쪽 값과 비교해보고 맞으면 `answer[stack.pop()] = arr[i];` 해당 값을 바꿔준다.

stack은 후입선출로 쌓아둔 stack을 앞에 쌓은 요소들로 다시 돌리면서 맞는 값을 바꿔준다.

`3 5 2 7` 로 돌렸을 때 예시

```js
// i = 0 for문에 들어오면 stack은 비어있기 때문에 while문을 지나치고 0을 스택에 넣는다.
answer = [-1, -1, -1, -1];
stack = [0];

// i = 1 while문에 걸리게 된다. (1. 스택에 요소가 있음 && 2. arr[0]<arr[1])
// answer[0] = arr[1]
answer = [5, -1, -1, -1];
stack = [1]; // while 문이 다 돌고나면 현재 index를 stack에 담아주고 다음 for문으로

// i = 2 while문에 걸리지 않기 때문에 stack에 index만 넣어주고 끝난다. (스텍에 요소는 있지만 arr[1] > arr[2])
answer = [5, -1, -1, -1];
stack = [1, 2];

// i = 3 while문에 걸리고, 조건이 맞지 않을 때까지 반복한다.
// 1.
//answer[2] = arr[3]
answer = [5, -1, 7, -1];
stack = [1];
//2.
//answer[1] = arr[3]
answer = [5, 7, 7, -1];
stack = [];

// 최종적으로 for문이 끝나게 되면
answer = [5, 7, 7, -1];
stack = [3];
```

처음에는 이해가 잘 안됐지만 저렇게 하나하나 체크해보니까 이해가 됐다.

스택을 잘 활용할 수 있도록 연습해야겠다.
