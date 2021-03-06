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

## ๐ Quick start

```bash

gatsby develop

```

## ๐ฅ Features

- MDX
- Table of Contents
- github comments
- Syntsyntax highlighting
- Social Share links

## Currenly working on

- [ ] SEO

## ๐ง What's inside?

```bash
๐ฆsrc
 โฃ ๐components
 โฃ ๐hooks
 โฃ ๐images
 โฃ ๐pages
 โ โฃ ๐404.tsx
 โ โ ๐{mdx.slug}.tsx
 โฃ ๐store
 โ โ ๐GlobalContextProvider.tsx
 โฃ ๐styles
 โ โฃ ๐GlobalStyles.tsx
 โ โฃ ๐mdx.tsx
 โ โฃ ๐normalize.css
 โ โ ๐theme.ts
 โฃ ๐templates
 โ โฃ ๐BlogList.tsx
 โ โ ๐Category.tsx
 โฃ ๐types
 โ โฃ ๐emotion.d.ts
 โ โ ๐global.d.ts
 โฃ ๐utils
 โ โฃ ๐colors.ts
 โ โฃ ๐helper.ts
 โ โ ๐typography.ts
 โ ๐html.js

```

1.  **`๐ /src/components`**: contains all necessary UI components

2.  **`๐ hooks`**: ์ปค์คํ ํ์

3.  **`๐ pages`**: {mdx.slug}.tsx ๋ผ๋ ํ์ด์ง๋ฅผ ํตํด programmatically ๋ธ๋ก๊ทธ ํฌ์คํ์ ์์ฑํ  ์ ์์ต๋๋ค.

4.  **`๐store/GlobalContextProvider**: ์ํ๋ฅผ ์ ์ญ์ผ๋ก ๊ด๋ฆฌํ๊ธฐ ์ํ contextAPI ์ ๋ฆฌ๋์ ์ฝ๋๊ฐ ์์ต๋๋ค.

5.  **`๐ styles`** UI์คํ์ผ๊ณผ ๊ด๋ จ๋ ํ์ผ์ด ๋ด๊ฒจ ์์ต๋๋ค.

---

## Tech Stack

- TypeScript : ์ฝ๋์ ํ์ง ํฅ์์ ์ํด ์ ์ ๋ถ์ ํด๋ก ์ ์ฉ.
- ESLint /husky/prettier : ์ปค๋ฐ ์  ์ ์  ๋ถ์ ๊ณผ์  ์ ์ฉ์ ์ํด ์ฌ์ฉ.
- Emotion.js : ๋์์ธ ์์คํ์ ์ง์  ๋์ํด๋ณด๋ฉด์ ์ปดํฌ๋ํธ๋ฅผ ์ถ์ํ ํ์ฌ ์ ์ฉํ๊ธฐ ์ํด ์ฌ์ฉ.
- AWS3/CloudFront : aws cdn์ ์ฅ์ ์ ํ์ฉํ์ฌ ๋น ๋ฅธ ์ปจํ์ธ ๋ฅผ ๋๋ฆฌ๋ฒ๋ฆฌํ๊ธฐ ์ํด ์ฌ์ฉ.

## โ๏ธ ํ๋ก์ ํธ ์งํ ๋ฐ trouble shooting

- ํ๋ก์ ํธ ์งํ์ ๊นํ์ ์นธ๋ฐ๋ณด๋๋ฅผ ํ์ฉํ์ฌ ์ด์๊ธฐ๋ฐ ๋ฒ์ ๊ด๋ฆฌ.
- ๋์์ธ ์์คํ ์ง์  ์ ์ฉ
- MDX ์ง์, ๋คํฌ๋ชจ๋, ๋ชฉ์ฐจ, ์นดํ๊ณ ๋ฆฌ, social sharing ๊ธฐ๋ฅ.
- ์นํฐํธ ์ต์ ํ๋ก ํ๋ฉด ๊น๋นก์ ์ด์ ํด๊ฒฐ๊ณผ ๋์์ ์น ํผํฌ๋จผ์ค (Web Vital) ์ต์ ํ๋ก ์ฌ์ฉ์ ๊ฒฝํ ๊ฐ์ .
  ์น ํผํฌ๋จผ์ค ์ต์ ํ ๊ฒฝํ๊ธฐ ๋ธ๋ก๊ทธ <https://www.hyunsujoo.com/optimize-webfont/ >

- ๋คํฌ๋ชจ๋ ๊ตฌํ์ rehydration์ผ๋ก ์ธํ ์ ์ฉ์ด ์๋๋ ์ด์ ํด๊ฒฐ
  ์ด์ ํด๊ฒฐ ๋ธ๋ก๊ทธ : <https://www.hyunsujoo.com/gatsby-dark-theme/>

<!-- AUTO-GENERATED-CONTENT:END -->
