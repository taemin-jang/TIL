# 2023-01-03

## 89. (lv0) 특이한 정렬 Time : 2Day

[특이한 정렬](https://school.programmers.co.kr/learn/courses/30/lessons/120880)

```js
function solution(numlist, n) {
  var answer = [];
  numlist = numlist.map((v, i) => {
    return { diff: Math.abs(n - v), value: v };
  });
  numlist.sort((a, b) => {
    if (a.diff > b.diff) {
      return 1;
    }
    if (a.diff < b.diff) {
      return -1;
    }
    if (a.diff === b.diff) {
      if (a.value < b.value) {
        return 1;
      }
      if (a.value > b.value) {
        return -1;
      }
    }
  });
  numlist.forEach((v) => {
    answer.push(v.value);
  });
  return answer;
}
```

mdn에서 sort에 대해 봤는데 평소에 하던 오름차순 a-b 이런식이 아니라

직접 값을 비교해서 정렬을 해줄 수 있었다.

그래서 map()을 사용해서 numlist안에 diff라는 key값을 만들고 값에는 `Math.abs(n - v)` 주어진 n의 값과 numlist의 값의 차이를 넣어주었다.

그래서 이 diff의 값을 비교하여 diff을 오름차순으로 해주었다. (diff가 더 작은 값이 -1)

만약 diff값이 같다면 value 값이 큰 것이 먼저 오도록 -1 을 리턴해주었다.

마지막으로 numlist를 forEach문으로 돌려서 v.value 값을 answer에 넣어주고 리턴하면 끝이다.

이번 기회에 sort()에 대해 좀 더 자세히 알 수 있었다.

다른 분들 풀이를 보니까 `return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);` 이렇게 한번에 할 수도 있다.

|| b - a를 해준 이유는 직접 해보니까 만약 안해줬을 때 값의 차이가 같을 경우 오름차순으로 정렬이 된다.

그래서 b - a를 해줌으로써 내림차순으로 정렬해준 것이다.

## 90. (lv0) 등수 매기기 Time : 6m

[등수 매기기](https://school.programmers.co.kr/learn/courses/30/lessons/120882)

```js
function solution(score) {
  let average = score.map((v) => (v[0] + v[1]) / 2);
  return average.map((value) => {
    return average.filter((v) => v > value).length + 1;
  });
}
```

우선 map()을 사용하여 점수의 평균을 average 배열에 넣어주었다.

그러고 average 배열을 먼저 map()으로 value값을 가져온 후 다시 filter()를 사용하여 value 값보다 큰 값만 뽑은 개수에 +1을 해주면 된다.

## 91. (lv0) 옹알이 Time : 3m

[옹알이](https://school.programmers.co.kr/learn/courses/30/lessons/120956)

```js
function solution(babbling) {
  return babbling
    .map((v) => v.replace(/aya|ye|woo|ma/g, ""))
    .filter((v) => v === "").length;
}
```

정규식으로 옹알이 하는 단어를 "" 빈 문자열로 대체해주었다.

그래서 filter를 사용하여 빈 문자열의 개수 리턴해주면 된다.

## 92. (lv0) 로그인 성공? Time : 10m

[로그인 성공?](https://school.programmers.co.kr/learn/courses/30/lessons/120883)

```js
function solution(id_pw, db) {
  let isId = false;
  let isPw = false;

  db.forEach((v) => {
    if (v[0] === id_pw[0]) {
      isId = true;
      if (v[1] === id_pw[1]) {
        isPw = true;
      }
    }
  });
  if (isId) {
    if (isPw) {
      return "login";
    } else {
      return "wrong pw";
    }
  } else {
    return "fail";
  }
}
```

어렵지 않은 문제였는데 기본적인 실수를 해서 조금 걸렸다.

```js
db.forEach((v) => {
  if (v[0] === id_pw[0]) {
    isId = true;
  }
  if (v[1] === id_pw[1]) {
    isPw = true;
  }
});
```

맨 처음에 아무생각없이 이렇게 if문 2개를 따로 분기해서 비밀번호랑 아이디를 비교했었다.

저렇게 되면 아이디가 만약 아닌데 비밀번호가 맞을 경우 isPw는 true가 되어버린다.

그러고 나중에 아이디가 맞고 비밀번호는 아닌경우에 원래 같은 경우는 'wrong pw'가 되어야하는데 이전에 isPw가 true였기 때문에 login이 되어버린다

따라서 비밀번호 체크는 아이디가 맞을 경우에만 체크해야하므로 아이디 if안에 들어가야한다.
