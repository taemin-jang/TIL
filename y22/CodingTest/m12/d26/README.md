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
