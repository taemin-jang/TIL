## 입출력 받기

> 출력

### console.log()를 이용해 출력합니다.

'''javascript
var a = 100;
var b = "Hello, World!";
console.log("a is %d", a); // C style
console.log(`${a}은 숫자 ${b}는 문자열`);

// a is 100
// 100는 숫자 Hello, World!는 문자열
'''

---

> 입력

### readline 모듈을 이용해 콘솔로 입력 받습니다.

- readline을 이용한 기본적인 형식입니다.
  '''javascript
  const readline = require("readline");

  const rl = readline.createInterface({
  input:process.stdin,
  output:process.stdout,
  });

  rl.on("line" , (line)=>{
  // 입력방법들 ...
  rl.close();
  });

  rl.on("close",()=>{
  // 입력이 끝난 후 실행할 코드
  process.exit();
  });

'''

### 기본 입력 방법을 통해 다양하게 입력을 받는 방법

- 한 줄 값 입력받기
- 공백을 기준으로 값 입력받기
- 여러 줄 입력받기
- n횟수만큼 반복 입력받기
- 공백이 포함된 문자 여러 줄 입력받기

#### 한 줄 값 입력받기

'''javascript
const readline = require("readline");

const rl = readline.createInterface({
input:process.stdin,
output:process.stdout,
});

rl.on("line" , (line)=>{
// 입력방법들 ...
console.log(`입력 받은 것은?? ${line}`);
rl.close();
});

rl.on("close",()=>{
// 입력이 끝난 후 실행할 코드
process.exit();
});

// 입력
// 안녕하세요.

// 출력
// 안녕하세요.
'''

#### 공백을 기준으로 값 입력받기

'''javascript
const readline = require("readline");

const rl = readline.createInterface({
input:process.stdin,
output:process.stdout,
});

let input = [];

rl.on("line" , (line)=>{
// 입력방법들 ...
input = line.split(' ').map(el => parseInt(el));
rl.close();
});

rl.on("close",()=>{
// 입력이 끝난 후 실행할 코드
input.forEach(num =>{
console.log(num);
})
process.exit();
});

// 입력
// 1 2 3

// 출력
// 1
// 2
// 3
'''

#### 여러 줄 입력받기

'''javascript
const readline = require("readline");

const rl = readline.createInterface({
input:process.stdin,
output:process.stdout,
});

let input = [];

rl.on("line" , (line)=>{
// 입력방법들 ...
input.push(line);
});

rl.on("close",()=>{
// 입력이 끝난 후 실행할 코드
console.log(input);
process.exit();
});

// 입력
// 1
// 2
// 3

// 출력
// ['1','2','3']
'''
위 코드 경우에는 rl.close()를 호출해주지 않기 때문에 계속해서 값을 입력받을 수 있습니다.

그래서 아래 코드처럼 조건을 걸어주는 것이 중요합니다.

#### n횟수만큼 반복 입력받기

'''javascript
const readline = require("readline");

const rl = readline.createInterface({
input:process.stdin,
output:process.stdout,
});

let input = [];
let cnt = 0;

rl.on("line" , (line)=>{
// 입력방법들 ...
cnt += 1;
if(cnt === 1){
N = line;
}else{
input.push(line);
}

if(cnt>N){
rl.close();
}

});

rl.on("close",()=>{
// 입력이 끝난 후 실행할 코드
console.log(input);
process.exit();
});

// 입력
// 3 (앞으로 주어질 입력의 개수 N개)
// a
// b
// c

// 출력
// ['a','b','c']
'''

#### 공백이 포함된 문자 여러 줄 입력받기

'''javascript
const readline = require("readline");

const rl = readline.createInterface({
input:process.stdin,
output:process.stdout,
});

let input = [];

rl.on("line" , (line)=>{
input = line.split(' ').map(el=>parseInt(el));
});

rl.on("close",()=>{
// 입력이 끝난 후 실행할 코드
console.log(input);
process.exit();
});

// 입력
// 1 2 3
// 4 5 6

// 출력
// [[1,2,3],[4,5,6]]
'''
위 코드도 rl.close()를 호출하지 않았기 때문에 무한히 입력받을 수 있습니다. 그래서 조건을 걸어 rl.close()를 호출하여 종료시켜주는 것이 좋습니다.
