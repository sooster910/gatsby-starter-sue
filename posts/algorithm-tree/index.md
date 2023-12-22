---
title: Tree  
slug: algorithm-tree
author: Hyunsu Joo
published: 2023-12-22
lastUpdated: 2023-12-22
draft: false
image: ./algorithm-tree.png
imageAlt: algorithm-tree
tags: ['Algorithm Study']

---

골든래빗 코딩 테스트 합격자 되기 파이썬 편의 9장 써머리가 포함되어 있습니다.

### 개념 정리 

#### 이진트리 표현하기

- 이진 트리는 트리의 한 종류로 모든 노드의 최대 차수가 2를 넘지 않는 트리. 즉, 최대 2개의 자식 노드를 가질 수 있다. (자식 노드 0,1,2 가능)
- 이진 트리는 배열이나 포인터로 구현 가능 

**이진트리 배열로 표현**

- 루트 노드는 배열 인덱스 1 번에 저장
- 왼쪽 자식 노드 : 부모 노드 배열 인덱스 *2
- 오른쪽 자식 노드 : 부모 노드 배열 인덱스 *2+1

> TIP .
**배열의 경우 인덱스가 0부터 시작하므로 왼쪽자식 노드는 `부모 노드 배열 인덱스*2+1`, 오른쪽 자식노드는 `부모 노드 배열 인덱스*2+2`**
>

- 이진트리 생성 시간복잡도 : O(n)

#### 이진트리 순회하기

`[1,2,3,4,5]` 가 주어졌을 때, 
- 전위 순회(Pre-order) : 부모 노드가 (pre) 먼저 순회된다.  `1-2-4-5-3-6-7` 순서.
 
- 중위 순회(In-order) : 부모 노드가 중간이 된다. 왼쪽 차일드에서 에서 리턴 되어 나온 다음의 순서가 된다.`4-2-5-1-6-3-7` 순서.
- 후위 순회(Post-order): 부모 노드가 마지막이 된다. 오른쪽에서 리턴 되어 나온 다음의 순서가 된다.
`4-5-2-6-7-3-1` 순서.

**예제 몸풀기 문제 26. 트리 순회 참고**
`[1,2,3,4,5]` 배열이 주어졌을 때, 



```javascript

function solution(nums) {
  return [
    preorder(0, nums, []).join(" "),
    inorder(0, nums, []).join(" "),
    postorder(0, nums, []).join(" "),
  ];
}

/**
 *
 * 0부터 시작하는 경우  인덱스 설정시 기존 설정에서 +1로 세팅
 * preorder: 부모가 pre가 된다.
 *
 * @param {*} root
 * @param {*} nums
 * @param {*} result
 * @returns
 */
function preorder(root, nums, result) {
  if (!nums[root]) return;
  result.push(nums[root]);
  preorder(root * 2 + 1, nums, result); //left
  preorder(root * 2 + 2, nums, result);
  return result;
}

/**
 * inorder :부모가 중간이 된다. 왼쪽에서 리턴되어 나온 다음의 순서.
 * @param {*} root
 * @param {*} nums
 * @param {*} result
 * @returns
 */
function inorder(root, nums, result) {
  if (!nums[root]) return;
  inorder(root * 2 + 1, nums, result);
  result.push(nums[root]);
  inorder(root * 2 + 2, nums, result);
  return result;
}

/**
 * postorder: 부모가 마지막이 된다. 오른쪽에서 리턴되어 나온 다음의 순서.
 * @param {*} root
 * @param {*} nums
 * @param {*} result
 * @returns
 */
function postorder(root, nums, result) {
  if (!nums[root]) return;
  postorder(root * 2 + 1, nums, result);
  postorder(root * 2 + 2, nums, result);
  result.push(nums[root]);
  return result;
}

assert.deepEqual(solution([1, 2, 3, 4, 5, 6, 7]), [
  "1 2 4 5 3 6 7",
  "4 2 5 1 6 3 7",
  "4 5 2 6 7 3 1",
]);

```

#### 이진 트리 탐색하기 

- 이진 탐색 트리(Binary Search Tree)는 이진 트리(Binary Tree)에서 원하는 노드를 효율적으로 탐색 할 수 있도록 만든 트리 이다. 

**이진 탐색 트리 구축하기**

