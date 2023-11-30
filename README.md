<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
[![DeployToS3](https://github.com/sooster910/gatsby-starter-sue/actions/workflows/manual.yml/badge.svg)](https://github.com/sooster910/gatsby-starter-sue/actions/workflows/manual.yml)
<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>

<h1 align="center">
  Personal Blog
</h1>

## 🚀 Quick start

```bash

gatsby develop

```

## 🔥 Features

- MDX
- Table of Contents
- github comments
- Syntsyntax highlighting
- Social Share links

## Currenly working on

- [ ] SEO

## 🧐 What's inside?

```bash
📦src
 ┣ 📂components
 ┣ 📂hooks
 ┣ 📂images
 ┣ 📂pages
 ┃ ┣ 📜404.tsx
 ┃ ┗ 📜{mdx.slug}.tsx
 ┣ 📂store
 ┃ ┗ 📜GlobalContextProvider.tsx
 ┣ 📂styles
 ┃ ┣ 📜GlobalStyles.tsx
 ┃ ┣ 📜mdx.tsx
 ┃ ┣ 📜normalize.css
 ┃ ┗ 📜theme.ts
 ┣ 📂templates
 ┃ ┣ 📜BlogList.tsx
 ┃ ┗ 📜Category.tsx
 ┣ 📂types
 ┃ ┣ 📜emotion.d.ts
 ┃ ┗ 📜global.d.ts
 ┣ 📂utils
 ┃ ┣ 📜colors.ts
 ┃ ┣ 📜helper.ts
 ┃ ┗ 📜typography.ts
 ┗ 📜html.js

```

1.  **`📂 /src/components`**: contains all necessary UI components

2.  **`📂 hooks`**: 커스텀 훅의

3.  **`📂 pages`**: {mdx.slug}.tsx 라는 페이지를 통해 programmatically 블로그 포스팅을 생성할 수 있습니다.

4.  **`📂store/GlobalContextProvider**: 상태를 전역으로 관리하기 위한 contextAPI 와 리듀서 코드가 있습니다.

5.  **`📂 styles`** UI스타일과 관련된 파일이 담겨 있습니다.

---

## Tech Stack

- TypeScript : 코드의 품질 향상을 위해 정적분석 툴로 적용.
- ESLint /husky/prettier : 커밋 전 정적 분석 과정 적용을 위해 사용.
- Emotion.js : 디자인 시스템을 직접 도입해보면서 컴포넌트를 추상화 하여 적용하기 위해 사용.
- AWS3/CloudFront : aws cdn의 장점을 활용하여 빠른 컨텐츠를 딜리버리하기 위해 사용.

## ✔️ 프로젝트 진행 및 trouble shooting

- 프로젝트 진행은 깃헙의 칸반보드를 활용하여 이슈기반 버전관리.
- 디자인 시스템 직접 적용
- MDX 지원, 다크모드, 목차, 카테고리, social sharing 기능.
- 웹폰트 최적화로 화면 깜빡임 이슈 해결과 동시에 웹 퍼포먼스 (Web Vital) 최적화로 사용자 경험 개선.
  웹 퍼포먼스 최적화 경험기 블로그 <https://www.hyunsujoo.wiki/optimize-webfont/ >

- 다크모드 구현시 rehydration으로 인한 적용이 안되는 이슈 해결
  이슈 해결 블로그 : <https://www.hyunsujoo.wiki/gatsby-dark-theme/>

<!-- AUTO-GENERATED-CONTENT:END -->




