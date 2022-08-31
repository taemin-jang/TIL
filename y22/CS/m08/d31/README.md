# 힙 정렬(Heap Sort)

완전 이진 트리를 기본으로 하는 힙(Heap) 자료구조를 기반으로한 정렬 방식이다.

## 완전 이진 트리

> 삽입할 때 왼쪽부터 차례대로 추가하는 이진트리

힙 정렬은 `불안정 정렬`에 속한다.

## 시간복잡도

| 평균     | 최선     | 최악     |
| -------- | -------- | -------- |
| Θ(nlogn) | Ω(nlogn) | O(nlogn) |

## 과정

1. 최대 힙을 구성
2. 현재 힙 루트는 가장 큰 값이 존재한다. 루트의 값을 마지막 요소와 바꾼 후, 힘의 사이즈 하나를 줄인다.
3. 힙의 사이즈가 1보다 크면 위 과정 반복

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f7dd094c-fc12-4925-a4db-c61155a9058e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220831T111219Z&X-Amz-Expires=86400&X-Amz-Signature=7223af7e4e7334941f6966206a51c93aba9b9a595d92da045557075743c7a4be&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

1. 루트를 마지막 노드로 대체 (11 → 4), 다시 최대 힙 구성

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/47492e9e-dc07-422a-8478-d3da634688b3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220831T111230Z&X-Amz-Expires=86400&X-Amz-Signature=bb85fd70780fd31241d9737ebfbcbe9ff609ed4bbe0b46d090f7c120b69fe5f6&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

이와 같은 방식으로 최대 값을 하나씩 뽑아내면서 정렬하는 것이 힙 정렬

## 예시

- 입력 배열 [6, 2, 3, 7, 1] 이라고 생각해보자

  ![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/df982aaa-d935-450c-8040-595686e2294b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220831T111243Z&X-Amz-Expires=86400&X-Amz-Signature=1f30615b1182d7643ef277fdb9b4d5d7d8b8d20f33f890dc44384f259806d6be&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

- 이것을 트리구조로 바꾸자

  ![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/645ffa57-07d5-4bca-b06e-607df7d5dd59/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220831T111251Z&X-Amz-Expires=86400&X-Amz-Signature=dbac380a29597d785b185f8fbd58595c5c42ea24dbf686c0c5ba3be46e785878&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

- 힙 알고리즘을 통해 최대 힙을 만들어 주자

  ![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b8910cdf-e7fd-427e-9f7a-8456d238f38f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220831T111306Z&X-Amz-Expires=86400&X-Amz-Signature=0515e436efa211e45b987787308b850012f7bbbbe7fe6e89fbc82fd0a33a2197&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

- 최대 힙의 루트노드 값과 맨끝 노드 값을 비교한다. 만약 루트 노드 값이 맨 끝 노드 값보다 크면 서로 값을 스와핑한다.

  ![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/6a7c70e4-864e-4ca0-bceb-94bc59dc0fb5/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220831T111316Z&X-Amz-Expires=86400&X-Amz-Signature=fe786789a3ce82b84aa5b1c2ef6d9f4a3b3cf6e5a722754927da8e60597d1f23&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

- 자연스레 입력 배열의 맨 끝 인덱스에는 가장 큰 값인 7이 위치하게 된다.
  7은 이미 마지막 노드로 자리를 확정 받은 상태라 다음 힙 생성 알고리즘을 적용시킬 때 굳이 7을 비교할 필요가 없다. [1, 6, 3, 2]에 힙 생성 알고리즘을 적용하여 최대 힙을 구성해주자.

      ![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5c5c8134-cd70-4104-9dc2-e54228097f01/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220831T111325Z&X-Amz-Expires=86400&X-Amz-Signature=9218d8764b5ce546565b8a0cd620c7c524ceb6f8abbe73db52838cb8cf35f49b&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

- 루트 노드 6을 마지막 노드 2와 값을 비교한다.

  ![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/dd87fc48-bf89-4b50-89c7-fc8b46265092/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220831T111343Z&X-Amz-Expires=86400&X-Amz-Signature=2986f0cf6da3e4d1115ba7ee9c34e409b7688c9b309c6bdc4cf324f143208a50&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

- 최대 힙을 구성하고 마지막 인덱스 노드와 루트 노드의 값을 비교하여 스와핑한다.

  ![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7e38b4ed-461b-4c3d-873b-1f1dd2377291/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220831T111403Z&X-Amz-Expires=86400&X-Amz-Signature=aa85484af33bfa7f3932188bf4df0a0fd3f69e192f57241ca8f29174225278f6&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

- 마지막으로 2는 1보다 크므로 스와핑한다.

  ![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/161eee14-5d36-4fc3-9569-2ec1d1224257/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220831T111411Z&X-Amz-Expires=86400&X-Amz-Signature=65d1ccb95e4b9816ee529f28b61e5c7b78a12cbb7e567a5ed591fd65fa0cf3a3&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)
