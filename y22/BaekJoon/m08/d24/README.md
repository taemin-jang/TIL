# 14681번 사분면 고르기

입력때 fs.readFileSync("/dev/stdin") 으로 하면 런타임 에러가 뜬다  
그래서 readline으로 했는데 찾아보니까 fs.readFileSync(0)을 쓰면 안뜬다! 앞으로 /dev/stdin 대신 0으로 사용해야겠다.
