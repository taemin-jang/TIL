# 2022-12-25

## 49. (프로그래머스) 컨트롤 제트

[컨트롤 제트](https://school.programmers.co.kr/learn/courses/30/lessons/120853)

약 한달만에 코테를 하니까 살짝 머리가 굳어있는 느낌이 들었다.

캡스톤 프로젝트에 집중하다보니 한달을 쉬게 되었는데 다시 마음 다잡고 풀어야겠다.

## 50. (프로그래머스) 배열 원소의 길이

[배열 원소의 길이](https://school.programmers.co.kr/learn/courses/30/lessons/120854)

이 문제는 map() 메서드를 아는지 모르는지 확인하는 것 같다.

안다면 바로 쉽게 풀 수 있을 것이고, 몰라도 풀 수 있지만 코드가 길어지게 된다.

## 51. (프로그래머스) 중복된 문자 제거

[중복된 문자 제거](https://school.programmers.co.kr/learn/courses/30/lessons/120888)

이 문제도 Set 객체를 알면 쉽게 풀 수 있었다.

Set의 특징은 중복된 값을 넣을 수 없다는 것이다.

그리고 [...new Set()]을 하면 배열로 변환할 수 있다.

## 52. (프로그래머스) 삼각형의 완성조건 (1)

[삼각형의 완성조건 (1)](https://school.programmers.co.kr/learn/courses/30/lessons/120889)

sort() 사용하여 배열 정렬을 했다.

그래서 가장 큰 값이 마지막에 위치하여 나머지 값들을 더했을 때 값을 비교하면 된다.

## 53. (프로그래머스) 가까운 수

[가까운 수](https://school.programmers.co.kr/learn/courses/30/lessons/120890)

내가 생각한 방법은 우선 `array.map(v => Math.abs(n - v))` 정수 n에서 배열 값을 뺀 값을 array에 다시 넣어주었다. 그러면 뺀 값이 들어있을 것이다.

그러고 `sort((a,b) => a - b)[0]`을 오름차순해서 뺀 값들 중 가장 작은 값을 변수에 저장해주었다.

`array.sort((a,b) => a - b).filter(v => Math.abs(n - v) === min)[0]` 다시 배열을 오름차순으로 정렬하고 정수 n에서 뺀 값이 변수에 저장해 둔 값과 같다면 해당 값을 반환하면된다.

여기서 [0]을 해준 이유는 조건에 가장 가까운 수가 여러개일 경우 더 작은 수를 반환한다 했으므로 예를 들어 [1,3] 이고 n = 2일 경우 1과 3은 둘 다 뺀 값이 1이므로 더 작은 1이 반환이 되어야한다.

더 작은 값을 반환하기 위해서 오름차순 정렬을 해준 것이다.

## 54. (프로그래머스) 369게임

[369게임](https://school.programmers.co.kr/learn/courses/30/lessons/120891)

이 문제를 풀 때 주의할 점은 값을 3으로 나눈 나머지가 0인 조건으로 푸는 것이다.

그렇게 풀면 테스트 케이스 3에서 걸리게 되는데 10 이렇게 주어져도 나머지가 0이 있기 때문에 1이 출력이 된다.

저것만 주의하면 쉽게 풀 수 있었다.

## 55. (프로그래머스) 암호 해독

[암호 해독](https://school.programmers.co.kr/learn/courses/30/lessons/120892)

## 56. (프로그래머스) 대문자와 소문자

[대문자와 소문자](https://school.programmers.co.kr/learn/courses/30/lessons/120893)

나는 문자를 아스키 코드로 받아와서 만약 대문자이면 32를 더하고 다시 문자로 반환하고, 소문자이면 32를 빼서 다시 문자로 변환해주었다.

그런데 그냥 toUpperCase()와 toLowerCase()를 사용하면 쉽게 풀 수 있었다.
