# 2022-12-26

## 57. (프로그래머스) 영어가 싫어요

[영어가 싫어요](https://school.programmers.co.kr/learn/courses/30/lessons/120894)

우선 zero ~ nine 까지 객체로 변수에 저장해 둔 다음 for in 으로 객체 key 값을 돌려서 replaceAll(`${key}`, number[key])로 바꿔주었다.

replaceAll을 쓴 이유는 중복되는 숫자가 있을 경우 다 바꿔줘야하기 때문이다.

## 58. (프로그래머스) 인덱스 바꾸기

[인덱스 바꾸기](https://school.programmers.co.kr/learn/courses/30/lessons/120895)

어디서 막혔는지 모르겠다. 그냥 splice를 이용하는데 갑자기 안먹어서 삽질하다가 갑자기 됐다... 왜 안됐던건지 모르겠다.

그런데 다른 분들 풀이 보니까 그냥 배열에 값을 바꿔 넣어주었다.

그냥 간단하게 생각했으면 될 것을 왜 replace랑 splice로 생각했는지 모르겠다...

## 59. (프로그래머스) 한 번만 등장한 문자

[한 번만 등장한 문자](https://school.programmers.co.kr/learn/courses/30/lessons/120896)

생각보다 잘 안풀려서 당황했다. 몬가 쉽게 풀 수 있지 않을까 생각해봤지만 생각이 나지 않아서 그냥 알파벳 개수만큼 배열 0으로 초기화하고 해당 알파벳 등장 할 때마다 카운트 해줘서 카운트가 1인 것들만 골라서 출력을 해주었다

그런데 다른사람 풀이 보니까 indexOf와 lastIndexOf가 같은 경우 값을 넣어줘서 푼 사람이 있다... lastIndexOf가 있다는 것을 배웠다.

## 60. (프로그래머스) 약수 구하기

[약수 구하기](https://school.programmers.co.kr/learn/courses/30/lessons/120897)

set 객체를 이용하여 풀었다. set은 중복을 허용하지 않으므로 1부터 n까지 돌려서 나머지가 0인 값을 넣어주면 알아서 중복은 안들어가므로 set을 사용했다.

## 61. (프로그래머스) 편지

[편지](https://school.programmers.co.kr/learn/courses/30/lessons/120898)
