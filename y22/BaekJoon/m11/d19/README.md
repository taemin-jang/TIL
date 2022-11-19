# 2022-11-19

## 37. (프로그래머스) 점의 위치 구하기

[점의 위치 구하기](https://school.programmers.co.kr/learn/courses/30/lessons/120841)

삼항연산자를 사용하여 쉽게 해결했다.

## 38. (프로그래머스) 2차원으로 만들기

[2차원으로 만들기](https://school.programmers.co.kr/learn/courses/30/lessons/120842)

2차원으로 어떻게 만들까 생각하다가 Array(Math.floor(num_list.length/n))로 1차원 배열을 먼저 만들어주고

fill(Array(n))처럼 fill 안에 배열을 만들어 줌으로써

Array(Math.floor(num_list.length/n)).fill(Array(n)) 2차원 배열을 만들었다.
