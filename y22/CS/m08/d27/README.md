# ํธ๋ฆฌ(Tree)

<aside>
๐ก Node์ Edge๋ก ์ด๋ฃจ์ด์ง ์๋ฃ๊ตฌ์กฐ
Tree์ ํน์ฑ์ ์ดํดํด๋ณด์

</aside>

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/32a680d5-9f86-44ef-ad18-c833ae61e005/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220827%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220827T061030Z&X-Amz-Expires=86400&X-Amz-Signature=180aa3ee5638d3ccd332ce1b944034532f067c3f74cf8fee81c2c3759bea8fbc&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

ํธ๋ฆฌ๋ ๊ฐ์ ๊ฐ์ง `๋ธ๋(Node)`์ ์ด ๋ธ๋๋ค์ ์ฐ๊ฒฐํด์ฃผ๋ `๊ฐ์ (Edge)`์ผ๋ก ์ด๋ฃจ์ด์ ธ ์๋ค.

๊ทธ๋ฆผ ์ ๋ฐ์ดํฐ 1์ ๊ฐ์ง ๋ก๋๊ฐ `๋ฃจํธ(Root) ๋ธ๋`๋ค.

๋ชจ๋  ๋ธ๋๋ค์ 0๊ฐ ์ด์์ ์์ ๋ธ๋๋ฅผ ๊ฐ๊ณ  ์์ผ๋ฉฐ ๋ณดํต ๋ถ๋ชจ-์์ ๊ด๊ณ๋ก ๋ถ๋ฅธ๋ค.

## ํธ๋ฆฌ ์ฉ์ด ์ ๋ฆฌ

- ๋ธ๋(Node) : ํธ๋ฆฌ ๊ตฌ์กฐ๋ฅผ ์ด๋ฃจ๋ ๋ชจ๋  ๊ฐ๋ณ ๋ฐ์ดํฐ
- ๋ฃจํธ(Root) : ํธ๋ฆฌ ๊ตฌ์กฐ์ ์์์ ์ด ๋๋ ๋ธ๋
- ๋ถ๋ชจ ๋ธ๋(Parent node) : ๋ ๋ธ๋๊ฐ ์ํ๊ด๊ณ๋ก ์ฐ๊ฒฐ๋์ด ์์ ๋ ์๋์ ์ผ๋ก ๋ฃจํธ์์ ๊ฐ๊น์ด ๋ธ๋
- ์์ ๋ธ๋(Child node) : ๋ ๋ธ๋๊ฐ ์ํ๊ด๊ณ๋ก ์ฐ๊ฒฐ๋์ด ์์ ๋ ์๋์ ์ผ๋ก ๋ฃจํธ์์ ๋จผ ๋ธ๋
- ๋ฆฌํ ๋ธ๋(Leaf node) : ํธ๋ฆฌ ๊ตฌ์กฐ์ ๋ ์ง์ ์ด๋ฉฐ, ์์ ๋ธ๋๊ฐ ์๋ ๋ธ๋
- ๊น์ด : ๊ณ์ธต์ด ์ผ๋ง๋ ๋ฐ์ ์๋์ง๋ฅผ ๋ํ๋ด๋ ์ฒ๋. ๋จ ๋ฟ๋ฆฌ ๋ธ๋๋ ๊น์ด๊ฐ 0์ด๋ค.
  - ์ ์ฌ์ง์ ์๋ก ๋ค๋ฉด, 2๋ฒ๊ณผ 3๋ฒ์ ๊น์ด๋ 1์ด๋ค.
- ๋ ๋ฒจ : ํธ๋ฆฌ ๊ตฌ์กฐ์์ ๊ฐ์ ๊น์ด๋ฅผ ๊ฐ์ง ๋ธ๋๋ฅผ ๋ฌถ์ ๊ฒ. ๋ฟ๋ฆฌ ๋ธ๋ 1๋ถํฐ ์์ํ๋ค.
  - ์ ์ฌ์ง์ ์๋ก ๋ค๋ฉด, 2๋ฒ๊ณผ 3๋ฒ์ ๋ ๋ฒจ์ 2์ด๋ค.
- ๋์ด : ๋ฆฌํ ๋ธ๋๋ฅผ ๊ธฐ์ค์ผ๋ก ํด๋น ๋ธ๋๊น์ง ๋จ์ด์ง ์ ๋
  - ์ ์ฌ์ง์ ์๋ก ๋ค๋ฉด, 2๋ฒ๊ณผ 3๋ฒ์ ๋์ด๋ 2์ด๋ค.
- ์๋ธ ํธ๋ฆฌ : ํฐ ํธ๋ฆฌ ์์์ ๋น์ทํ ํธ๋ฆฌ ๊ตฌ์กฐ๋ฅผ ๊ฐ์ง ์์ ํธ๋ฆฌ

