---
title: 주문 처리 페이지 성능 개선기
slug: improve-rendering-performance
author: Hyunsu Joo
published: 2023-12-30
lastUpdated: 2023-12-30
draft: true
image: ./algorithm-set.png
imageAlt: improve-rendering-performance
tags: ['perfomance']
---

LCP
![LCP](improve-rendering-performance-LCP.png)

measures the loading perforamcen of the web site s

LCP에 집중 한 이유는요?

load 나 DOMContentLoaded와 같은 예전부터 있었던 지표들은 사실 사용자가 화면에서 보는 내용과 일치 하지 않습니다.

예를들어 페이지에 로딩 표시가 있는 화면은 사실 진짜 사용자가 원하는 컨텐츠를 보는 것 과는 거리가 좀 있죠. 그래서 로딩 표시가 있는 시간을 측정 하는게 그렇게 큰 의미가 없습니다. 진짜 유의미한 컨텐츠가 눈앞에 보여졌을 때 그때 순간의 의미가 있습니다.

그래서 Google 에서 수행한 연구를 바탕으로 페이지의 기본 컨텐츠가 로드되는 시기를 측정하는 더 정확한 방법은 페이지의 가장 큰 요소가 렌더링 되는 시기를 확인 하는 것을 알아 냈습니다.

LCP의 측정항목은 사용자가 페이지를 처음 탐색한 시점 부터 뷰포트 내에 표시되는 가장 큰 이미지 또는 텍스트 블록의 렌더링 되는 시간 까지를 의미 합니다.

주문 처리 페이지는 어드민의 기능 중에 가장 많은 기능을 가지고 있고 주문 처리에 참고 해야 하는 이미지와 텍스트

API 캐시화에 대한 코드 흔적이 없음을 미루어
LCP 특징

- LCP에는 이전 페이지의 언로드 시간, 연결 설정시간, 리디렉션 시간, TTFB가 포함되어 있습니다.
