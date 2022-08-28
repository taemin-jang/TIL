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

## 10952번 A+B-5

includes()는 하나의 문자열이 다른 문자열에 포함되어 있는지를 판별하고, 그 결과를 true 또는 false로 반환해준다.

또는 배열이 특정 요소를 포함하고 있는지 판별하고, 그 결과를 true 또는 false로 반환해준다.

### includes() 예시

- 문자열

```jsx
const sentence = "The quick brown fox jumps over the lazy dog.";

const word = "fox";

console.log(
  `The word "${word}" ${
    sentence.includes(word) ? "is" : "is not"
  } in the sentence`
);
// expected output: "The word "fox" is in the sentence"
```

- 배열

```jsx
const array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

const pets = ["cat", "dog", "bat"];

console.log(pets.includes("cat"));
// expected output: true

console.log(pets.includes("at"));
// expected output: false
```
