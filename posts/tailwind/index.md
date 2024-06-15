---
title: Tailwind.css 커스텀 유틸리티 함수 
slug: tailwindcss
author: Hyunsu Joo
published: 2024-06-08
lastUpdated: 2024-06-08
draft: true
image: ./typescript-generic-mappedType.png
imageAlt: typescript-generic-mappedType
tags: ['tailwind']
---




```javascript

  plugins: [
        require('tailwindcss-animate'),
        function ({ addUtilities }) {
            addUtilities({
                '.grid-areas-carousel': {
                    'grid-template-areas': `
            "carousel_prev_btn carousel_container carousel_next_btn"
          `,
                },
                '.area-carousel_prev_btn': {
                    'grid-area': 'carousel_prev_btn',
                },
                '.area-carousel_container': {
                    'grid-area': 'carousel_container',
                },
                '.area-carousel_next_btn': {
                    'grid-area': 'carousel_next_btn',
                },
            })
        },
    ],
} 

```


