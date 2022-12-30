# 2022-12-30

## 82. (프로그래머스) 안전지대\*

[안전지대](https://school.programmers.co.kr/learn/courses/30/lessons/120866)

```js
function solution(board) {
  let location = new Set(); // board에서 지뢰 좌표 저장
  let locat = new Set(); // board에서 지뢰 주변 좌표 저장
  for (x in board) {
    for (y in board[x]) {
      if (board[x][y] === 1) {
        location.add([x, y]); // board 지뢰 좌표 값 저장
      }
    }
  }
  for (v of location) {
    let x = parseInt(v[0]);
    let y = parseInt(v[1]);
    locat.add(JSON.stringify([x, y])); // 배열은 그냥 비교가 안되므로 JSON.stringify을 사용해서 문자열로 변환 후 비교
    // 각각의 주변 좌표들을 조건식으로 다 나누어서 계산함
    if (x - 1 >= 0) {
      if (y - 1 >= 0) {
        locat.add(JSON.stringify([x - 1, y - 1]));
      }
      if (y + 1 <= board.length - 1) {
        locat.add(JSON.stringify([x - 1, y + 1]));
      }
      locat.add(JSON.stringify([x - 1, y]));
    }
    if (x + 1 <= board.length - 1) {
      if (y - 1 >= 0) {
        locat.add(JSON.stringify([x + 1, y - 1]));
      }
      if (y + 1 <= board.length - 1) {
        locat.add(JSON.stringify([x + 1, y + 1]));
      }
      locat.add(JSON.stringify([x + 1, y]));
    }
    if (y - 1 >= 0) {
      locat.add(JSON.stringify([x, y - 1]));
    }
    if (y + 1 <= board.length - 1) {
      locat.add(JSON.stringify([x, y + 1]));
    }
  }
  return board.length * board.length - locat.size;
}
```

어떻게 풀어야할 지 감이 잡히지 않아서 각 주변 좌표들을 조건식으로 나누어 노가다로 풀었다...

다른 사람들 풀이 보면서 다시 풀어봐야겠다.

## 83. (프로그래머스) 삼각형의 완성조건 (2)

[삼각형의 완성조건 (2)](https://school.programmers.co.kr/learn/courses/30/lessons/120868)

```js
function solution(sides) {
  sides.sort((a, b) => a - b);
  return sides[0] + sides[0] - 1;
}
```

예를 들어 sides의 값이 [11, 8]일 경우, 2가지 방법이 있다.

우선 가장 긴 길이가 11인 경우, 나머지 한 변의 길이는 4,5,6,7,8,9,10,11 총 8개이다.

나머지 한 변이 가장 길 경우, 12,13,14,15,16,17,18 총 7개이다.

이것을 계산 식으로 작성해보면 첫번째 경우 => 작은 값(8)

두번째 경우 => 큰 값(11) + 작은 값(8) = 19 - 큰 값(11) - 자기 자신(1) = 7 => 즉 작은 값(8) - 1 = 7

따라서 작은 값 + 작은 값 - 1이란 결과가 나온다.
