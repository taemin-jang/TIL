# 2022-09-07

## 2941번 크로아티아 알파벳

전에 한 번 자바로 힘들게 푼 적 있어서 이번엔 그나마 좀 쉽게 푼 것 같다.

우선 크로아티아 알파벳을 객체에 담았다. 그 이유는 다이얼 문제 때 객체에 담아서 푼 풀이가 있었는데 가독성도 좋고 괜찮아 보였기 때문이다.

```js
let arr = input;

for (let j = 1; j <= 8; j++) {
  if (arr.indexOf(croatia[j]) >= 0) {
    arr = arr.replace(croatia[j], "@");
    j = 0;
  }
}
```

input을 arr로 다시 담은 이유는 input을 const로 줘서 값을 바꿀 수 없기 때문이다. 사실 let으로 바꾸면 상관없긴 한데 통일성을 갖추기 위해 새로운 변수에 담았다.

for문으로 크로아티아 개수 8개를 확인하기위해 8번 돌리고

if문에 `arr.indexOf(croatia[j]) >= 0` arr 문자열에 크로아티아 알파벳이 포함된다면 (indexOf 말고 includes 써도 괜찮을 것 같다) `arr = arr.replace(croatia[j], "@")` 해당 부분을 @로 대체해준다.

그리고 `j=0` 해당 값이 중복이 되는지 확인하기 위해 다시 처음부터 돌려주기 위해 했다.

다시 풀어보니까 좀 더 잘 풀 수 있던 것 같다!

## 1316번 그룹 단어 체커

이 문제는 알고리즘 생각하는데 좀 어려웠다.

그래서 결국 검색을 통해 어느정도 정보를 얻은 후에 다시 풀었다.

```js
let cnt = 0;
for (let i = 1; i <= input[0]; i++) {
  let arr = [];
  let str = input[i].split("");
  for (let j = 0; j < str.length; j++) {
    if (!arr.includes(str[j])) {
      arr.push(str[j]);
    } else {
      if (str[j - 1] === str[j]) {
        arr.push(str[j]);
      } else {
        cnt--;

        break;
      }
    }
  }
  cnt++;
}
```

핵심 코드이다. 한 줄씩 한번 풀이를 해보겠다.

`let cnt = 0` cnt 변수는 그룹 단어가 몇개인지 개수를 세어주는 변수이다.

첫번째 for문은 입력 값의 첫 번째 줄 만큼 돌려준다.

그리고 `let arr = []`와 `let str = input[i].split("")` 선언을 해주었다.

우선 빈 배열 arr를 선언해 주었는데, 그 이유는 나중에 나오지만 arr에 문자가 포함되지 않으면 `arr.push(str[j])` 해당 문자를 넣어주기 위해서다. 그렇게 넣어주다가 같은 문자가 나오면 전에 문자와 비교해서 같으면 넣어주지만, 다르면 `cnt--` 카운트 1을 빼주고 `break`를 통해 이중 for문을 나간다.

그러고 이중 for문을 나오면 `cnt++`을 해주었는데 그 이유는 그룹 단어가 정상적으로 있다면 개수를 추가해주면서 `cnt--`로 인해 -1이 되는 것을 막아주기 위해서이다.

코드를 말로 풀이를 했지만 처음 보는 사람이 읽으면 잘 모를 것 같다.

그건 내가 문제를 풀었지만 제대로 이해하고 풀지 못했기 때문이라고 생각한다.

나중에 다시 풀어보고 고쳐야겠다.
