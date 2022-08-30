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

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f852ed5b-dcfc-4607-a7ea-364700510d47/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220830T121025Z&X-Amz-Expires=86400&X-Amz-Signature=19de40396e9f683b3f1132659f7d20d06fbfbc58812376e732f015609a8e4243&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

## 힙이 되기 위한 두 가지 조건

1. 완전 이진 트리여야 한다.
2. 부모 노드의 키 값 ≥ 자식 노드의 키 값 또는 부모 노드의 키 값 ≤ 자식 노드의 키 값의 관계여야한다.

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/05028834-53ca-497c-9c2f-15bffc4e7033/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220830T121039Z&X-Amz-Expires=86400&X-Amz-Signature=3d25b518f920a7390f517065a2028709ef784a558e44ac636618c9815e1a4538&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

## 힙의 삽입

항상 완전 이진트리를 유지해야한다.

1. 힙에 새로운 요소가 들어오면, 일단 새로운 노드를 힙의 마지막 노드에 삽입한다.

   ![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/77b30b62-3579-4751-b385-3aa65e0fbdc1/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220830T121053Z&X-Amz-Expires=86400&X-Amz-Signature=821d46291a0e916cc8c3b10988f703372c52aa85570524fa8c8ee9c2ed557d62&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

2. 키 값의 관계가 최대 힙이 되도록 재구성하기 위해 삽입한 노드의 키 값과 부모 노드의 키 값을 비교한다.

   ![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a3868be2-2fab-40dd-a4e9-de7a451e920d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220830T121107Z&X-Amz-Expires=86400&X-Amz-Signature=7ac53c0a662e017862ee049ab5d65fe15e0b87a4c2c70f58fd9638e464787526&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

## 힙의 삭제

항상 완전 이진트리를 유지해야한다.

1. 최대 힙에서 최대값은 루트 노드이므로 루트 노드가 삭제된다.(최대 힙에서 삭제 연산은 최대값 요소를 삭제하는 것)

   ![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/775953ba-4aca-45ed-820f-f908bc2b8abc/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220830T121119Z&X-Amz-Expires=86400&X-Amz-Signature=8f58623ba94304a93d3260aef4df0c7540183066bf711058101ba167c0d8bff3&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

2. 삭제된 루트 노드에는 힙의 마지막 노드를 가져온다.

   ![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f6a0c1c0-791a-4269-a7c0-ce6f30dca7ec/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220830T121132Z&X-Amz-Expires=86400&X-Amz-Signature=cfde39f4e0ce9ea87b4a4deffd4c288df6f85f383bafa1dfeaf89f56499b7b8d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

3. 힙을 재구성한다.

   ![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/6812a742-57eb-4622-8f77-a6359526aa39/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220830T121143Z&X-Amz-Expires=86400&X-Amz-Signature=0959ee97fa0f63128cf3711eeb69759a06632bc90655ec56ff9effe655cab338&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)
