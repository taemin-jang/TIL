# 14681번 사분면 고르기

입력때 fs.readFileSync("/dev/stdin") 으로 하면 런타임 에러가 뜬다  
그래서 readline으로 했는데 찾아보니까 fs.readFileSync(0)을 쓰면 안뜬다! 앞으로 /dev/stdin 대신 0으로 사용해야겠다.

# 2525번 오븐 시계

입력 받을 때  
ex) 22 10  
1000 이런식으로 한 줄은 띄어쓰기고 다음 엔터키로 입력할 때 어떻게 해야할 지 몰라 찾아봤다.  
저런 경우 input.push(line) 이렇게 받고 이제 받은 input[0]을 split으로 나눠서 하면 된다.
