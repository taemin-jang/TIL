// Tree 구조를 구현하기 위한 class 정의하기

// class Tree {
//   //tree의 constructor를 생성 : tree의 자식 노드들을 엘리먼트로 담을 children 배열로 선언
//   constructor(value) {
//     this.value = value;
//     this.children = [];
//   }

//   // 자식 노드 생성 메소드 구현 : new 키워드로 자식 노드를 생성 한 후, children 배열에 push
//   insertNode(value) {
//     const childNode = new Tree(value);
//     this.children.push(childNode);
//   }

//   // tree에서 value값을 탐색하기 위한 메소드 구현
//   contains(value) {
//     // 현재 노드의 value 값이 찾는 값과 일치한다면 true 반환
//     if (this.value === value) {
//       return true;
//     }

//     // 자식 노드에서 value값을 탐색하기 위해 반복문과 재귀패턴 사용
//     for (let childNode of this.children) {
//       if (childNode.contains(value)) {
//         return true;
//       }
//     }
//     // 조건에 해당하지 않으면 false 반환
//     return false;
//   }
// }

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
