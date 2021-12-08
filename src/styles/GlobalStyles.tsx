import * as React from 'react'
import { useTheme } from '@emotion/react'
import { Global, css } from '@emotion/react'
import * as Fonts from '../../assets/fonts'
import { gray, pink, neutral, blue, darkblue } from '../utils/colors'

const GlobalStyles = () => {
  const theme = useTheme()

  return (
    <Global
      styles={css`
        body {
          &.light {
            --primaryColor: ${neutral[100]};
            --primaryHoverColor: ${pink[20]};
            --primaryActiveColor: ${pink[60]};
            --secondaryColor: ${neutral[40]};
            --secondaryHoverColor: ${neutral[30]};
            --textColorOnSecondary: ${gray[100]};
            --textColorInverted: ${gray[10]};
            --textColorOnPrimary: ${gray[90]};
            --sharpOutlineColor: ${gray[20]};
            --cardBackground: ${neutral[30]};
            --tagColor: ${blue[100]};
            --code: ${pink[100]};
            --pageLink: ${gray[80]};
          }

          &.dark {
            --primaryColor: ${gray[60]}; //bgColor
            --primaryHoverColor: ${pink[60]}; //
            --primaryActiveColor: ${pink[60]};
            --secondaryColor: ${darkblue[80]};
            --secondaryHoverColor: ${gray[30]}; //postpreview hover
            --textColorOnSecondary: ${pink[40]};
            --textColorInverted: ${gray[10]};
            --textColorOnPrimary: ${neutral[50]};
            --sharpOutlineColor: ${gray[40]};
            --cardBackground: ${darkblue[80]};
            --tagColor: ${pink[60]};
            --code: #6272a4;
            --pageLink: ${gray[80]};
          }
        }
        * {
          box-sizing: border-box;
          margin: 0;
        }

        html,
        body {
          margin: 0;
          font-family: ${theme.primaryFont};
          background: var(--primaryColor);
          color: var(--textColorOnPrimary);
          font-size: ${theme.p};
          line-height: 1.7;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: auto;
        }
        /* remove margin for main div noscript tag*/
        > div {
          margin-top: 0;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          /**
 * Headings
 */

          margin-top: 1em;
          word-break: keep-all;
          color: var(--textColorOnSecondary);
          + * {
            margin-top: 0.5rem; //anything comes afte heading
          }
        }

        h1 {
          font-size: ${theme.h1};
          font-family: ${theme.secondaryFont};
          letter-spacing: -2.7px;
        }
        h2 {
          font-size: ${theme.h2};
          font-family: ${theme.secondaryFont};
        }
        h3 {
          font-size: ${theme.h3};
          font-family: ${theme.secondaryFont};
        }
        h4 {
          font-size: ${theme.h4};
          font-family: ${theme.secondaryFont};
        }
        h5 {
          font-size: ${theme.h5};
          text-transform: uppercase;
          font-weight: 600;
          font-family: ${theme.titleFont};
        }
        ol {
          list-style-position: inside;
          list-style-type: decimal;
        }
        ul,
        li,
        ol {
          padding: 0;
          margin: 0;
        }
        li {
          margin-top: 0.25rem;
        }

        ul {
          li {
            list-style: none;
          }
        }
        /* edit code block style */
        deckgo-highlight-code {
          --deckgo-highlight-code-font-size: 1.2rem;
        }
        p {
          font-family: 'Spoqa Han Sans Neo', sans-serif;
          font-weight: 500;
        }
        a {
          color: var(--secondaryColor);
          font-family: ${theme.secondaryFont};
        }
        button {
          cursor: pointer;
        }

        @font-face {
          font-family: 'Spoqa Han Sans Neo', 'sans-serif';
          font-style: normal;
          font-weight: 600;
          font-display: swap;
          src: local('Spoqa Han Sans Neo'), local('Spoqa Han Sans Neo'),
            url(${Fonts.SpoqaSans600OTF}?#iefix) format('embedded-opentype'),
            /* IE6-IE8 */ url(${Fonts.SpoqaSans600WOFF2}) format('woff2'),
            /* Super Modern Browsers */ url(${Fonts.SpoqaSans600WOFF})
              format('woff'),
            /* Modern Browsers */ url(${Fonts.SpoqaSans700TTF})
              format('truetype');
        }
        @font-face {
          font-family: 'Spoqa Han Sans Neo', 'sans-serif';
          font-style: normal;
          font-weight: 800;
          font-display: swap;
          src: local('Spoqa Han Sans Neo'), local('Spoqa Han Sans Neo'),
            url(${Fonts.Jost800EOT}?#iefix) format('embedded-opentype'),
            /* IE6-IE8 */ url(${Fonts.Jost800WOFF2}) format('woff2'),
            /* Super Modern Browsers */ url(${Fonts.Jost800WOFF}) format('woff'),
            /* Modern Browsers */ url(${Fonts.Jost800TTF}) format('truetype');
        }
        /* jost-600 - latin */
        @font-face {
          font-family: 'Jost';
          font-style: normal;
          font-weight: 600;
          font-display: swap;
          src: url(${Fonts.Jost600EOT}); /* IE9 Compat Modes */
          src: local('Jose'),
            url(${Fonts.Jost600EOT}?#iefix) format('embedded-opentype'),
            /* IE6-IE8 */ url(${Fonts.Jost600WOFF2}) format('woff2'),
            /* Super Modern Browsers */ url(${Fonts.Jost600WOFF}) format('woff'),
            /* Modern Browsers */ url(${Fonts.Jost600TTF}) format('truetype');
          unicode-range: U+0041-005A, U+0061-007A;
        }
        /* jost-800 - latin */
        /* jost-600 - latin */
        @font-face {
          font-family: 'Jost';
          font-style: normal;
          font-weight: 800;
          font-display: swap;
          src: url(${Fonts.Jost800EOT}); /* IE9 Compat Modes */
          src: local('Jose'),
            url(${Fonts.Jost800EOT}?#iefix) format('embedded-opentype'),
            /* IE6-IE8 */ url(${Fonts.Jost800WOFF2}) format('woff2'),
            /* Super Modern Browsers */ url(${Fonts.Jost800WOFF}) format('woff'),
            /* Modern Browsers */ url(${Fonts.Jost800TTF}) format('truetype');
          unicode-range: U+0041-005A, U+0061-007A;
        }

        @font-face {
          font-family: 'Sora';
          font-style: normal;
          font-weight: 600;
          font-display: swap;
          src: url(${Fonts.Sora600EOT}); /* IE9 Compat Modes */
          src: local('Jose'),
            url(${Fonts.Sora600EOT}?#iefix) format('embedded-opentype'),
            /* IE6-IE8 */ url(${Fonts.Sora600WOFF2}) format('woff2'),
            /* Super Modern Browsers */ url(${Fonts.Sora600WOFF}) format('woff'),
            /* Modern Browsers */ url(${Fonts.Sora600TTF}) format('truetype');
          unicode-range: U+AC00-D7A3, U+0030-0039, U+0020-002F, U+003A-0040,
            U+005B-0060, U+007B-007E, U+0041-005A, U+0061-007A, U+0030-0039;
        }

        @font-face {
          font-family: 'Sora';
          font-style: normal;
          font-weight: 800;
          font-display: swap;
          src: url(${Fonts.Sora800EOT}); /* IE9 Compat Modes */
          src: local('Sora'),
            url(${Fonts.Sora800EOT}?#iefix) format('embedded-opentype'),
            /* IE6-IE8 */ url(${Fonts.Sora800WOFF2}) format('woff2'),
            /* Super Modern Browsers */ url(${Fonts.Sora800WOFF}) format('woff'),
            /* Modern Browsers */ url(${Fonts.Sora800TTF}) format('truetype');
          unicode-range: U+AC00-D7A3, U+0030-0039, U+0020-002F, U+003A-0040,
            U+005B-0060, U+007B-007E, U+0041-005A, U+0061-007A, U+0030-0039;
        }
      `}
    />
  )
}

export default GlobalStyles
