---
title: 백트래킹
slug: algorithm-backtracking
author: Hyunsu Joo
published: 2024-01-27
lastUpdated: 2024-01-27
draft: false
image: ./backtracking.png
imageAlt: algorithm-backtracking
tags: ['algorithm']
---

- 백트래킹 알고리즘 핵심은 '해가 될 가능성을 판단'하는 것이다.
- 여기서의 가능성은 유망 함수를 정의하면서 판단한다.

문제를 풀면서 익숙해지는게 중요한것 같다.

### 문제 풀이

#### [피로도](https://school.programmers.co.kr/learn/courses/30/lessons/87946)

> 문제
> XX게임에는 피로도 시스템(0 이상의 정수로 표현합니다)이 있으며, 일정 피로도를 사용해서 던전을 탐험할 수 있습니다. 이때, 각 던전마다 탐험을 시작하기 위해 필요한 "최소 필요 피로도"와 던전 탐험을 마쳤을 때 소모되는 "소모 피로도"가 있습니다. "최소 필요 피로도"는 해당 던전을 탐험하기 위해 가지고 있어야 하는 최소한의 피로도를 나타내며, "소모 피로도"는 던전을 탐험한 후 소모되는 피로도를 나타냅니다. 예를 들어 "최소 필요 피로도"가 80, "소모 피로도"가 20인 던전을 탐험하기 위해서는 유저의 현재 남은 피로도는 80 이상 이어야 하며, 던전을 탐험한 후에는 피로도 20이 소모됩니다.
> 이 게임에는 하루에 한 번씩 탐험할 수 있는 던전이 여러개 있는데, 한 유저가 오늘 이 던전들을 최대한 많이 탐험하려 합니다. 유저의 현재 피로도 k와 각 던전별 "최소 필요 피로도", "소모 피로도"가 담긴 2차원 배열 dungeons 가 매개변수로 주어질 때, 유저가 탐험할수 있는 최대 던전 수를 return 하도록 solution 함수를 완성해주세요.

이 문제는 각 던전을 탐험하기 직전 현재 피로도와 최소 필요 피로도와를 계산하여 가지치기를 한다.

여기서 유망함수는 이미 방문한 던전을 확인하는 조건과
현재 피로도가 최소필요피로도보다 더 작다는 조건을 포함한다.

```javascript
if (visited.has(i)) continue
// 현재피로도와 최소 필요 피로도 비교
const [required, consumed] = dungeons[i]
if (cur < required) continue
```

```javascript
function solution(k, dungeons) {
  let max = 0
  let visited = new Set()

  let numOfDungeons = dfs(0, k, 0, visited, 0)
  return numOfDungeons

  function dfs(level, cur, cnt, visited, max) {
    for (let i = 0; i < dungeons.length; i++) {
      if (visited.has(i)) continue
      // 현재피로도와 최소 필요 피로도 비교
      const [required, consumed] = dungeons[i]

      if (cur < required) continue

      visited.add(i)
      cnt += 1
      max = Math.max(max, visited.size)
      max = dfs(level + 1, cur - consumed, cnt, visited, max)
      visited.delete(i)
    }
    return max
  }
}
```

#### [N-Queen](https://school.programmers.co.kr/learn/courses/30/lessons/12952) 출처: 프로그래머스

> **문제 간략 설명**
> 가로, 세로 길이가 n인 정사각형으로된 체스판이 있습니다. 체스판 위의 n개의 퀸이 서로를 공격할 수 없도록 배치하고 싶습니다.체스판의 가로 세로의 세로의 길이 n이 매개변수로 주어질 때, n개의 퀸이 조건에 만족 하도록 배치할 수 있는 방법의 수를 return하는 solution함수를 완성해주세요.
> 제한사항
> 퀸(Queen)은 가로, 세로, 대각선으로 이동할 수 있습니다.
> 예를 들어서 n이 4인경우 다음과 같이 퀸을 배치하면 n개의 퀸은 서로를 한번에 공격 할 수 없습니다.

퀸의 공격 범위에 들어가는 경우인 같은 행, 같은 열, 같은 대각선이라는 점과 문제에서 가로세로 길이 n 과 n개의 퀸을 놓는다 라는 점을 그냥 넘기면 안된다. 이 전 퀸이 위치한 행과 열에는 퀸을 놓을 수 없다는게 확실하니 결국 1 행에 1개의 퀸 만 놓을 수 있다.
그럼 2d 좌표를 순회하기 위해 이중for문을 사용할 필요가 없어진다. 주어진 행에서 어느 열에 퀸을 놓으면 되는가를 고민하면 된다.

```javascript
function solution(n) {
  let cnt = 0
  const isVisited_col = new Array(n).fill(-1) // isVisited_col[i] = j : i번째 말 (행) 은 j번째 열에 놓여있다.
  function isValidToPutQueen(currentX, currentY, prevX, prevY) {
    //chessboard 에 8방향으로 퀸이 있는지 확인한다.
    //퀸이 있다면 false를 반환합니다.
    // 1. 같은 열에 퀸이 있는지 확인.
    if (currentY === prevY) return false
    // 2. 대각선 오른쪽에 퀸이 있는지 확인
    if (currentX + currentY === prevX + prevY) return false
    // 3. 대각선 왼쪽에 퀸이 있는지 확인
    if (currentX - currentY === prevX - prevY) return false
    return true
  }

  function recursiveNQueen(level) {
    if (level === n) {
      cnt += 1 //한가지 방법의 수를 찾음
      return
    }

    //백트래킹을 적용한 버전
    // nThQueen 을 놓을 수 있는 위치(열 = col)를 찾는다.
    // 찾는 다는것은 탐색한다는 것과 같은 의미이며 , 여기서 백트래킹은 탐색을 할 때,
    // 탐색할 필요가 없는 경우를 미리 제거하는 것이다.

    for (let i = 0; i < n; i++) {
      let isFinalValid = true // 선택할 수 있는 열인지 확인하기 위한 작업을 들어가기 전에 isFinalValid를 true로 초기화 해줍니다.

      for (let row = 0; row < level; row++) {
        // 착가하지 말것 : row를 모두 확인해서 퀸이 없어야 i자리에 퀸을 놓을수 있습니다.
        if (!isValidToPutQueen(level, i, row, isVisited_col[row])) {
          isFinalValid = false
          // isVisited_col[level] = i;
          // false라면 더이상 탐색 할 필요가 없습니다. 왜냐하면 모두 valid해야 최종적으로 valid하기 때문이에요.
          break
        }
      }

      if (!isFinalValid) continue
      // 퀸을 놓을 수 있음.
      isVisited_col[level] = i

      recursiveNQueen(level + 1, cnt)
      isVisited_col[level] = -1
    }
  }
  recursiveNQueen(0)
  return cnt
}
```

### 회고

이번주는 문제를 거의 풀지 못했다. 남은 기간에 보충 해서 풀어봐야겠다.
