---
title: 정렬
slug: algorithm-sort
author: Hyunsu Joo
published: 2024-02-03
lastUpdated: 2024-02-03
draft: false
image: ./algorithm-sort.png
imageAlt: kakao-coding-test
tags: ['Algorithm Study']
---

### 들어가며

- 이번 주는 인터뷰 과제 구현을 겸하느라 문제를 많이 풀진 못했다. 밸런스를 유지하는게 쉽진 않은 것 같다.
- 설연휴에 정렬 부분을 다시 봐야겠다.

---

문제 풀이로 바로 넘어가겠다.

### 문자열 내 마음대로 정렬하기 출처 프로그래머스[바로가기](https://school.programmers.co.kr/learn/courses/30/lessons/12915)

> 문제 써머리
> 문제 설명
> 문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.
> 제한 조건
> strings는 길이 1 이상, 50이하인 배열입니다.
> strings의 원소는 소문자 알파벳으로 이루어져 있습니다.
> strings의 원소는 길이 1 이상, 100이하인 문자열입니다.
> 모든 strings의 원소의 길이는 n보다 큽니다.
> 인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.

이 문제는 주어진 문자열 배열(strings)과 정수(n)를 입력으로 받아, 각 문자열을 주어진 n번째 문자를 기준으로 오름차순으로 정렬한 후 정렬된 배열을 반환 한다.

문자열을 다루는 경우 유니코드(Unicode) 값을 자주 이용하는 편인데 strings 배열의 각 문자열에 대해 반복문을 실행하면서, n번째 문자를 추출하고 그 문자의 유니코드 코드 포인트 값을 이용하여 freq 배열에 해당 문자열을 추가한다. n번째 문자의 유니코드 코드 포인트에서 97을 빼주는 이유는 소문자 'a'의 유니코드 코드 포인트가 97이기 때문이다. 따라서 n번째 문자가 'a'라면 0번 인덱스에, 'b'라면 1번 인덱스에, 'c'라면 2번 인덱스에 해당 문자열을 추가하게 된다.

이 문제에서 주의 할 점은 n번째 문자가 같은 문자열이 있는 경우 사전순의 정렬이 다시 필요하다.
아래의 테스트 케이스에서 "abce","adcd" 와 같은 경우는 "abce"가 먼저 출력된다.

```javascript
const assert = require('assert')
function solution(strings, n) {
  //각 문자열의 인덱스 n번째 글자를 기준으로 오름차순
  var answer = []

  const freq = Array.from({ length: 26 }, () => [])
  strings.map((s) => freq[s[n].charCodeAt() - 97].push(s))

  freq.forEach((arr) => {
    if (!arr.length) return false
    arr.sort()
    answer.push(...arr)
  })

  return answer
}

assert.deepEqual(solution(['sun', 'bed', 'car'], 1), ['car', 'bed', 'sun'])
assert.deepEqual(solution(['abce', 'abcd', 'cdx'], 2), ['abcd', 'abce', 'cdx'])
```

### 정수 내림차순으로 배치하기 출처: 프로그래머스 [바로가기](https://school.programmers.co.kr/learn/courses/30/lessons/12933)

> 함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 된다.

자바스크립트의 내장함수를 이용하는 방법과 삽입정렬을 직접 구현하여 정렬된 결과를 정수로 반환하는 두가지의 방법을 구현했다.

**JS 내장함수 이용**
정수 n을 받아서 해당 정수의 각 자릿수를 내림차순으로 정렬한 후 다시 정수로 변환하여 반환하는 함수

```javascript
function solution(n) {
  return parseInt(
    n
      .toString()
      .split('')
      .sort((a, b) => b - a)
      .join(''),
  )
}
```

- 문자열을 배열로 변환한 후, sort 메서드를 사용하여 각 자릿수를 내림차순으로 정렬합니다. 정렬 함수 (a, b) => b - a를 사용하여 내림차순으로 정렬한다..
- 정렬된 배열을 다시 문자열로 합치고, parseInt를 사용하여 문자열을 정수로 변환한 후 반환한다.

**insertion 함수 적용**

- 삽입 정렬은 원소가 정렬된 부분과 정렬되지 않은 부분으로 나누어 작동하며, 정렬되지 않은 부분의 원소를 하나씩 가져와서 정렬된 부분에 삽입하는 방식으로 동작
- 아래와 이미지와 같이 정렬되어 있지 않은 그 배열(in place)에서 바로 값을 비교하여 인덱스 0번부터 정렬해 나간다.
  ![insertion-sort](../images/Insertion-sort.gif)
  출처: [wikipedia Insertion_sort](https://en.wikipedia.org/wiki/Insertion_sort)
  **동작 방식**

1. 주어진 배열을 두 부분으로 나눈다.
2. 첫 번째 부분은 정렬된 부분이며, 초기에는 첫 번째 원소 하나만 포함한다.
3. 두 번째 부분은 정렬되지 않은 부분이며, 나머지 모든 원소들을 포함한다.
4. 정렬되지 않은 부분에서 원소를 하나씩 선택한다.
5. 선택한 원소를 정렬된 부분의 적절한 위치에 삽입한다.
6. 삽입할 위치는 정렬된 부분에서 선택한 원소보다 작은 원소를 만나면 멈춘다.
7. 선택한 원소보다 작은 원소를 만나면, 그 작은 원소 뒤에 선택한 원소를 삽입한다.
8. 이 과정을 정렬되지 않은 부분의 모든 원소가 정렬된 부분에 삽입될 때까지 반복한다.

모든 원소가 정렬된 부분에 삽입되면 정렬이 완료된다.

삽입정렬은 정렬 중에서도 효율성은 낮은 편에 속한다.
정렬이 거의 되어 있는 리스트에서 시간복잡도가 O(n)에 가까우며,
거의 정렬이 안되어 있는 경우 최악은 O(n^2) 이 될 수 있다.

그래서 작은 크기의 리스트나 거의 정렬된 리스트에 적합한 알고리즘이다.

```javascript
function insertionSort(n) {
  let arr = n.toString().split('')
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] > arr[j - 1]) {
        ;[arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
      }
    }
  }
  return parseInt(arr.join(''))
}
```

### K번째 수

### 가장 큰 수

### 튜플

### 지형
