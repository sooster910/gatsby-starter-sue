---
title: leetcode 846. Hand of Straights
slug: leetcode-846-hand-of-straights
author: Hyunsu Joo
published: 2024-03-24
lastUpdated: 2024-03-24
draft: false
image: ./lootcode_846.png
imageAlt: this
tags: [algorithm, leetcode, python]
---

# Leetcode 846. Hand of Straights
(문제 출처 : 846. Hand of Straights)[https://leetcode.com/problems/hand-of-straights/]

```text
846. Hand of Straights
Solved
Medium
Topics
Companies
Alice has some number of cards and she wants to rearrange the cards into groups so that each group is of size groupSize, and consists of groupSize consecutive cards.

Given an integer array hand where hand[i] is the value written on the ith card and an integer groupSize, return true if she can rearrange the cards, or false otherwise.

 

Example 1:

Input: hand = [1,2,3,6,2,3,4,7,8], groupSize = 3
Output: true
Explanation: Alice's hand can be rearranged as [1,2,3],[2,3,4],[6,7,8]
Example 2:

Input: hand = [1,2,3,4,5], groupSize = 4
Output: false
Explanation: Alice's hand can not be rearranged into groups of 4.

 

Constraints:

1 <= hand.length <= 104
0 <= hand[i] <= 109
1 <= groupSize <= hand.length
 

Note: This question is the same as 1296: https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/


```

이 문제에서 꼭 지켜야 할 두가지 가 있다. 
1. 하나의 카드 그룹에 groupSize 만큼 카드가 있어야 하고, 
2. 카드들은 연속적인 숫자여야 한다.

이 두가지 조건을 만족한 상태에서 그루핑이 한개도 빠짐없이 가능하다면 True를 반환하고, 아니라면 False를 반환한다.

하나의 카드 그룹에 groupSize만큼의 카드와 연속된  숫자를 가진 카드를 찾기 위해선
중복된 숫자 카드가 있는 부분을 처리 해줘야 한다. 즉 각 그룹에  들어간 카드를 현재 남은 카드에서 빼주는 방식을 택한다.
이 문제에서 핵심 아이디어는 남은 숫자 카드 중 가장 작은 숫자 카드를 선택하고 선택한 숫자로 부터 연속된 숫자를 groupSize만큼 일단 지정한다.
그 이유는 문제에서 주어진 연속된 숫자를 만족해야 하므로 숫자를 미리 지정한 다음, 그 숫자가 현재 남은 카드에 있는지 확인한다.
만약 없다면, False를 반환하고, 있다면 그 숫자를 빼주고, 다음 숫자를 확인한다. 이 과정을 반복하면서 모든 카드를 그룹핑 할 수 있는지 확인한다.

시간복잡도는 O(nlogn)이다. (정렬 한 복잡도가 가장 크다.)
```python

# 문제의 조건에서 모든 원소들을 사용해야 한다.
# 그럼 그 조건에 다 맞추려면, 사용하고 남은 수중에 가장 작은 수를 새로운 그룹의 최소값으로 넣고 그 그룹에 해당하는 연속적으로 증가하는 수를 배열에서 찾는다.
#각 키를 돌면서, 
# 그 키가 mapper에 있는지 확인, 
# 만약 잇다면 (이게 최솟값이다.)
# 최솟값을 기준으로 연속된 값을 정해 
# 그 값들이 안에 있는지 확인한다. 
# 없다면,  리턴한다.

  def isNStraightHand(self, hand, groupSize):
        """
        :type hand: List[int]
        :type groupSize: int
        :rtype: bool
        """
        if(len(hand)%groupSize != 0):
            return False
        #dictionary를 사용하여 각 숫자의 빈도수를 저장한다. 
        freq = {}
        # 각 숫자의 빈도수를 저장한다.
        for h in hand:
            freq[h] = (freq.get(h) or 0) +1
        
        # 가장 작은 숫자 카드를 뽑기 위해 정렬 후 순회한다.
        for f in sorted(freq.keys()):
            # 만약 남은 카드가 있다면 
            while( freq[f] > 0):
            # 해당 카드를 뽑는다.
                freq[f]-=1
                # 이 아이디어가핵심포인트 
                for i in range(f+1, f+groupSize):
                    #그렇게 지정된 숫자가  
                    if( i in freq and freq[i]>0 and i>0):
                        freq[i]-=1
                    else:
                        return False
        return True