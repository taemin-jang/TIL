# 힙

힙은 완전 이진 트리에 있는 노드 중에서 **키 값이 가장 큰 노드**나 **키 값이 가장 작은 노드**를 찾기 위해서 만든 자료구조이다.

키 값이 가장 큰 노드를 찾기 위한 힙을 최대 힙이라 하고, 키 값이 작은 노드를 찾기 위한 힙을 최소 힙이라고 한다.

- 최대 힙(max heap)
  부모 노드의 키 값 ≥ 자식 노드의 키 값
  따라서 최대 힙의 루트 노드는 가장 큰 값이 된다.
- 최소 힙(min heap)
  부모 노드의 키 값 ≤ 자식 노드의 키 값
  최소 힙의 루트 노드는 가장 작은 값이 된다.
- 일반적으로 힙은 최대 힙을 의미한다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f852ed5b-dcfc-4607-a7ea-364700510d47/Untitled.png)

## 힙이 되기 위한 두 가지 조건

1. 완전 이진 트리여야 한다.
2. 부모 노드의 키 값 ≥ 자식 노드의 키 값 또는 부모 노드의 키 값 ≤ 자식 노드의 키 값의 관계여야한다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/05028834-53ca-497c-9c2f-15bffc4e7033/Untitled.png)

## 힙의 삽입

항상 완전 이진트리를 유지해야한다.

1. 힙에 새로운 요소가 들어오면, 일단 새로운 노드를 힙의 마지막 노드에 삽입한다.

   ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/77b30b62-3579-4751-b385-3aa65e0fbdc1/Untitled.png)

2. 키 값의 관계가 최대 힙이 되도록 재구성하기 위해 삽입한 노드의 키 값과 부모 노드의 키 값을 비교한다.

   ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a3868be2-2fab-40dd-a4e9-de7a451e920d/Untitled.png)

## 힙의 삭제

항상 완전 이진트리를 유지해야한다.

1. 최대 힙에서 최대값은 루트 노드이므로 루트 노드가 삭제된다.(최대 힙에서 삭제 연산은 최대값 요소를 삭제하는 것)

   ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/775953ba-4aca-45ed-820f-f908bc2b8abc/Untitled.png)

2. 삭제된 루트 노드에는 힙의 마지막 노드를 가져온다.

   ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f6a0c1c0-791a-4269-a7c0-ce6f30dca7ec/Untitled.png)

3. 힙을 재구성한다.

   ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6812a742-57eb-4622-8f77-a6359526aa39/Untitled.png)
