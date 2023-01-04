# 2023-01-04

## 93. (lv0) 치킨 쿠폰 Time : 1h

[치킨 쿠폰](https://school.programmers.co.kr/learn/courses/30/lessons/120884)

### 첫번째 풀이 (실패)

```js
function solution(chicken) {
  let cupon = 0;
  while (true) {
    cupon += chicken;
    chicken = parseInt(chicken / 10);
    if (chicken < 10) {
      cupon += chicken;
      break;
    }
  }
  return parseInt(cupon / 10);
}
```

처음 생각한 풀이는 쿠폰과 치킨의 값이 같으니까 쿠폰의 총 개수를 구하고 10으로 나눈 몫을 구하면 될 것 같았다.

그랬는데 테스크 케이스 1개가 실패가 떴다.

아무리 생각해도 반례를 모르겠어서 다른 분들의 풀이를 참고 했다.

### 두번째 풀이 (성공)

```js
function solution(chicken) {
  let service = 0;
  while (chicken >= 10) {
    service += parseInt(chicken / 10);
    chicken = parseInt(chicken / 10) + (chicken % 10);
  }

  return service;
}
```
