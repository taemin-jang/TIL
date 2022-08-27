# 트리(Tree)

<aside>
💡 Node와 Edge로 이루어진 자료구조
Tree의 특성을 이해해보자

</aside>

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/32a680d5-9f86-44ef-ad18-c833ae61e005/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220827%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220827T061030Z&X-Amz-Expires=86400&X-Amz-Signature=180aa3ee5638d3ccd332ce1b944034532f067c3f74cf8fee81c2c3759bea8fbc&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

트리는 값을 가진 `노드(Node)`와 이 노드들을 연결해주는 `간선(Edge)`으로 이루어져 있다.

그림 상 데이터 1을 가진 로드가 `루트(Root) 노드`다.

모든 노드들은 0개 이상의 자식 노드를 갖고 있으며 보통 부모-자식 관계로 부른다.

## 트리 용어 정리

- 노드(Node) : 트리 구조를 이루는 모든 개별 데이터
- 루트(Root) : 트리 구조의 시작점이 되는 노드
- 부모 노드(Parent node) : 두 노드가 상하관계로 연결되어 있을 때 상대적으로 루트에서 가까운 노드
- 자식 노드(Child node) : 두 노드가 상하관계로 연결되어 있을 때 상대적으로 루트에서 먼 노드
- 리프 노드(Leaf node) : 트리 구조의 끝 지점이며, 자식 노드가 없는 노드
- 깊이 : 계층이 얼마나 밑에 있는지를 나타내는 척도. 단 뿌리 노드는 깊이가 0이다.
  - 위 사진을 예로 들면, 2번과 3번의 깊이는 1이다.
- 레벨 : 트리 구조에서 같은 깊이를 가진 노드를 묶은 것. 뿌리 노드 1부터 시작한다.
  - 위 사진을 예로 들면, 2번과 3번의 레벨은 2이다.
- 높이 : 리프 노드를 기준으로 해당 노드까지 떨어진 정도
  - 위 사진을 예로 들면, 2번과 3번의 높이는 2이다.
- 서브 트리 : 큰 트리 안에서 비슷한 트리 구조를 가진 작은 트리

## 트리의 특징

- 트리에는 사이클이 존재할 수 없다. (만약 사이클이 만들어진다면, 그것은 트리가 아니고 그래프다)
- 모든 노드는 자료형으로 표현이 가능하다.
- 루트에서 한 노드로 가는 경로는 유일한 경로 뿐이다.
- 노드의 개수가 N개면, 간선은 N-1개를 가진다.
- 트리는 각 항목들을 계층적으로 구조화할 때 사용하는 비선형 자료구조이며 부모와 자식의 계층적인 관계이다.
- 트리 구조는 데이터 저장의 의미보다는 저장된 데이터를 더 효과적으로 탐색하기 위해 사용된다.

## 트리 순회 방식

트리를 순회하는 방식은 총 4가지가 있다.

1. 전위 순회(pre-order)

   각 루트를 순차적으로 먼저 방문하는 방식이다.

   ![Preorder-traversal.gif](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5850bf23-7506-44ec-8aa3-2392445157c0/Preorder-traversal.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220827%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220827T061059Z&X-Amz-Expires=86400&X-Amz-Signature=b3d58d9c12475788041f205475c7c9a01e1cb1d5d88a66510fc0332501dd5ab5&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Preorder-traversal.gif%22&x-id=GetObject)

   루트노드 → 왼쪽 서브트리 → 오른쪽 서브트리 순서로 순회하는 방식이며

   `깊이 우선 순회`라고도 불린다.

   > F → B → A → D → C → E → G → I → H

2. 중위 순회(in-order)

   왼쪽 하위 트리를 방문 후 루트를 방문하는 방식이다.

   ![Inorder-traversal.gif](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f6b601cf-9bd3-41ee-b544-ad42b5a09602/Inorder-traversal.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220827%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220827T061122Z&X-Amz-Expires=86400&X-Amz-Signature=67c78bed2ebaf5bfe23f3ad2b520d4de0854c45da539ffdf7d66456e4c98e8d2&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Inorder-traversal.gif%22&x-id=GetObject)

   왼쪽 서브트리 → 노드 →오른쪽 서브트리 순서로 순회하는 방식이며 `대칭 순회`라고도 불린다.

   > A → B → C → D → E → F → G → H → I

3. 후위 순회(post-order)

   왼쪽 하위 트리부터 하위를 모드 방문 후 루트를 방문하는 방식이다.

   ![Postorder-traversal.gif](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/986ff70f-35dc-47a2-91da-e4c854e65641/Postorder-traversal.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220827%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220827T061132Z&X-Amz-Expires=86400&X-Amz-Signature=24d10ca7c6a9676b3ec634d3a831092e515207e867b646e20c70fcdb165e25cd&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Postorder-traversal.gif%22&x-id=GetObject)

   왼쪽 서브트리 → 오른쪽 서브트리 → 노드 순서로 순회하는 방식이다.

   > A → C → E → D → B → H → I → G → F

4. 레벨 순회(level-order)

   `너비 우선 순회(BFS)`라고도 한다.

   루트부터 계층별로 방문하는 방식이다.

   ![Breadth-First-Search-Algorithm.gif](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/45895cb3-e10e-41da-ba63-8f1d859adcea/Breadth-First-Search-Algorithm.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220827%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220827T061143Z&X-Amz-Expires=86400&X-Amz-Signature=1a9b741002a588d1b7039b32e68d6033b42cc0b6c5154d9c1471259b29aa460e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Breadth-First-Search-Algorithm.gif%22&x-id=GetObject)

   루트 → 왼쪽 → 오른쪽 순으로 1계층씩 내려오면서 순회하는 방식이다.

   > F → B → G → A → D → I → C → E → H

