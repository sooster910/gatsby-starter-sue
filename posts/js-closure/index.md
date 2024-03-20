---
title: 클로저를 제대로 알지 못해 문제 정의를 잘못한 적이 있다.
slug: js-closure
author: Hyunsu Joo
published: 2024-03-20
lastUpdated: 2024-03-20
draft: false
image: ./js_closure.png
imageAlt: js-closure
tags: ['JavaScript']
---


## 클로저를 제대로 알지 못해 문제 정의를 잘못한 적이 있다.

오픈소스 코드에서 유저가 Drawer를 토글 하는 콜백 함수처리에서 상태가 변경되지 않는 경우가 있었는데, 이 원인을 클로저로 인해 상태값이
캡쳐링 되었다고 생각한 아주 문제의 정의를 잘못 한 적이 있었다.

클로저에 대해 정확하게 알고 있었더라면, 잘못된 정의로 문제 해결에 더 빨리 도달 했을 것이다.
이번 기회에 다시 코드가 execution context에서 어떻게 동작하는지를 이해해 보았다.


```javascript
let str0 = 'str0'


function func1(){
    let str1 = 'str1'
    console.log(str0, str1,str2 )
}

function func2(){
    let str2 = 'str2'
    console.log(str0, str1, str2)
}
console.log(str0, str1, str2)

func1()
func2()
```

func1() 내에서 str0을 가져 오는 방법은
현재 실행되고 있는 함수의 유효 범위 내에 있는 str0을 찾는다.

유효 범위의 시작은 현재 보이는 scope 기준으로 local scope부터 시작하여
없으면 global scope로 올라가서 찾는다. 왜 local str1이 local scope에 저장되어 있는지 모른다면 let, var, const 의 유효범위에 대한 선행 지식이 필요하다.
script scope에 str0이 있기 때문에 str0을 찾을 수 있다.

하지만 func1()에서 str2값을 참조할 수 없다. 이유는 

func2()를  func1()내로 옮겨 본다.



func2()를 func1()에서 호출 했기 때문에 str1을 참조 할 수 있을 것 같지만, func2()라는 함수스코프를 가진 새로운 유효범위가 생성된 순간, func2()의
유효범위는 func1()의 유효범위와는 다르다. str1을 참조 할 수 없다.








