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
