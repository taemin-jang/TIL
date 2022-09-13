# 2022-09-13

## 9093번 단어 뒤집기

단어를 뒤집기 위해 reverse() 메소드를 사용했다.

reverse() 메소드는 배열일 때 사용할 수 있어서 `let reverse = str[j].trim().split("").reverse().join("")` 각 자리 수를 나누고 join()으로 문자열을 만들어 주었다.

그러고 띄어쓰기를 해줘야 하기 때문에 `reverse += " "` 해주면 된다.
