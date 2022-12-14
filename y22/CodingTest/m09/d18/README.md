# 2022-09-18

## 10845번 큐

이번 문제는 큐(Queue)를 사용하는 문제다.

우선 큐는 선입 선출로 먼저 들어온 것이 먼저 나가는 구조이다.

스택과는 반대되는 개념, 스택은 먼저들어온 것이 나중에 나가는 구조이다.

그래서 큐 특징을 이용해서 문제를 접근해보았다.

우선 명령어 6개를 switch 문으로 접근했다.

- push일 때

여기서 좀 애먹었다. 일반적으로 push를 하면 스택처럼 쌓이게 된다.

예를 들면, push 1 => 1, push 2 => 1 2 이런식으로 나중에 들어온 것이 먼저 나가는 구조이다.

빈 배열 `Queue.splice(0, 0, +value)` 0번째 자리에 value 값을 추가한다는 코드이다.

이렇게 하면 항상 0번째 자리로 push한 값이 들어오게 된다.

예를 들면 push 1 => 1, push 2 => 2 1 이런식으로 말이다.

이것을 해결하면 나머지는 순차적으로 조건에 맞게 풀면 된다.

- pop일 때

Queue에 길이가 0이 아닐 때, 즉 정수가 들어 있다면 `answer += Queue[Queue.length - 1] + "\n"` answer에 큐의 마지막 값을 넣어주고, `Queue.pop()`으로 그 값을 빼준다.

- size일 때

answer에 큐의 길이를 넣어준다.

- empty일 때

answer에 큐의 길이가 0이면 1, 아니면 0을 넣어준다.

- front일 때

큐의 길이가 0이 아니면 answer에 큐의 마지막 값을 넣어준다.

- back일 때

큐의 길이가 0이 아니면 answer에 큐의 가장 앞의 값을 넣어준다.

그리고 answer를 출력하면 된다.

---

이번에는 그나마 좀 빨리 풀었지만 쉽게 생각하면 될 것을 자꾸 어렵게 풀려고 해서 더 오래걸리는 것 같다.

조금 더 빨리 풀어보도록 해보자.
