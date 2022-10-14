# 2022-10-15

## (프로그래머스) JadenCase 문자열 만들기

[JadenCase 문자열 만들기](https://school.programmers.co.kr/learn/courses/30/lessons/12951#)

```js
function solution(s) {
  let word = s.split(" ");
  var answer = [];

  for (let str of word) {
    if (str !== "") {
      let st = str.toLowerCase().split("");
      if (/[a-z]/g.test(st[0])) {
        st[0] = st[0].toUpperCase();
      }
      answer.push(st.join(""));
    } else {
      answer.push(str);
    }
  }
  answer = answer.join(" ");
  return answer;
}
```

어렵지 않다고 생각했는데 까다로운 테스트케이스 때문에 시간이 좀 걸렸다.

우선 문자열을 " "으로 잘라주고 만약 공백이 연속된다면 그 공백은 배열에 넣어주었다.

공백이 아니라면 또 각 문자를 toLowerCase()를 사용하여 소문자를 만들고 각 자리로 잘라주었다.

그리고 정규식을 사용하여 만약 단어 첫글자가 소문자이면 toUpperCase()로 대문자를 만들어주고

잘랐던 문자들을 join("")으로 문자열을 만들어 준 후 answer 배열에 넣어주었다.

그리고 마지막으로 answer.join(" ")으로 해주면 끝이다.

테스트 케이스 중 " a bc "이런식으로 앞뒤 공백이 있으면 그대로 " A Bc " 출력을 해줘야 한다.

지금 생각해보니 어렵지 않은데 생각보다 오래걸렸다..