## ํธ๋ฆฌ์ ํน์ง

- ํธ๋ฆฌ์๋ ์ฌ์ดํด์ด ์กด์ฌํ  ์ ์๋ค. (๋ง์ฝ ์ฌ์ดํด์ด ๋ง๋ค์ด์ง๋ค๋ฉด, ๊ทธ๊ฒ์ ํธ๋ฆฌ๊ฐ ์๋๊ณ  ๊ทธ๋ํ๋ค)
- ๋ชจ๋  ๋ธ๋๋ ์๋ฃํ์ผ๋ก ํํ์ด ๊ฐ๋ฅํ๋ค.
- ๋ฃจํธ์์ ํ ๋ธ๋๋ก ๊ฐ๋ ๊ฒฝ๋ก๋ ์ ์ผํ ๊ฒฝ๋ก ๋ฟ์ด๋ค.
- ๋ธ๋์ ๊ฐ์๊ฐ N๊ฐ๋ฉด, ๊ฐ์ ์ N-1๊ฐ๋ฅผ ๊ฐ์ง๋ค.
- ํธ๋ฆฌ๋ ๊ฐ ํญ๋ชฉ๋ค์ ๊ณ์ธต์ ์ผ๋ก ๊ตฌ์กฐํํ  ๋ ์ฌ์ฉํ๋ ๋น์ ํ ์๋ฃ๊ตฌ์กฐ์ด๋ฉฐ ๋ถ๋ชจ์ ์์์ ๊ณ์ธต์ ์ธ ๊ด๊ณ์ด๋ค.
- ํธ๋ฆฌ ๊ตฌ์กฐ๋ ๋ฐ์ดํฐ ์ ์ฅ์ ์๋ฏธ๋ณด๋ค๋ ์ ์ฅ๋ ๋ฐ์ดํฐ๋ฅผ ๋ ํจ๊ณผ์ ์ผ๋ก ํ์ํ๊ธฐ ์ํด ์ฌ์ฉ๋๋ค.

## ํธ๋ฆฌ ์ํ ๋ฐฉ์

ํธ๋ฆฌ๋ฅผ ์ํํ๋ ๋ฐฉ์์ ์ด 4๊ฐ์ง๊ฐ ์๋ค.

1. ์ ์ ์ํ(pre-order)

   ๊ฐ ๋ฃจํธ๋ฅผ ์์ฐจ์ ์ผ๋ก ๋จผ์  ๋ฐฉ๋ฌธํ๋ ๋ฐฉ์์ด๋ค.

   ![Preorder-traversal.gif](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5850bf23-7506-44ec-8aa3-2392445157c0/Preorder-traversal.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220827%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220827T061059Z&X-Amz-Expires=86400&X-Amz-Signature=b3d58d9c12475788041f205475c7c9a01e1cb1d5d88a66510fc0332501dd5ab5&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Preorder-traversal.gif%22&x-id=GetObject)

   ๋ฃจํธ๋ธ๋ โ ์ผ์ชฝ ์๋ธํธ๋ฆฌ โ ์ค๋ฅธ์ชฝ ์๋ธํธ๋ฆฌ ์์๋ก ์ํํ๋ ๋ฐฉ์์ด๋ฉฐ

   `๊น์ด ์ฐ์  ์ํ`๋ผ๊ณ ๋ ๋ถ๋ฆฐ๋ค.

   > F โ B โ A โ D โ C โ E โ G โ I โ H

2. ์ค์ ์ํ(in-order)

   ์ผ์ชฝ ํ์ ํธ๋ฆฌ๋ฅผ ๋ฐฉ๋ฌธ ํ ๋ฃจํธ๋ฅผ ๋ฐฉ๋ฌธํ๋ ๋ฐฉ์์ด๋ค.

   ![Inorder-traversal.gif](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f6b601cf-9bd3-41ee-b544-ad42b5a09602/Inorder-traversal.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220827%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220827T061122Z&X-Amz-Expires=86400&X-Amz-Signature=67c78bed2ebaf5bfe23f3ad2b520d4de0854c45da539ffdf7d66456e4c98e8d2&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Inorder-traversal.gif%22&x-id=GetObject)

   ์ผ์ชฝ ์๋ธํธ๋ฆฌ โ ๋ธ๋ โ์ค๋ฅธ์ชฝ ์๋ธํธ๋ฆฌ ์์๋ก ์ํํ๋ ๋ฐฉ์์ด๋ฉฐ `๋์นญ ์ํ`๋ผ๊ณ ๋ ๋ถ๋ฆฐ๋ค.

   > A โ B โ C โ D โ E โ F โ G โ H โ I

