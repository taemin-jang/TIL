# 2023-01-02

## 88. (프로그래머스) 유한소수 판별하기

[유한소수 판별하기](https://school.programmers.co.kr/learn/courses/30/lessons/120878)

### 첫번째 풀이 (실패)

```js
function solution(a, b) {
  let result = 0;
  b = b % a === 0 ? parseInt(b / a) : b;
  while (true) {
    if (parseInt(b / 2) === 1 || parseInt(b / 5) === 1) {
      if (b % 2 === 0 || b % 5 === 0) {
        result = 1;
        break;
      }
    }
    if (b % 2 === 0) {
      b = parseInt(b / 2);
    } else if (b % 5 === 0) {
      b = parseInt(b / 5);
    } else if (a % b === 0) {
      result = 1;
      break;
    } else {
      result = 2;
      break;
    }
  }
  return result;
}
```

내가 생각한 것은 분모를 분자로 나누었을 때 나머지가 0이라면 b라는 변수에 b / a한 값을 넣어준다.

그리고 while(true)문으로 반복시켜주고, 만약 분모가 2이거나 5인경우 유한소수로 판별하여 1을 리턴한다.

아닌경우 다음 조건으로 넘어와서 만약 분모가 2로 나눴을 때 나머지가 0인 경우 분모를 2로 나눈 값을 다시 b에 넣어준다.

아닌경우 만약 분모가 5로 나눴을 때 나머지가 0인경우 분모를 5로 나눈 값을 다시 b에 넣어준다.

또 아닌 경우 만약 분자를 분모에 2와 5가 아닌 다른 소인수로 나눴을 때 나머지가 0이면 다른 소인수가 없어서 유한소수라 생각하여 1을 리턴했다.

그런데 제출한 결과 2개의 테스트를 통과 못했다.

### 두번째 풀이 (실패)

```js
function solution(a, b) {
  let result = 0;
  b = b % a === 0 ? parseInt(b / a) : b;
  while (true) {
    if (b === 1) {
      result = 1;
      break;
    }
    if (b % 2 === 0) {
      b = parseInt(b / 2);
    } else if (b % 5 === 0) {
      b = parseInt(b / 5);
    } else if (a % b === 0) {
      result = 1;
      break;
    } else {
      result = 2;
      break;
    }
  }
  return result;
}
```

그냥 b의 값이 1인 경우 바로 리턴해주는 것으로 바꿔주었다. 왜냐면 다음 조건에서 2와 5로 계속 나누다 보면 결국 b의 값은 1이 되기 때문이다.

그래도 1개의 테스트가 통과되지 않았다.

기약분수로 되어있을 때 분모 소인수가 2, 5가 아닌 다른 수가 있으면 안되는데 우선 내가 짠 코드는 기약분수로 만들어주지 못하기 때문인 것 같다.

### 세번째 풀이 (성공)

```js
function solution(a, b) {
  let result = 0;
  b = b / gcd(a, b);
  while (true) {
    if (b % 2 === 0) {
      b = parseInt(b / 2);
    } else if (b % 5 === 0) {
      b = parseInt(b / 5);
    } else if (b === 1) {
      result = 1;
      break;
    } else {
      result = 2;
      break;
    }
  }
  return result;
}

// 최대공약수 구하는 함수
function gcd(a, b) {
  return a % b === 0 ? b : gcd(b, a % b);
}
```

최대 공약수를 구하는 함수를 만들었다. 우선 최대 공약수를 구하는 법은 대표적으로 `유클리드 호재법`이라고 있다.

a % b === 0일 경우 최대 공약수는 b가 된다. 만약 아닌 경우 b를 (a % b)한 나머지 값으로 나눠서 0이 되면 리턴해준다.

재귀함수를 활용해서 나머지가 0이 되는 경우를 찾는 것이다.

그래서 분모를 최대 공약수로 나눠준 후 반복문을 돌려주니까 바로 해결이 되었다

다른 분들의 코드를 보니까 나랑 비슷하게 풀었는데 최대 공약수로 안구하고도 풀 수 있었다.

이 문제를 푸는데 2일정도 걸렸다. 너무 오래걸린 것 같다. 더 성장하도록 하자.
