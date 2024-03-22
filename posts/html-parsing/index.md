---
title: HTML parsing 동작 원리에 대해 아시나요.
slug: html-parsing
author: Hyunsu Joo
published: 2024-03-21
lastUpdated: 2024-03-21
draft: true
image: ./html-parsing.png
imageAlt: html-parsing
tags: ['Browser', 'Frontend']
---


HTML parsing은 
HTML 문서를 읽어서, DOM 트리를 생성하는 과정을 말한다.
문서 파싱 - 브라우저가 코드를 이해하고 사용할 수 있는 구조

html파서는 html마크업을 파싱 트리로 변환한다.
왜? 파싱트리로 변환하는가 ? 그리고 파싱트리는 dom트리와 같은것인가?

파싱트리 = 구체적인 구문 트리 (concrete syntax tree)  != 문법 트리 (syntax tree), 추상 구문 트리 (abstract syntax tree)
파싱은 크게 두가지 어휘분석과 구문분석으로 구분할 수 있다. 

어휘분석 - 자료를 토큰으로 분해하는 과정 - 공백과 줄바꿈과 같은 의미없는 문자 제거 
구문분석 - 언어의 구문 규칙을 적용하는 과정 

아직도 모르겠다 이걸 왜 해야 하는지?

전통적인 파서는 HTML에 적용할 수 없다. 파싱은 css와 자바스크립트를 파싱하는데 사용된다.

HTML은 파싱하기 어렵고 전통적인 구문 분석이 불가능하기 때문에 문맥 자유 문법이 아니다. 
html은 왜 파싱하기가 어려워? 전통적인 구문 분석이 불가능한 이유는 무엇인가?
전통적인 구문 분석이 불가능한 이유는 HTML이 문맥 자유 문법(context-free grammar)이 아니기 때문입니다.
문맥 자유 문법은 한정된 개수의 규칙을 가진 형식 언어로, 
구문 분석을 수행할 때 각 토큰이 사용된 위치의 문맥을 고려하지 않습니다. 
하지만 HTML은 문맥에 따라 해석이 달라지는 경우(태그나 속성으로 인해)가 많아 이러한 전통적인 구문 분석 방법을 적용하기 어렵습니다.

xml과 html의 관계 ? 
이 두가지 분석은 다음과 같은 과정에 포함된다. 

html에는 일반적인 파싱 기술을 사용할 수 없기 때문에 html파싱을 위해 별도의 파서를 생성한다.
파싱의 알고리즘은 토큰화와 트리 구축 과정으로 나눌 수 있다.
토큰화는 어휘분석으로서 입력값을 토큰값으로 파싱한다.
html에서 토큰은 시작태그, 끝태그, 속성 이름과 속성값이다.
토큰화는 토큰을 인지해서 트리생성자로 넘기고 다음 토큰을 확인하기 위해 다음 문자를 호가인한다. 

토큰화
- 토큰화 알고리즘이 적용된다. 이 결과 HTML토큰을 생성한다. 여기서 어휘분석이 어떻게 이루어 질까?


트리구축 
```textn
Network -> Byte Stream Decoder ->Input Stream Preprocessor -> Tokenizer -> Tree Builder -> DOM  

```


```html
<!DOCTYPE HTML>
<html lang="en">
<head>
  <title>Hello</title>
</head>
<body>
  <p>Test.</p>
</body>
</html>

```
이런 트리 형태로 구문분석 된다.

```text
#document
├── DOCTYPE: html
└── html lang="en"
    ├── head
    │   ├── #text:
    │   ├── title
    │   │   └── #text: Hello
    │   └── #text:
    ├── #text:
    └── body
        ├── #text:
        ├── p
        │   └── #text: Test.
        └── #text:
```

## HTML parsing 과정

일반적으로 다음과 같은 순서로 진행 된다.



네트워크를 통해 전송된 바이트 데이터가 Byte Stream Decoder에 의해 코드 포인트 스트림으로 변환된다. 

파서는 이렇게 변환된 코드포인트의 스트림을 읽어서 HTML구조를 이해한 후, dom트리를 구축 한다. 



인터넷을 통해 전송된 바이트 데이터가 디코더에 의해 문자 데이터로 변환된다. 
디코더는 

### Tokenizer
토큰화는 입력값을 토큰으로 파싱한다.그리고 토큰을 인지해서 트리 생성자로 넘기고 다음 토큰을 확인하기 위해 
다음 문자를 확인한다. 
초기 상태는 데이터 상태(Data)이며 여는 괄호가 나타나면 태그 열기 상태(Tag open)로 전환된다.
d, i, v와 같은 문자를 만나면, 파서가 태그를 식별하기를 시작한 것이다. 그러면 태그의 이름을 파싱 하고 닫는 괄호가 나타나면
태그 닫기 상태(Close tag open state)로 전환되고 태그 이름을 완성한다. 완성된 태그 이름을 토큰 으로 생성한다.

body 태그도 같은 단계로 생성된다.
body 토큰이 생성되면 이 상태는 데이터 상태로 변경되고


HTML 태그를 닫을 때 반복됩니다.


---
참고 자료 
- [htmlparser book](https://htmlparser.info/introduction/)
- [w3.org html5](https://dev.w3.org/html5/spec-LC/tokenization.html#data-state)
- https://ko.wikipedia.org/wiki/%ED%8C%8C%EC%8A%A4_%ED%8A%B8%EB%A6%AC