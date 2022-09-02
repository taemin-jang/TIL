# 2022-09-03

## 기수 정렬(Radix Sort)

데이터를 구성하는 기본 요소 (Radix)를 이용하여 정렬을 진행하는 방식

비교연산을 수행하지 않아 조건이 맞는 상황에서 빠른 정렬 속도를 보장하는 알고리즘이다.

하지만 데이터 전체 크기에 기수 테이블의 크기만한 메모리가 더 필요하다.

전체적인 컨셉은 데이터의 각 자릿수를 낮은 자리수에서부터 가장 큰 자리수까지 올라가면서 정렬을 수행하는 것이다. 그리고 이런 이유 때문에 자릿수가 존재하지 않는 데이터를 기수정렬로 정렬하는 것은 불가능하다.

> 입력 데이터의 최대값에 따라서 Counting Sort의 비효율성을 개선하기 위해서, Radix Sort를 사용할 수 있다.
> 자릿수의 값 별로 (예) 둘째 자리, 첫째 자리 정렬을 하므로, 나올 수 있는 값의 최대 사이즈는 9이다 (범위 : 0~9)

- 시간 복잡도 : O(d \* (n + b)) , O(dn)
  → d는 정렬할 숫자의 자릿수, b는 10 (k와 같으나 10으로 고정되어 있다.)
  ( Counting Sort의 경우 : O(n + k)로 배열의 최댓값 k에 영향을 받는다)
- 장점 : 문자열, 정수 정렬 가능
- 단점 : 자릿수가 없는 것은 정렬할 수 없다. (부동 소수점)
  중간 결과를 저장할 bucket 공간이 필요하다.

### 정렬 방식

1. 0~9까지의 Bucket(Queue 자료구조)을 준비한다.
2. 모든 데이터에 대하여 가장 낮은 자리수에 해당하는 Bucket에 차례대로 데이터를 넣는다.
3. 0부터 차례대로 Bucket에서 데이터를 다시 가져온다
4. 가장 높은 자리수를 기중으로하여 자리수를 높여가며 2번, 3번 과정을 반복한다.

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/41cdf732-3ebe-447b-8205-0d3debd51a7b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220902T165950Z&X-Amz-Expires=86400&X-Amz-Signature=2baf79e8c8ae453ca251a92e255c8d7c96734720fa20724624933d41328e3bc2&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

아래의 8개 데이터에 대하여 기수 정렬을 해보면, 위의 그림과 같이 각 숫자에 해당하는 Queue 공간을 할당하고 진행한다.

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/16bd6b90-3c02-401c-ba0a-b88c2284e99d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220902T170006Z&X-Amz-Expires=86400&X-Amz-Signature=9271ec50dcb267f8856be547771636896873b2d47c017d96039513f79030cf3a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

먼저 1의 자리 숫자부터 시도를 한다. 데이터 순서대로 각 1의 자리에 해당되는 Queue에 데이터가 들어가게 된다. 15같은 경우는 1의 자리가 5이므로 Queue5에 들어가는 방식이다.

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5c23358c-1a0a-43bd-9ea5-7d2997c0e017/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220902T170015Z&X-Amz-Expires=86400&X-Amz-Signature=4a720c61c2e0367ccb3f7efd098d7334659dd43be51b5a92807c0a46fb002b05&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

위의 그림처럼 다시 0번 Queue부터 차례대로 데이터를 가지고 와서 원래의 배열에 넣어준다.

1의 자리에 대한 정렬이 완료되었고 다음은 10의 자리에 대하여 같은 작업을 반복한다.

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1b898c6f-253f-4348-b4ee-363fbbee4820/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220902T170029Z&X-Amz-Expires=86400&X-Amz-Signature=cb17c8097911d541298eed17690ae638a797d78d2a03419a56e925136ece82f4&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

마찬가지로 각 데이터의 10의 자리에 해당되는 Queue에 데이터를 위치 시킨다.

그런 후 Queue0부터 차례대로 다시 데이터를 가져와 원래 배열에 넣어준다.

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/03c26584-8569-41a3-a10d-0286880e22b0/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220902T170037Z&X-Amz-Expires=86400&X-Amz-Signature=3e2a3c4b9e01990aa24649fb01b5e4e4799ed5ee7edb85d8f03b14d697029ca6&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

최종적으로 정렬이 완료가 된다.

### Question

1. 왜 낮은 자리수부터 정렬을 할까요?
   1. MSD (Most-Significant-Digit)와 LSD (Least-Significant-Digit)를 비교하라는 질문이다.

      MSD는 가장 큰 자리수부터 Counting sort 하는 것을 의미하고, LSD는 가장 낮은 자리수부터 Counting sort 하는 것을 의미한다. 즉, 둘 다 할 수 있다.
   - LSD의 경우 1600000 과 1을 비교할 때, Digit의 갯수만큼 따져야하는 단점이 있다.
     그에 반해 MSD는 마지막 자리수까지 확인해 볼 필요가 없다.
   - LSD는 중간에 정렬 결과를 알 수 없다.
     > 예) 10004와 70002의 비교
     반면, MSD는 중간에 중요한 숫자를 알 수 있다.
     따라서 시간을 줄일 수 있다.
     하지만 정렬이 되었는지 확인하는 과정이 필요하고, 이 과정 때문에 메모리를 더 사용하게 된다.
   - LSD는 알고리즘이 일관된다. 그러나 MSD는 일관되지 못한다.
     따라서 Radix sort는 주로 LSD를 언급한다.
   - LSD는 자릿수가 정해진 경우 좀 더 빠를 수 있다.