3. ํ์ ์ํ(post-order)

   ์ผ์ชฝ ํ์ ํธ๋ฆฌ๋ถํฐ ํ์๋ฅผ ๋ชจ๋ ๋ฐฉ๋ฌธ ํ ๋ฃจํธ๋ฅผ ๋ฐฉ๋ฌธํ๋ ๋ฐฉ์์ด๋ค.

   ![Postorder-traversal.gif](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/986ff70f-35dc-47a2-91da-e4c854e65641/Postorder-traversal.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220827%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220827T061132Z&X-Amz-Expires=86400&X-Amz-Signature=24d10ca7c6a9676b3ec634d3a831092e515207e867b646e20c70fcdb165e25cd&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Postorder-traversal.gif%22&x-id=GetObject)

   ์ผ์ชฝ ์๋ธํธ๋ฆฌ โ ์ค๋ฅธ์ชฝ ์๋ธํธ๋ฆฌ โ ๋ธ๋ ์์๋ก ์ํํ๋ ๋ฐฉ์์ด๋ค.

   > A โ C โ E โ D โ B โ H โ I โ G โ F

4. ๋ ๋ฒจ ์ํ(level-order)

   `๋๋น ์ฐ์  ์ํ(BFS)`๋ผ๊ณ ๋ ํ๋ค.

   ๋ฃจํธ๋ถํฐ ๊ณ์ธต๋ณ๋ก ๋ฐฉ๋ฌธํ๋ ๋ฐฉ์์ด๋ค.

   ![Breadth-First-Search-Algorithm.gif](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/45895cb3-e10e-41da-ba63-8f1d859adcea/Breadth-First-Search-Algorithm.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220827%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220827T061143Z&X-Amz-Expires=86400&X-Amz-Signature=1a9b741002a588d1b7039b32e68d6033b42cc0b6c5154d9c1471259b29aa460e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Breadth-First-Search-Algorithm.gif%22&x-id=GetObject)

   ๋ฃจํธ โ ์ผ์ชฝ โ ์ค๋ฅธ์ชฝ ์์ผ๋ก 1๊ณ์ธต์ฉ ๋ด๋ ค์ค๋ฉด์ ์ํํ๋ ๋ฐฉ์์ด๋ค.

   > F โ B โ G โ A โ D โ I โ C โ E โ H

## ์ด์ง ํธ๋ฆฌ (Binary Tree)

- ํธ๋ฆฌ ๊ตฌ์กฐ๋ ์ฌ๋ฌ ๊ฐ์ง ์ ํ์ด ์๋๋ฐ, ๊ทธ ์ค ๊ฐ์ฅ ๊ธฐ๋ณธ์ด ๋๋ ํธ๋ฆฌ๋ ์ด์ง ํธ๋ฆฌ ๊ตฌ์กฐ์ด๋ค.
- ์ด์ง ํธ๋ฆฌ๋ 2๊ฐ ์ดํ์ ์์ ๋๋ฅด๋ฅผ ๊ฐ์ง๋ค. (์์ ๋ธ๋๊ฐ ์๊ฑฐ๋ 1๊ฐ์ ์์๋ธ๋๋ง ๊ฐ์ง๋ ๊ฒ๋ ๊ฐ๋ฅํ๋ค!)
- 2๊ฐ์ ์์ ๋ธ๋ ์ค์์ ์ผ์ชฝ์ ๋ธ๋๋ฅผ Left Node๋ผ๊ณ  ํ๊ณ , ์ค๋ฅธ์ชฝ ๋ธ๋๋ฅผ Right Node ๋ผ๊ณ  ํ๋ค.

## ์ด์ง ํธ๋ฆฌ์ ์ข๋ฅ

### ํธํฅ ์ด์ง ํธ๋ฆฌ (Skewed Binary Tree)

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/dd047cb4-940f-437d-8512-b41dcb614e28/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220827%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220827T061200Z&X-Amz-Expires=86400&X-Amz-Signature=7b0c16703185d1747b5c13c3ed5a94db20c8fd2907437603380f4b41f74d125d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

`ํธํฅ ์ด์ง ํธ๋ฆฌ`๋ ํ๋์ ์ฐจ์๋ก๋ง ์ด๋ฃจ์ด์ ธ ์๋ ๊ฒฝ์ฐ๋ฅผ ์๋ฏธํ๋ค.

์ด๋ฌํ ๊ตฌ์กฐ๋ ๋ฐฐ์ด๊ณผ ๊ฐ์ ์ ํ ๊ตฌ์กฐ์ด๋ฏ๋ก ํ์ ์ ๋ชจ๋  ๋ฐ์ดํฐ๋ฅผ ์ ๋ถ ํ์ํด์ผํ๋ค๋ ๋จ์ ์ด ์์ด ํจ์จ์ ์ด์ง ๋ชปํ๋ค.

