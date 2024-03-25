---
title: 99클럽 코테 스터디 0일차 - 2022 KAKAO TECH INTERNSHIP 성격 유형 검사
slug: kakao-2022-personality-type.png
author: Hyunsu Joo
published: 2024-03-25
lastUpdated: 2024-03-25
draft: false
image: ./kakao-2022-personality-type.png
imageAlt: this
tags: [algorithm, kakao, python]

---

 
99코테 스터디를 시작했다. 
매주 월,목 저녁 9시에 모여 11시까지 주어진 문제들을 그 자리에서 풀고, 스터디장님이 풀이를 설명해 준다. 
오늘은 2022 카카오 인턴십 코딩 테스트 문제이다.



## 문제
[문제 출처 : 프로그래머스 2022 카카오 인턴십 코딩테스트](https://programmers.co.kr/learn/courses/30/lessons/81302)

나만의 카카오 성격 유형 검사지를 만들려고 합니다.
성격 유형 검사는 다음과 같은 4개 지표로 성격 유형을 구분합니다. 성격은 각 지표에서 두 유형 중 하나로 결정됩니다.

지표 번호	성격 유형
1번 지표	라이언형(R), 튜브형(T)
2번 지표	콘형(C), 프로도형(F)
3번 지표	제이지형(J), 무지형(M)
4번 지표	어피치형(A), 네오형(N)
4개의 지표가 있으므로 성격 유형은 총 16(=2 x 2 x 2 x 2)가지가 나올 수 있습니다. 예를 들어, "RFMN"이나 "TCMA"와 같은 성격 유형이 있습니다.

검사지에는 총 n개의 질문이 있고, 각 질문에는 아래와 같은 7개의 선택지가 있습니다.

매우 비동의
비동의
약간 비동의
모르겠음
약간 동의
동의
매우 동의
각 질문은 1가지 지표로 성격 유형 점수를 판단합니다.

예를 들어, 어떤 한 질문에서 4번 지표로 아래 표처럼 점수를 매길 수 있습니다.

선택지	성격 유형 점수
매우 비동의	네오형 3점
비동의	네오형 2점
약간 비동의	네오형 1점
모르겠음	어떤 성격 유형도 점수를 얻지 않습니다
약간 동의	어피치형 1점
동의	어피치형 2점
매우 동의	어피치형 3점
이때 검사자가 질문에서 약간 동의 선택지를 선택할 경우 어피치형(A) 성격 유형 1점을 받게 됩니다. 만약 검사자가 매우 비동의 선택지를 선택할 경우 네오형(N) 성격 유형 3점을 받게 됩니다.

위 예시처럼 네오형이 비동의, 어피치형이 동의인 경우만 주어지지 않고, 질문에 따라 네오형이 동의, 어피치형이 비동의인 경우도 주어질 수 있습니다.
하지만 각 선택지는 고정적인 크기의 점수를 가지고 있습니다.

매우 동의나 매우 비동의 선택지를 선택하면 3점을 얻습니다.
동의나 비동의 선택지를 선택하면 2점을 얻습니다.
약간 동의나 약간 비동의 선택지를 선택하면 1점을 얻습니다.
모르겠음 선택지를 선택하면 점수를 얻지 않습니다.
검사 결과는 모든 질문의 성격 유형 점수를 더하여 각 지표에서 더 높은 점수를 받은 성격 유형이 검사자의 성격 유형이라고 판단합니다. 단, 하나의 지표에서 각 성격 유형 점수가 같으면, 두 성격 유형 중 사전 순으로 빠른 성격 유형을 검사자의 성격 유형이라고 판단합니다.

질문마다 판단하는 지표를 담은 1차원 문자열 배열 survey와 검사자가 각 질문마다 선택한 선택지를 담은 1차원 정수 배열 choices가 매개변수로 주어집니다. 이때, 검사자의 성격 유형 검사 결과를 지표 번호 순서대로 return 하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ survey의 길이 ( = n) ≤ 1,000
survey의 원소는 "RT", "TR", "FC", "CF", "MJ", "JM", "AN", "NA" 중 하나입니다.
survey[i]의 첫 번째 캐릭터는 i+1번 질문의 비동의 관련 선택지를 선택하면 받는 성격 유형을 의미합니다.
survey[i]의 두 번째 캐릭터는 i+1번 질문의 동의 관련 선택지를 선택하면 받는 성격 유형을 의미합니다.
choices의 길이 = survey의 길이

choices[i]는 검사자가 선택한 i+1번째 질문의 선택지를 의미합니다.
1 ≤ choices의 원소 ≤ 7
choices	뜻
```
1	매우 비동의
2	비동의
3	약간 비동의
4	모르겠음
5	약간 동의
6	동의
7	매우 동의
```
입출력 예
```
survey	                        choices	        result
["AN", "CF", "MJ", "RT", "NA"]	[5, 3, 2, 7, 5]	"TCMA"
["TR", "RT", "TR"]	            [7, 1, 3]	    "RCJA"`
```
## 문제 접근법

주어진 survey와 choice는 1:1 대응 관계이다 . "AN" 이라는 survey가 주어지면, choice는 5가 주어진다.
5 는 choices에 따르면 약간 동의를 의미한다. 그런데 이 동의가 성격 유형 A 를 의미하는지 N을 의미하는지는 
의미하는지는 survey가 "AN"인지 "NA"인지에 따라 달라진다. 

이 부분을 유의해서 풀어야 한다. 

결국 가장 많은 점수를 받은 유형을 뽑으면 된다.단, 같은 점수일 경우는 사전순으로 앞에 있는 유형을 뽑아야 한다.
result_mapper 라는 딕셔너리를 만들어서 survey의 각 요소에 따라 점수를 매겨서 `{"R":[ 선택한 점수, 몇 번 유형인지]}`형태로 저장했다.
그렇게 모든 choice의 점수를 매긴 후, 다시 result_mapper를 돌면서 가장 높은 점수를 가진 유형을 뽑아 내었다. 


```python 
def solution(survey, choices):
    answer = ''
    choice_range = [0, 3, 2, 1, 0, 1, 2, 3]
    result_mapper ={
        "R":[ 0, 1],
        "T":[0,1],
        "C":[0,2], 
        "F":[0,2],
        "J":[0,3],
        "M":[0,3],
        "A":[0,4], 
        "N":[0,4]
    } 
    for i in range(len(survey)):
        personality_type=""
        if(choices[i] !=4 and choices[i] >4):
            #동의  
            personality_type=survey[i][1]
            result_mapper[personality_type][0] = result_mapper[personality_type][0]+choice_range[choices[i]]
            
        if(choices[i] !=4 and choices[i]<4):
            #비동의  
            personality_type=survey[i][0]
            result_mapper[personality_type][0] = result_mapper[personality_type][0]+choice_range[choices[i]]
    #높은 점수 별로 묶기 
    keys = list(result_mapper.keys())
    for i in range(0,4):
        #큰 가 
        if(result_mapper[keys[i*2]][0] ==  result_mapper[keys[i*2+1]][0]):
            sortedType=sorted([keys[i*2], keys[i*2+1]])
            answer+=sortedType[0]
            continue
        if(result_mapper[keys[i*2]][0] > result_mapper[keys[i*2+1]][0]):
            #i번째가 크다 
            answer+=keys[i*2]
        else:
            answer+=keys[i*2+1]
    return answer



```