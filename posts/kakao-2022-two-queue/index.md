---
title: 2022 KAKAO TECH INTERNSHIP 두 큐 합 같게 만들기
slug: kakao-2022-two-queue
author: Hyunsu Joo
published: 2024-03-30
lastUpdated: 2024-03-30
draft: false
image: ./kakao-2022-queue.png
imageAlt: this
tags: [algorithm, kakao, python]

---

## 문제 설명

>길이가 같은 두 개의 큐가 주어집니다. 하나의 큐를 골라 원소를 추출(pop)하고, 추출된 원소를 다른 큐에 집어넣는(insert) 작업을 통해 각 큐의 원소 합이 같도록 만들려고 합니다. 이때 필요한 작업의 최소 횟수를 구하고자 합니다. 한 번의 pop과 한 번의 insert를 합쳐서 작업을 1회 수행한 것으로 간주합니다.
>
>큐는 먼저 집어넣은 원소가 먼저 나오는 구조입니다. 이 문제에서는 큐를 배열로 표현하며, 원소가 배열 앞쪽에 있을수록 먼저 집어넣은 원소임을 의미합니다. 즉, pop을 하면 배열의 첫 번째 원소가 추출되며, insert를 하면 배열의 끝에 원소가 추가됩니다. 예를 들어 큐 [1, 2, 3, 4]가 주어졌을 때, pop을 하면 맨 앞에 있는 원소 1이 추출되어 [2, 3, 4]가 되며, 이어서 5를 insert하면 [2, 3, 4, 5]가 됩니다.
>
>다음은 두 큐를 나타내는 예시입니다.
>
>queue1 = [3, 2, 7, 2]
>queue2 = [4, 6, 5, 1]
두 큐에 담긴 모든 원소의 합은 30입니다. 따라서, 각 큐의 합을 15로 만들어야 합니다. 예를 들어, 다음과 같이 2가지 방법이 있습니다.

>queue2의 4, 6, 5를 순서대로 추출하여 queue1에 추가한 뒤, queue1의 3, 2, 7, 2를 순서대로 추출하여 queue2에 추가합니다. 그 결과 queue1은 [4, 6, 5], queue2는 [1, 3, 2, 7, 2]가 되며, 각 큐의 원소 합은 15로 같습니다. 이 방법은 작업을 7번 수행합니다.
queue1에서 3을 추출하여 queue2에 추가합니다. 그리고 queue2에서 4를 추출하여 queue1에 추가합니다. 그 결과 queue1은 [2, 7, 2, 4], queue2는 [6, 5, 1, 3]가 되며, 각 큐의 원소 합은 15로 같습니다. 이 방법은 작업을 2번만 수행하며, 이보다 적은 횟수로 목표를 달성할 수 없습니다.
따라서 각 큐의 원소 합을 같게 만들기 위해 필요한 작업의 최소 횟수는 2입니다.
>
>길이가 같은 두 개의 큐를 나타내는 정수 배열 queue1, queue2가 매개변수로 주어집니다. 각 큐의 원소 합을 같게 만들기 위해 필요한 작업의 최소 횟수를 return 하도록 solution 함수를 완성해주세요. 단, 어떤 방법으로도 각 큐의 원소 합을 같게 만들 수 없는 경우, -1을 return 해주세요.
>
>제한사항
>1 ≤ queue1의 길이 = queue2의 길이 ≤ 300,000
>1 ≤ queue1의 원소, queue2의 원소 ≤ 109
>주의: 언어에 따라 합 계산 과정 중 산술 오버플로우 발생 가능성이 있으므로 long type 고려가 필요합니다.
>입출력 예
>queue1	queue2	result
>[3, 2, 7, 2]	[4, 6, 5, 1]	2
>[1, 2, 1, 2]	[1, 10, 1, 2]	7
>[1, 1]	[1, 5]	-1


## 문제 풀이

