---
title: 그리디 알고리즘
slug: algorithm-greedy
author: Hyunsu Joo
published: 2024-03-02
lastUpdated: 2024-03-02
draft: false
image: ./algorithm_greedy.png
imageAlt: algorithm-greedy
tags: ['Algorithm Study', 'algorithm', 'data-structure']
---

- 골든래빗 코딩 테스트 합격자 되기 파이썬 편의 15장 써머리가 포함되어 있습니다.
- 마지막 챕터이다. 같이 스터디한 멤버들과 팀장님께 고마운 인사를 올린다.
- 문제부터 풀면서 greedy에 익숙해 지는 것이 목표이다. 


### 몸풀기 문제 
#### 거스름돈 주기 

> 거스름돈 amount가 있을 때 화폐단위 [1,10,50,100] 을 최소한의 사용한 화폐리스트를 반환하는 solution() 함수를 반환하세요.
>제약조건 
>- 반환하는 값의 화폐단위는 내림차순

화폐단위를 최소한으로 사용하기 위해선, 큰 단위의 화폐를 이용하여 거스름돈을 준다. 

오름차순 정렬 부분의 시간 복잡도가 가장 높으므로 O(N)의 시간복잡도를 가진다. 

```javascript
function change_coin(amount){
    const answer = [];
    const changes = [1, 10, 50, 100]

    changes.sort((a,b)=> b-a)

    for(const c of changes){
        const count = Math.floor(amount/c);
        amount = amount % c;
        for(let i=0; i<count; i++){
            answer.push(c)
        }
    }
    return answer
}

console.log(change_coin(123))
console.log(change_coin(350)) 
```

#### 부분 배낭 문제 

>문제설명
>무게와 가치가 있는 짐 items와 배낭 weight_limit이 주어질 때, 부분 배낭문제를 푸는 solution함수를 작성해 주세요. 
>제약조건
>1<=`weight_limit` <=10,000
>1<=items.length<=1,000

- 주어진 무게 제한을 초과하지 않으면서 가치가 최대가 되도록 물건을 넣는 문제
- 각 물건은 무게와 가치로 표현된다.
- 물건은 쪼갤 수 있으므로 물건의 일부분이 담길 수 있다.
- 시간복잡도는 정렬로 인해 O(nlogn) 이 된다.  
```javascript

function fractional_knapsack(items, limit) {
  let total_v = 0;
  // 무게당 가치 계산
  items.forEach((item) => item.push(item[1] / item[0]));
  // 무게당 가치로 내림차순 정렬
  items.sort((a, b) => b[2] - a[2]);
  for (const [w, v, _v] of items) {
    if (w <= limit) {
      total_v += v;
      limit -= w;
    } else {
      total_v += _v * limit;
      break;
    }
  }
  return Math.round(total_v * 100) / 100;
}

console.log(
  fractional_knapsack(
    [
      [10, 19],
      [7, 10],
      [6, 10],
    ],
    15,
  ),
); //27.33
console.log(
  fractional_knapsack(
    [
      [10, 60],
      [20, 100],
      [30, 120],
    ],
    50,
  ),
); //240

```

#### 예산 [문제 출처: 프로그래머스](https://school.programmers.co.kr/learn/courses/30/lessons/12982)

>문제설명
>부서별로 신청한 금액이 들어있는 배열 d와 예산 budget이 매개변수로 주어질 때, 최대 몇 개의 부서에 물품을 지원할 수 있는지 return 하도록 solution 함수를 완성해주세요.
>
>제한사항
d는 부서별로 신청한 금액이 들어있는 배열이며, 길이(전체 부서의 개수)는 1 이상 100 이하입니다.
d의 각 원소는 부서별로 신청한 금액을 나타내며, 부서별 신청 금액은 1 이상 100,000 이하의 자연수입니다.
budget은 예산을 나타내며, 1 이상 10,000,000 이하의 자연수입니다.
>


- 최대 많은 부서에 물품 지원을 하기 위해선 적게 요청한 예산 순으로 먼저 계산한다. 
- 예산이 남아있는 동안 요청한 예산을 더함
- 현재 사용한 예산이 주어진 예산 보다 작으면 부서의 수++
- 현재 사용한 예산이 주어진 예산 보다 크면 종료한다.
- 시간복잡도 O(nlogn)

```javascript
function solution(d, budget) {
  return d
    .sort((a, b) => a - b)
    .reduce((cnt, b) => {
      return (cnt += (budget -= b) >= 0);
    }, 0);
}

console.log(solution([1, 3, 2, 5, 4], 9)); //3
console.log(solution([2, 2, 3, 3], 10)); //4

```

#### 구명보트 [문제 출처: 프로그래머스](https://school.programmers.co.kr/learn/courses/30/lessons/42885)

- 쉬운듯 하면서도 브루트포스로 접근 할 때 어떻게 하면 2명을 weight에 가장 가깝게 채움을 구현하기 위해 필요한 전략이 쉽게 떠오르진 않았다. 
- 투포인터를 이용한 풀이로 최대 2명이고, limit에 최대한 가깝게 만들기 가장 무거운 사람과 가장 가벼운 사람을 같이 태운다.

```javascript
function solution(people, limit) {
    var answer = 0;
    let left = 0;
    let right = people.length-1;
    people.sort((a,b)=>a-b)
    //투포인터 
    while(left<right){
        // 두명이 같이 탈 수 있는 조건 : 둘의 합이 limit보다 작거나 같아야함
        // 같이 탈 수 있으면 left와 right를 한칸씩 옮겨줌
        if(people[left] + people[right] <= limit){
            answer+=1
            left+=1;
            right-=1;
        }else{
            //같이 탈 수 없는 경우 : limit을 넘는 경우 
            // 더 작은 사람을 태워야 함 . 
            // right를 옮기면서, 큰 사람은 혼자 타게 함 
            right-=1;
            answer+=1
        }    
    }
    // 마지막 남은 한명 태우기
    if(left===right){
        answer+=1
    }
    return answer
}

console.log(solution([70, 50, 80, 50],100)) //3
console.log(solution([70, 80, 50],100)) //3


```

#### 귤고르기 [문제 출처: 프로그래머스](https://school.programmers.co.kr/learn/courses/30/lessons/138476)

>문제설명
>경화가 한 상자에 담으려는 귤의 개수 k와 귤의 크기를 담은 배열 tangerine이 매개변수로 주어집니다. 경화가 귤 k개를 고를 때 크기가 서로 다른 종류의 수의 최솟값을 return 하도록 solution 함수를 작성해주세요.
>1 ≤ k ≤ tangerine의 길이 ≤ 100,000
>1 ≤ tangerine의 원소 ≤ 10,000,000

- 종류의 수를 최소화 하기 위해서 많은 개수를 가진 종류 부터 선택 한다.
- 

```javascript

function solution(k, tangerine) {
    let cnt =0;
    // mapper
    const mapper = {}
    //귤의 종류별로 개수 세기 
    tangerine.forEach((t)=> mapper[t]=(mapper[t]||0)+1)
    // sort 내림차순 - 종류의 수를 최소화하기 위해 많은 개수를 가진 종류부터 선택하기 위해 
    const sortedMapper =Object.entries(mapper).sort((a,b)=>b[1]- a[1])
    // loop하면서
    for (const [_, t] of sortedMapper){
        k-=t // 귤 담기 
        cnt+=1 // 종류 수 증가 
        if(k<=0) break // 귤 다 담았으면 종료
    }    
    return cnt;
}

console.log(solution(5, [3, 1, 4, 1, 5])) //3
console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3])) //3

```

#### 기지국 설치 