## 이진 트리 (Binary Tree)

- 트리 구조는 여러 가지 유형이 있는데, 그 중 가장 기본이 되는 트리는 이진 트리 구조이다.
- 이진 트리는 2개 이하의 자식 도르를 가진다. (자식 노드가 없거나 1개의 자식노드만 가지는 것도 가능하다!)
- 2개의 자식 노드 중에서 왼쪽의 노드를 Left Node라고 하고, 오른쪽 노드를 Right Node 라고 한다.

## 이진 트리의 종류

### 편향 이진 트리 (Skewed Binary Tree)

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/dd047cb4-940f-437d-8512-b41dcb614e28/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220827%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220827T061200Z&X-Amz-Expires=86400&X-Amz-Signature=7b0c16703185d1747b5c13c3ed5a94db20c8fd2907437603380f4b41f74d125d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

`편향 이진 트리`는 하나의 차수로만 이루어져 있는 경우를 의미한다.

이러한 구조는 배열과 같은 선형 구조이므로 탐색 시 모든 데이터를 전부 탐색해야한다는 단점이 있어 효율적이지 못하다.

### 포화 이진 트리 (Full Binary Tree)

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1e5e28a5-2136-46b9-b750-983e8530c2b1/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220827%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220827T061213Z&X-Amz-Expires=86400&X-Amz-Signature=d39769ed45b92ff6a3172f60ebb71830120e0184568efd131ff02844e494a1c1&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

`포화 이진 트리`는 ‘Leaf Node’를 제외한 모든 노드의 차수가 2개로 이루어져 있는 경우를 의미한다. 이 경우 해당 차수에 몇 개의 노드가 존재하는지 바로 알 수 있으므로 노드의 개수를 파악할 때 용이하다.

<aside>
💡 root node : A
leaf node : H, I, J, K, L, M, N, O

</aside>

### 완전 이진 트리 (Complete Binary Tree)

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/861e0405-a653-4894-931e-a6a563dd17b3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220827%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220827T061225Z&X-Amz-Expires=86400&X-Amz-Signature=abc4b113ed22e54e841bd2c0c4f8119748b4639fa95c7d7226cd84a4a040a04c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

`포화 이진 트리`와 같은 개념으로 트리를 생성하지만, 모든 노드가 왼쪽부터 차근차근 생성되는 이진 트리를 의미한다. (힙 정렬은 완전 이진 트리의 일종)

## 트리 구조 구현

```jsx
class Tree {
  //tree의 constructor를 생성 : tree의 자식 노드들을 엘리먼트로 담을 children 배열로 선언
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  // 자식 노드 생성 메소드 구현 : new 키워드로 자식 노드를 생성 한 후, children 배열에 push
  insertNode(value) {
    const childNode = new Tree(value);
    this.children.push(childNode);
  }

  // tree에서 value값을 탐색하기 위한 메소드 구현
  contains(value) {
    // 현재 노드의 value 값이 찾는 값과 일치한다면 true 반환
    if (this.value === value) {
      return true;
    }

    // 자식 노드에서 value값을 탐색하기 위해 반복문과 재귀패턴 사용
    for (let childNode of this.children) {
      if (childNode.contains(value)) {
        return true;
      }
    }
    // 조건에 해당하지 않으면 false 반환
    return false;
  }
}
```

## 사용 예

```jsx
class Tree {
  constructor(val) {
    this.val = val;
    this.leftNode = null;
    this.rightNode = null;
  }

  getVal() {
    return this.val;
  }

  setVal(val) {
    this.val = val;
  }

  setLeftNode(node) {
    this.leftNode = node;
  }

  getLeftNode(node) {
    return this.leftNode;
  }

  setRightNode(node) {
    this.rightNode = node;
  }

  getRightNode(node) {
    return this.rightNode;
  }

  // 중위순회
  InOrderTree(node) {
    if (!node) {
      return;
    }

    this.InOrderTree(node.leftNode);
    console.log(node.val);
    this.InOrderTree(node.rightNode);
  }

  // 전위순회
  preOrderTree(node) {
    if (!node) {
      return;
    }

    console.log(node.val);
    this.preOrderTree(node.leftNode);
    this.preOrderTree(node.rightNode);
  }

  // 후위순회
  postOrderTree(node) {
    if (!node) {
      return;
    }

    this.postOrderTree(node.leftNode);
    this.postOrderTree(node.rightNode);
    console.log(node.val);
  }
}

let root = new Tree(1);
let node = new Tree(2);
root.setLeftNode(node);

node = new Tree(3);
root.setRightNode(node);

node = new Tree(4);
root.leftNode.setLeftNode(node);

node = new Tree(5);
root.leftNode.setRightNode(node);

node = new Tree(6);
root.rightNode.setLeftNode(node);

node = new Tree(7);
root.rightNode.setRightNode(node);

/* 
    1
  2   3
 4 5 6 7
*/

console.log(">>>> InOrder Start!! ");
root.InOrderTree(root);

console.log(">>>> preOrder Start!! ");
root.preOrderTree(root);

console.log(">>>> postOrder Start!! ");
root.postOrderTree(root);
```

## 출력 화면

![screen](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2899a063-3890-4b68-b6bb-654dddca622e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220827%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220827T061804Z&X-Amz-Expires=86400&X-Amz-Signature=ac0223a05d0a9db63d191c19d766e7331a76ff3e174436556d2aea13a212e3a7&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)
