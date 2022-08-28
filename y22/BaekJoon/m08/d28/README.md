# 2022-08-28

## 10871번 x보다 작은 수

filter()는 주어진 함수의 조건에 부합하는 모든 요소를 모아 새로운 배열로 반환시켜준다.

### filter() 예시

```jsx
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

const result = words.filter((word) => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
```

join()는 배열의 모든 요소를 연결해 하나의 문자열로 만들어준다.

### join() 예시

```jsx
const elements = ["Fire", "Air", "Water"];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(""));
// expected output: "FireAirWater"

console.log(elements.join("-"));
// expected output: "Fire-Air-Water"
```

위 2개의 함수를 이용하면 좀 더 완벽하게 풀 수 있고, 가독성도 좋은 것 같다.
