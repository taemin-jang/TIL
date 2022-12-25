# 2022-09-06

## 1152번 단어의 개수

문제는 되게 간단하다고 생각한다.

js에는 내장 함수로 split()가 있는데 `split(" ")`로 끊어주면 끝이다.

단, 주의할 점은 입력을 공백만 입력하면 공백이 들어오게 되면서 1로 출력이 되는 점이다.

이것을 `if (input[0] === "") {}` 조건을 걸어줘서 참이면 `input.length = 0`을 해주면 된다.

## 2908번 상수

이번 문제는 각 배열에 담긴 숫자를 뒤집어야 한다.

나는 for문으로 맨 뒤에 값 부터 다시 넣어주는 식으로 했다.

```js
input.forEach((v, i) => {
  let a = v.split("");
  v = "";
  for (let j = 2; j >= 0; j--) {
    v += a[j];
  }
  answer.push(+v);
});
```

## 5622번 다이얼

나는 if문에 `string.includes()`를 사용해서 하나하나 체크했는데

다른 사람 풀이를 보니까 객체에다가 넣어주니까 더 보기 좋은 것 같다.

```js
const dialObj = {
  3: "ABC",
  4: "DEF",
  5: "GHI",
  6: "JKL",
  7: "MNO",
  8: "PQRS",
  9: "TUV",
  10: "WXYZ",
};
```