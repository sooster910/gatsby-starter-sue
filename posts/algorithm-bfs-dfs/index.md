---
title: 그래프 문제 풀기
slug: algorithm-bfs-dfs
author: Hyunsu Joo
published: 2024-01-20
lastUpdated: 2024-01-20
draft: false
image: ./algorithm-bfs-dfs.png
imageAlt: algorithm-graph
tags: ['Algorithm Study', 'algorithm', 'data-structure']
---

저번 주에 익힌 개념을 바탕으로 이번주엔 프로그래머스 문제를 풀어보았다.

### 게임 맵 최단거리 - 프로그래머스

[문제 바로 보러 가기 (문제 출처 : 프로그래머스 )](https://school.programmers.co.kr/learn/courses/30/lessons/1844)

문제에서 요구하는 것은 상대 팀 진영인 `maps[n-1][n-1]` 에 도착 하기 까지 여러개의 경로중에더 더 빠른 경로를 찾는 것이다. 그 경로에 해당하는 칸의 개수인 최솟값을 구하는 것이 이 문제의 목표이다.

BFS는 경로가 여러개일 때 가장 짧은 경로에 도착에 대한 보장이 가능하기 때문에, 이 원리로 인해 `maps[n-1][n-1]` 에 가장 빨리 도착하여 연산 하게 되면 최소값이 된다.

출발 지점에서 특정 지점 까지의 경로에서 해당하는 칸의 개수를 트래킹 하는 방법은, 현재 지점에서 다음 인접 노드를, 다음 목표 지점으로 방문하기 위해 큐에 넣을 전 방문을 트래킹 하는 공간에 여태까지 왔던 경로
`다음 방문 지점 = 현재 지점 칸 개수 +1` 을 통해 업데이트를 해준다.

```javascript
/**
 * 최단 거리 : BFS 사용
 * 1. 4방향 탐색
 * 2. visited 배열을 통해 방문 지점 까지의 거리를 업데이트 한다. (이전 노드의 거리 + 1)
 * 3. queue에는 방문할 노드를 넣는다.
 * 4. 방문할 노드가 없을때까지 반복한다.
 */
function solution(maps) {
  let n = maps[0].length
  let m = maps.length
  let x = 0,
    y = 0
  let visited = Array.from({ length: maps.length }, () =>
    Array.from({ length: maps[0].length }, () => -1),
  )

  //북동남서
  const dx = [0, 1, 0, -1]
  const dy = [-1, 0, 1, 0] //북 동 남 서
  let queue = [[y, x]]
  visited[y][x] = 1

  while (queue.length) {
    const [y, x] = queue.shift()

    for (let i = 0; i < 4; i++) {
      let ny = dy[i] + y
      let nx = dx[i] + x
      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue // 범위 벗어나면 continue;
      if (maps[ny][nx] === 0) continue // 벽이면 continue
      if (visited[ny][nx] !== -1) continue //이미 방문한 노드면 continue
      queue.push([ny, nx]) //방문할 노드를 queue에 넣는다.
      visited[ny][nx] = visited[y][x] + 1 //방문처리시 이전 노드의 거리 +1
    }
  }
  return visited[m - 1][n - 1]
}
```

### 네트워크

[문제 바로 보러 가기 (문제 출처 : 프로그래머스 )](https://school.programmers.co.kr/learn/courses/30/lessons/43162)

문제에서 자료구조 특성에 대한 힌트를 얻을 수 있어야 한다.

> 문제 :
> 네트워크란 컴퓨터 상호 간에 정보를 교환할 수 있도록 연결된 형태를 의미합니다. 예를 들어, 컴퓨터 A와 컴퓨터 B가 직접적으로 연결되어있고, 컴퓨터 B와 컴퓨터 C가 직접적으로 연결되어 있을 때 컴퓨터 A와 컴퓨터 C도 간접적으로 연결되어 정보를 교환할 수 있습니다. 따라서 컴퓨터 A, B, C는 모두 같은 네트워크 상에 있다고 할 수 있습니다.
> 컴퓨터의 개수 n, 연결에 대한 정보가 담긴 2차원 배열 computers가 매개변수로 주어질 때, 네트워크의 개수를 return 하도록 solution 함수를 작성하시오.

여기서 A와 C가 간접적으로 연결되어 있다는 의미는 A-B-C로 연결이 된다. 이는 그래프에서 트리가 가지는 acyclic 특성이다.

네트워크의 개수는 곧 컴퓨터가 연결된 집합의 개념으로 볼 수 있으며 이는 곧 집합이 여러개가 될 수 있음을 의미 한다.

이런 특성으로 미루어 보아 BFS보다는 DFS를 통해 연결된 모든 컴퓨터를 탐색하고 끊기면 다른 지점에서 다시 연결된 컴퓨터를 탐색하는 과정을 거쳐야 한다.

탐색을 위해 주어진 인접 행렬에서 어떻게 탐색을 할 것인가도 중요하다.
computers[i][j] = 1이면 연결 되었다고 했으니,
index 개념으로 0번 컴퓨터와 연결된
총 3개의 컴퓨터가 있다는 걸 알게 된다.

```javascript
;[
  [1, 1, 0], //i=0 , 0번 컴퓨터의 인접 컴퓨터들
  [1, 1, 0], //i=1 , 1번 컴퓨터의 인접 컴퓨터들
  [0, 0, 1], // i=2 , 2번 컴퓨터의 인접 컴퓨터들
]
```

끊긴 지점 에서 다시 연결된 컴퓨터를 찾는 방법은 visited 공간을 통해 이미 탐색했던 컴퓨터는 탐색하지 않는다.

```javascript
if (!visited[i]) {
  dfs(i)
  cnt += 1
}
```

풀이

```javascript
function solution(n, computers) {
  const visited = Array.from({ length: n }, () => 0)
  let cnt = 0
  // 모든 컴퓨터 지점을 돌아야 함. 끊긴 네트워크에서 새로운 네트워크를 형성하기 위해
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i)
      cnt += 1
    }
  }
  return cnt
  function dfs(v) {
    visited[v] = 1
    ;(computers[v] || []).forEach((value, idx) =>
      !!value && !visited[idx] ? dfs(idx) : false,
    )
  }
}
```

### 배달

[문제 바로 보러 가기 (문제 출처 : 프로그래머스 )](https://school.programmers.co.kr/learn/courses/30/lessons/12978)

> 문제 지문 일부
> N개의 마을로 이루어진 나라가 있습니다. 이 나라의 각 마을에는 1부터 N까지의 번호가 각각 하나씩 부여되어 있습니다. 각 마을은 양방향으로 통행할 수 있는 도로로 연결되어 있는데, 서로 다른 마을 간에 이동할 때는 이 도로를 지나야 합니다. 도로를 지날 때 걸리는 시간은 도로별로 다릅니다. 현재 1번 마을에 있는 음식점에서 각 마을로 음식 배달을 하려고 합니다. 각 마을로부터 음식 주문을 받으려고 하는데, N개의 마을 중에서 K 시간 이하로 배달이 가능한 마을에서만 주문을 받으려고 합니다.
> 마을의 개수 N, 각 마을을 연결하는 도로의 정보 road, 음식 배달이 가능한 시간 K가 매개변수로 주어질 때, 음식 주문을 받을 수 있는 마을의 개수를 return 하도록 solution 함수를 완성해주세요.

문제에서 요구하는 것은 1번 마을 부터 K 시간 이하로 배달 가능한 마을의 개수를 찾는 것이다.

`마을이 양방향으로 통행 할 수 있는 점` 을 통해 양방향 그래프임을 알수 있다. 연결된 마을을 이동하면서 누적된 시간을 트래킹 및 특정 시간 이하인지 정보를 얻기 위해선 다익스트라와 BFS를 떠올릴 수 있다.

내가 접근 한 방법은 다익스트라의 개념인 에서 힙 자료구조인 heapify 로 효율화를 하지 않고, 큐를 통해 먼저 road 다음에 방문할 마을과 누적시간을 같이 저장한다.

이 문제는 계속되는 실패를 보게 되었는데 스터디 장 님을 통해 나의 아이디어와 구현에 모순을 깨닫게 되었다.

중요한 점은

- 노드의 방문 여부 뿐만 아니라, 그 노드에 도달하는 데 드는 최소 비용도 함께 고려해야 함.
- 구현 : visited 배열을 방문 여부 대신 해당 노드에 도달하는 최소 비용으로 사용

```javascript
function solution(N, road, K) {
  // adjacency list
  let adj_list = []
  for (const [from, to, w] of road) {
    if (!adj_list[from]) adj_list[from] = []
    adj_list[from].push([to, w])
    if (!adj_list[to]) adj_list[to] = []
    adj_list[to].push([from, w])
  }
  let MAX_K = 500_001
  let visited = Array.from({ length: N + 1 }, () => MAX_K)
  // bfs
  // queue
  let START = 1
  let queue = [[START, 0]]
  let pathSet = new Set()

  // while
  while (queue.length) {
    let [v, w] = queue.shift()

    //인근 마을
    adj_list[v]?.forEach((info, i) => {
      // queue에 넣을 때 [마을, 현재 가중치 + 합산 가중치  ]
      const [adj_v, adj_w] = info
      let future_w = w + adj_w
      if (future_w <= K && future_w < visited[adj_v]) {
        queue.push([adj_v, future_w])
        visited[adj_v] = future_w
      }
    })
  }

  return visited.filter((v) => v !== MAX_K).length
}
```

### 전력망을 둘로 나누기

[문제 바로 보러 가기 (문제 출처 : 프로그래머스 )](https://school.programmers.co.kr/learn/courses/30/lessons/86971)

> n개의 송전탑이 전선을 통해 하나의 트리 형태로 연결되어 있습니다. 당신은 이 전선들 중 하나를 끊어서 현재의 전력망 네트워크를 2개로 분할하려고 합니다. 이때, 두 전력망이 갖게 되는 송전탑의 개수를 최대한 비슷하게 맞추고자 합니다.
> 송전탑의 개수 n, 그리고 전선 정보 wires가 매개변수로 주어집니다. 전선들 중 하나를 끊어서 송전탑 개수가 가능한 비슷하도록 두 전력망으로 나누었을 때, 두 전력망이 가지고 있는 송전탑 개수의 차이(절대값)를 return 하도록 solution 함수를 완성해주세요.

문제에서 어려웠던 부분은 `전선들 중 하나를 끊어서 `를 어떻게 구현해야 할지 감이 잡히지 않는다는 것이다.
문제를 다시 파악하면 힌트를 얻을 수 있다.
문제에서 힌트로 트리 형태 가 주어졌다. 이를 통해 사이클이 없다는 점과 현재 노드 들은 연결되어 있음을 알 수 있다. 그리고 `wires`를 통해 어느 전선 노드가 이어 졌는지 명시적으로 알려져 있다. wires의 요소 즉 연결된 노드 두개를 전체 노드에서 제거 해줌으로써 `전선들 중 하나를 끊어서` 를 구현할 수 있다.

```javascript
function solution(n, wires) {
  let adj_list = Array.from({ length: n + 1 }, () => [])
  wires.forEach(([from, to]) => {
    adj_list[from].push(to)
    adj_list[to].push(from)
  })

  let mins = []
  // wires를 순회하면서 간선 빼기
  wires.forEach((wire) => {
    let visited = new Set()
    let deep_copy_adj = adj_list.map((row) => row.slice())
    const [a, b] = wire
    deep_copy_adj[a].splice(deep_copy_adj[a].indexOf(b), 1)
    deep_copy_adj[b].splice(deep_copy_adj[b].indexOf(a), 1)
    let subtraction = 0
    //연결되어진 노드 개수 구하기
    for (let i = 1; i <= n; i++) {
      if (visited.has(i)) continue // 방문한 노드면 continue
      let result1 = dfs(i, 0, deep_copy_adj, visited) // 연결 노드 개수
      subtraction = result1 - subtraction //첫 집합은 subtraction으로 할당, 두번 째 집합은 빼기
    }
    mins.push(Math.abs(subtraction))
  })
  return Math.min(...mins)

  function dfs(i, level, adj_list, visited) {
    visited.add(i)
    level += 1

    adj_list[i].forEach((v) => {
      if (visited.has(v)) return false
      level = dfs(v, level, adj_list, visited)
    })
    return level
  }
}
```

### 경주로 건설

테케에서 시간복잡도는 안전하게 가져가기 위해 파이썬으로 빠르게 heapq를 적용해보았다.

제출 시 실패 테스트 케이스 24 〉 실패 (0.11ms, 10.4MB) 92%
이전에 방문한 방향을 처리하는 부분을 다시 봐야 할 것 같다.

```python
def solution(board):
    dy=[-1,0,1,0] #북동남서
    dx=[0,1,0,-1]
    hq= []
    heapq.heappush(hq, (0,None,0,0))
    visited = [ [float("inf")]*len(board) for i in range(len(board))  ]
    while(hq):
        w, axis, y, x =heapq.heappop(hq)
        _axis = axis
        print(w, axis, y, x)
        for i in range(4):
            nx= x+dx[i]
            ny = y+dy[i]

            if(nx<0 or ny<0 or nx>=len(board) or ny>=len(board) or board[ny][nx] ==1):
                continue
            if axis == None:
                if( ny == y and nx!=x):
                    _axis = "x"
                elif(nx == x and ny!=y):
                    _axis = "y"
            next_axis = _axis
            if( ny == y and nx!=x):
                next_axis = "x"
            elif(nx == x and ny!=y):
                next_axis = "y"

            isCorner =  _axis != next_axis
            corner_w =  500 if isCorner else 0
            next_w = w+100+corner_w
            # visited 값과 비교 하여 작으면  visited 값 갱신
            if next_w <= visited[ny][nx]:
                visited[ny][nx] = next_w
                heapq.heappush(hq, (next_w, next_axis, ny, nx)) #heapq에 넣기
    print(visited[-1][-1])
    return visited[-1][-1]


```
