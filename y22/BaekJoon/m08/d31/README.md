# 2022-08-31

## 4344번 평균은 넘겠지

js로 소수점 자리까지 출력하는 방법을 몰라서 찾아봤다.

Number.toFixed()는 숫자를 고정 소수점 표기법으로 표시한다.

### toFixed() 사용 예

```js
var numObj = 12345.6789;

numObj.toFixed(); // Returns '12346': 반올림하며, 소수 부분을 남기지 않습니다.
numObj.toFixed(1); // Returns '12345.7': 반올림합니다.
numObj.toFixed(6); // Returns '12345.678900': 빈 공간을 0으로 채웁니다.
(1.23e20).toFixed(2); // Returns '123000000000000000000.00'
(1.23e-10).toFixed(2); // Returns '0.00'
(2.34).toFixed(1); // Returns '2.3'
(2.35).toFixed(1); // Returns '2.4'. 이 경우에는 올림을 합니다.
-(2.34).toFixed(1); // Returns -2.3 (연산자의 적용이 우선이기 때문에, 음수의 경우 문자열로 반환하지 않습니다...)
(-2.34).toFixed(1); // Returns '-2.3' (...괄호를 사용할 경우 문자열을 반환합니다.)
```
