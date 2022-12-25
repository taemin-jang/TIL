# 2022-09-03

## 11654번 아스키 코드

js에서 문자를 아스키코드로 변환하는 메서드는 `String.charCodeAt()`과 `String.codePointAt()`이 있다.

그리고 그 반대로 문자를 생성해주는 메소드인 `String.fromCharCode()`가 있다.

### charCodeAt() 사용 예시

charCodeAt()은 주어진 인덱스에 대한 UTF-16 코드를 나타내는 0부터 65535 사이의 정수를 반환한다.

```js
const sentence = "The quick brown fox jumps over the lazy dog.";

const index = 4;

console.log(
  `The character code ${sentence.charCodeAt(
    index
  )} is equal to ${sentence.charAt(index)}`
);
// expected output: "The character code 113 is equal to q"
```

### codePointAt() 사용 예시

codePointAt()은 일반 문자의 경우 charCodeAt() 메소드의 결과 값과 반환되는 코드 포인트 값이 동일해 보이지만 단일 UTF-16 코드로 표현할 수 없는 유니코드 코드 포인트 값과는 다르다.

```js
"ABC".codePointAt(0); // 65
"ABC".codePointAt(0).toString(16); // 41

"😍".codePointAt(0); // 128525
"\ud83d\ude0d".codePointAt(0); // 128525
"\ud83d\ude0d".codePointAt(0).toString(16); // 1f60d

"😍".codePointAt(1); // 56845
"\ud83d\ude0d".codePointAt(1); // 56845
"\ud83d\ude0d".codePointAt(1).toString(16); // de0d

"ABC".codePointAt(42); // undefined
```

### fromCharCode() 사용 예시

fromCharCode()는 UTF-16 코드 유닛의 시퀀스로부터 문자열을 생성해 반환한다.

```js
String.fromCharCode(65, 66, 67); // "ABC"
String.fromCharCode(0x2014); // "—"
String.fromCharCode(0x12014); // 숫자 '1'은 무시해서 "—"
```