각 큐의 원소의 합을 똑같이 만들기 위해 필요한 작업의 최소 횟수를 구하는 문제 이다.
문제 에서 주어진 두개의 큐를 순서 대로 추출 한다고 했으니, 두 개의 큐의 합이 서로 
같아 지기 위해 큐의 FIFO 구조를 이용 하여 한 개씩 추출 하여 다른 큐에 넣어 가면서 
두 개의 큐가 같은 값을 가지면 된다.

그럼 어떤 큐부터 혹은 어떤 조건일 때 큐를 추출 하고 넣어야 할 지에 대한 기준을 찾아야 한다.
문제의 예시에 나온 순서 대로 한다면 그리디 방법 으로 합이 더 큰 큐에서 작은 큐로 값을 넘겨 가면서 
하게 될 경우 최소 횟수를 구할 수 있다.
```python
        if(sum_1<sum_2):
            #두 번째 큐에서 첫 번째 큐로 값을 넘겨주기
            extract= dq_2.popleft()
            sum_2-=extract
            dq_1.append(extract)
            sum_1+=extract
         
        else:
            #첫 번째 큐에서 두 번째 큐로 값 넘겨주기
            extract_another = dq_1.popleft()
            sum_1-=extract_another
            dq_2.append(extract_another)
            sum_2+= extract_another
        
```

그리디 방법 에서는 안되는 케이스는 소거법을 사용 하여 제외 시키는 로직을 먼저 작성 한다.
```python 
    if((sum_1 +sum_2)%2!=0):
        return -1 
```

그리고 큐를 추출 하고 넣는 반복을 언제 까지 해야 하는지 생각 한다. 
첫 번째 로는 두 큐의 합이 같아 지면 된다. 

만약 두 큐의 합이 같아 지지 않는 다면? -1을 리턴 한다.
그런데 두 큐의 합이 같아 지지 않는 다는 것을 구하기 위해 몇번을 추출 하고 넣는 과정을 거쳐야 할까?
내가 처음 시도한 접근 에서는 하나의 큐라도 빈 큐가 되면 더 이상 비교할 큐가 없어 
-1을 리턴 했는데, 시간 초과가 난다.

하나의 큐라도 비어 있지 않은 상태에서 둘의 합이 같은 경우가 없이 계속 loop 를 반복하고 있는 것이다. 
다른 조건으로 loop 를 끝내야 한다.

우리는 두 개의 큐를 가지고  빼고 넣기를 반복으로 하는데 결국 빼는 동작은 두개의 큐에서 모두 일어날 수 있다.
그리고 넣는 동작도 두 개의 큐에서 일어날 수 있다. 그럼 최대 반복 횟수는 두 큐의 길이의 합 * 2 가 된다.
```python
    iterator_cnt = 0
    iterator_max = (len(queue1)+len(queue2))*2
    while(iterator_cnt<iterator_max):
```


전체 코드: 

```python
from collections import deque

def solution(queue1, queue2):
    answer = 0
    dq_1 = deque(queue1)
    dq_2 = deque(queue2)
    
    sum_1 = sum(dq_1)
    sum_2 = sum(dq_2)
    if((sum_1 +sum_2)%2!=0):
        return -1 
    iterator_cnt = 0
    iterator_max = (len(queue1)+len(queue2))*2
    while(iterator_cnt<iterator_max):
        
        if(sum_1 == sum_2):
            break
        # 각각의 큐의 sum이 balance를 맞춰주기 위해 그리디 방식으로 더 큰쪽에서 -> 작은쪽으로 원소를 준다. 
        if(sum_1<sum_2):
            #2에서 빼기
            extract= dq_2.popleft()
            sum_2-=extract
            dq_1.append(extract)
            sum_1+=extract
            answer+=1
        # 
        else:
            #1에서 빼기 
            extract_another = dq_1.popleft()
            sum_1-=extract_another
            dq_2.append(extract_another)
            sum_2+= extract_another
            answer+=1
        iterator_cnt+=1
  
    if(sum(dq_1)!=sum(dq_2)):
        return -1
    return answer
```

