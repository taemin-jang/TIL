# 2022-12-26

## 57. (프로그래머스) 영어가 싫어요

[영어가 싫어요](https://school.programmers.co.kr/learn/courses/30/lessons/120894)

우선 zero ~ nine 까지 객체로 변수에 저장해 둔 다음 for in 으로 객체 key 값을 돌려서 replaceAll(`${key}`, number[key])로 바꿔주었다.

replaceAll을 쓴 이유는 중복되는 숫자가 있을 경우 다 바꿔줘야하기 때문이다.