- 포인트는 데이터를 하나씩 삽입 하면서, 이진 트리 탐색을 구축. (삽입과 동시에 정렬)
- 하나씩 삽입 할 때 출발은 루트 노드 부터 탐색하여 부모 노드 보다 작으면 왼쪽 차일드, 부모 노드 보다 크다면 오른쪽 차일드에 삽입한다. 
- 만약 삽입하려는 자리에 이미 차일드가 있다면, 그 차일드를 부모노드로 간주하고 값의 비교를 통해 왼쪽 또는 오른쪽 차일드로 탐색하여 더 이상 차일드가 없는 곳에 삽입한다.

**이진 탐색 트리 탐색하기**
- 탐색 알고리즘에서 탐색 효율을 개선하는 방법은 탐색 대상이 아닌 노드를 한번에 많이 제외.
- 이진 탐색 트리에서도 이 방법이 적용 가능-> 찾으려는 데이터가 현재 노드보다 크면 오른쪽, 작으면 왼쪽을 탐색하여 데이터크기의 절반을 줄일 수 있음.

1. 찾으려는 값이 현재노드갑과 같으면 탐색 종료. 크면 오른쪽 탐색
2. 찾으려는 값이 현재 노드 값보다 작으면 왼쪽 노드 탐색.
3. 값을 찾으면 종료.

> **이진 탐색 트리 시간 복잡도**
    - 트리 균형에 의존 
    - 노드의 차수가 비슷하게 유지 & 자식 노드수가 비슷하게 유지 되는 경우 균형이 잡혔다라고 간주. 
    - 균형이 잡힌 트리 : O(logN) 
    - 예) 균형 이진 탐색 트리(Balanced Binary Search Tree)
    - 균형이 맞지 않은 트리:O(N)
    - 예) 변질 트리( Degenerate Binary Tree) : O(N)
>
 


### 문제 풀기

#### 1. 예상 대진표  (출처 : 프로그래머스 )

이 문제의 포인트는
```
 [1 2] [3 4] [5 6] [7 8]
  [1]   [2]   [3]   [4]
  [1]   [2]
```

 주어진 차례에서 2로 나누어 떨어지는 값을 통해 다음 대진 순서가 된다.

```javascript
/**

 *
 * @param {*} n
 * @param {*} a
 * @param {*} b
 * @returns
 */
function solution(n, a, b) {
  let cnt = 0;
  // 올림을 사용하여 2로 나누어 떨어지는 값을 만든다. a 와 b가 같을 때까지
  while (a !== b) {
    a = Math.ceil(a / 2); //round도 상관없음
    b = Math.ceil(b / 2);
    cnt += 1;
  }
  return cnt;
}

```

#### 2.다단계 칫솔 판매

내가 생각하는 문제의 포인트는 판매원의 추천인들을 따라가면서 이익을 분배하는 과정에서 트리 구조를 어떤 자료구조나 알고리즘으로 코드를 구현할 것인가와 이익을 분배할 때 이익의 10%는 조직의 각 멤버가 가진 이익에서 10%가 아닌 처음 판매원으로 부터 나온 이익금의 10%, 이 이익금의 10%로 이익금을 분배한다.

트리구조는 인접 리스트를 활용하여 추천인을 따라갈 수 있게 O(1)의 복잡도로 구현하는건 어렵지 않았다.
문제는 추천인이 있을때 while문으로 추천인이 없을 때까지 이익을 분배하는것인데, 이익 분배 계산을 현재 추천인이 받을 이익의 10%를 계산, 판매자는 10%를 뺀 금액의 이익을 계산해야 한다. 

**문제에서 언급한 이익이 1보다 작은경우는 분배하지 않는다** 를 while문의 조건으로 순회를 하지 않는 것으로 해야 시간초과를 면 할수 있다. 
```javascript

function solution(enroll, referral, seller, amount) {
    const adjacentList = new Map();
    enroll.forEach((seller, i) => {
        adjacentList.set(seller, { referral: referral[i], profit: 0 });
    });
   for( const idx in seller){
       let initialAmount = amount[idx] * 100; 
       let referral = adjacentList.get(seller[idx]);
       let profit = 0;
       while( initialAmount>=1 && referral){
           profit = Math.floor(initialAmount*0.1) //10%
            referral.profit+= initialAmount-profit //10%
           initialAmount = profit
           referral = adjacentList.get(referral.referral);
       }
   }
  
    return enroll.map(seller => adjacentList.get(seller).profit);
       
}


```


#### 3.미로탈출 

#### 4. 양과늑대

#### 5.길 찾기 게임