### ํฌํ ์ด์ง ํธ๋ฆฌ (Full Binary Tree)

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1e5e28a5-2136-46b9-b750-983e8530c2b1/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220827%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220827T061213Z&X-Amz-Expires=86400&X-Amz-Signature=d39769ed45b92ff6a3172f60ebb71830120e0184568efd131ff02844e494a1c1&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

`ํฌํ ์ด์ง ํธ๋ฆฌ`๋ โLeaf Nodeโ๋ฅผ ์ ์ธํ ๋ชจ๋  ๋ธ๋์ ์ฐจ์๊ฐ 2๊ฐ๋ก ์ด๋ฃจ์ด์ ธ ์๋ ๊ฒฝ์ฐ๋ฅผ ์๋ฏธํ๋ค. ์ด ๊ฒฝ์ฐ ํด๋น ์ฐจ์์ ๋ช ๊ฐ์ ๋ธ๋๊ฐ ์กด์ฌํ๋์ง ๋ฐ๋ก ์ ์ ์์ผ๋ฏ๋ก ๋ธ๋์ ๊ฐ์๋ฅผ ํ์ํ  ๋ ์ฉ์ดํ๋ค.

<aside>
๐ก root node : A
leaf node : H, I, J, K, L, M, N, O

</aside>

### ์์  ์ด์ง ํธ๋ฆฌ (Complete Binary Tree)

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/861e0405-a653-4894-931e-a6a563dd17b3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220827%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220827T061225Z&X-Amz-Expires=86400&X-Amz-Signature=abc4b113ed22e54e841bd2c0c4f8119748b4639fa95c7d7226cd84a4a040a04c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

`ํฌํ ์ด์ง ํธ๋ฆฌ`์ ๊ฐ์ ๊ฐ๋์ผ๋ก ํธ๋ฆฌ๋ฅผ ์์ฑํ์ง๋ง, ๋ชจ๋  ๋ธ๋๊ฐ ์ผ์ชฝ๋ถํฐ ์ฐจ๊ทผ์ฐจ๊ทผ ์์ฑ๋๋ ์ด์ง ํธ๋ฆฌ๋ฅผ ์๋ฏธํ๋ค. (ํ ์ ๋ ฌ์ ์์  ์ด์ง ํธ๋ฆฌ์ ์ผ์ข)

## ํธ๋ฆฌ ๊ตฌ์กฐ ๊ตฌํ

```jsx
class Tree {
  //tree์ constructor๋ฅผ ์์ฑ : tree์ ์์ ๋ธ๋๋ค์ ์๋ฆฌ๋จผํธ๋ก ๋ด์ children ๋ฐฐ์ด๋ก ์ ์ธ
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  // ์์ ๋ธ๋ ์์ฑ ๋ฉ์๋ ๊ตฌํ : new ํค์๋๋ก ์์ ๋ธ๋๋ฅผ ์์ฑ ํ ํ, children ๋ฐฐ์ด์ push
  insertNode(value) {
    const childNode = new Tree(value);
    this.children.push(childNode);
  }

  // tree์์ value๊ฐ์ ํ์ํ๊ธฐ ์ํ ๋ฉ์๋ ๊ตฌํ
  contains(value) {
    // ํ์ฌ ๋ธ๋์ value ๊ฐ์ด ์ฐพ๋ ๊ฐ๊ณผ ์ผ์นํ๋ค๋ฉด true ๋ฐํ
    if (this.value === value) {
      return true;
    }

    // ์์ ๋ธ๋์์ value๊ฐ์ ํ์ํ๊ธฐ ์ํด ๋ฐ๋ณต๋ฌธ๊ณผ ์ฌ๊ทํจํด ์ฌ์ฉ
    for (let childNode of this.children) {
      if (childNode.contains(value)) {
        return true;
      }
    }
    // ์กฐ๊ฑด์ ํด๋นํ์ง ์์ผ๋ฉด false ๋ฐํ
    return false;
  }
}
```

## ์ฌ์ฉ ์

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

  // ์ค์์ํ
  InOrderTree(node) {
    if (!node) {
      return;
    }

    this.InOrderTree(node.leftNode);
    console.log(node.val);
    this.InOrderTree(node.rightNode);
  }

  // ์ ์์ํ
  preOrderTree(node) {
    if (!node) {
      return;
    }

    console.log(node.val);
    this.preOrderTree(node.leftNode);
    this.preOrderTree(node.rightNode);
  }

  // ํ์์ํ
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

## ์ถ๋ ฅ ํ๋ฉด

![screen](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2899a063-3890-4b68-b6bb-654dddca622e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220827%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220827T061804Z&X-Amz-Expires=86400&X-Amz-Signature=ac0223a05d0a9db63d191c19d766e7331a76ff3e174436556d2aea13a212e3a7&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)
