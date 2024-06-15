---
title: currying 의 고민과 적용 이야기   
slug: frontend-testing
author: Hyunsu Joo
published: 2024-06-15
lastUpdated: 2024-06-15
draft: true
image: ./fp-currying.jpg
imageAlt: fp-currying
tags: ['Functional Programming']
---


## 들어가며 

어떤 함수가 있는데, 그 함수가 다른 함수의 리턴한 값에 종속적이라면?  이라는 고민에서 시작하게 되었다. 


## 본론

순수함수의 원칙에서 나온것이라면, 

커링을 올바르게 적용하려면, 함수가 하나의 인자를 받고, 그 다음 인자를 받는 새로운 함수를 반환하도록 해야 합니다.

쉬운예로 add= (x,y)=>x+y 가 있을 때, 

커링을 적용하려면 x를 먼저 받고 새로운 함수를 리턴하는데, 그 함수에는 다음 인자인 y를 받아야 한다.

```javascript

const addCurried = x => y => x + y;

```

