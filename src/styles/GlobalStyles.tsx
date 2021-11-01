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
            --primaryColor: ${neutral[40]};
            --primaryHoverColor: ${pink[20]};
            --primaryActiveColor: ${pink[60]};
            --secondaryColor: ${neutral[40]};
            --secondaryHoverColor: ${neutral[30]};
            --textColorOnSecondary: ${gray[100]};
            --textColorInverted: ${gray[10]};
            --textColorOnPrimary: ${gray[80]};
            --sharpOutlineColor: ${gray[20]};
            --cardBackground: ${neutral[30]};
            --tagColor: ${blue[100]};
          }

          &.dark {
            --primaryColor: ${gray[60]}; //bgColor
            --primaryHoverColor: ${pink[60]}; //
            --primaryActiveColor: ${pink[60]};
            --secondaryColor: ${darkblue[80]};
            --secondaryHoverColor: ${gray[30]}; //postpreview hover
            --textColorOnSecondary: ${pink[40]};
            --textColorInverted: ${gray[10]};
            --textColorOnPrimary: ${neutral[100]};
            --sharpOutlineColor: ${gray[40]};
            --cardBackground: 'none';
            --tagColor: ${pink[60]};
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
          color: var(--textColorOnSecondary);
          + * {
            margin-top: 0.5rem; //anything comes afte heading
          }
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
        /* edit code block style */
        deckgo-highlight-code {
          --deckgo-highlight-code-font-size: 1.2rem;
        }
        p {
          font-family: 'Spoqa Han Sans', sans-serif !important;
        }
        a {
          color: var(--secondaryColor);
        }
        button {
          cursor: pointer;
        }
        @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-weight: 500;
          font-display: swap;
          src: local('Inter'), local('Inter'),
            url(${Fonts.Inter500TTF}) format('ttf'),
            url(${Fonts.Inter500WOFF}) format('woff');
        }

        @font-face {
          font-family: 'Noto Sans KR';
          font-style: normal;
          font-weight: 500;
          font-display: swap;
          src: local('Noto Sans KR'), local('Noto Sans KR'),
            url(${Fonts.NotoKR500WOFF2}) format('woff2'),
            url(${Fonts.NotoKR500WOFF}) format('woff');
        }
        @font-face {
          font-family: 'Spoqa Han Sans';
          font-style: normal;
          font-weight: 500;
          font-display: swap;
          src: local('Spoqa Han Sans'), local('Spoqa Han Sans'),
            url(${Fonts.SpoqaSans500WOFF2}) format('woff2'),
            url(${Fonts.SpoqaSans500WOFF}) format('woff');
        }
        /* inter-regular - latin */
        //@font-face {
        //  font-family: 'Inter';
        //  font-style: normal;
        //  font-weight: 400;
        //  src: url('./assets/fonts/inter-v3-latin/inter-v3-latin-regular.eot'); /* IE9 Compat Modes */
        //  src: local(''),
        //    url('./assets/fonts/inter-v3-latin/inter-v3-latin-regular.eot?#iefix')
        //      format('embedded-opentype'),
        //    /* IE6-IE8 */
        //      url('./assets/fonts/inter-v3-latin/inter-v3-latin-regular.woff2')
        //      format('woff2'),
        //    /* Super Modern Browsers */
        //      url('./assets/fonts/inter-v3-latin/inter-v3-latin-regular.woff')
        //      format('woff'),
        //    /* Modern Browsers */
        //      url('./assets/fonts/inter-v3-latin/inter-v3-latin-regular.ttf')
        //      format('truetype'),
        //    /* Safari, Android, iOS */
        //      url('./assets/fonts/inter-v3-latin/inter-v3-latin-regular.svg#Inter')
        //      format('svg'); /* Legacy iOS */
        //}
        ///* inter-500 - latin */
        //@font-face {
        //  font-family: 'Inter';
        //  font-style: normal;
        //  font-weight: 500;
        //  src: url('./assets/fonts/inter-v3-latin/inter-v3-latin-500.eot'); /* IE9 Compat Modes */
        //  src: local(''),
        //    url('./assets/fonts/inter-v3-latin/inter-v3-latin-500.eot?#iefix')
        //      format('embedded-opentype'),
        //    /* IE6-IE8 */
        //      url('./assets/fonts/inter-v3-latin/inter-v3-latin-500.woff2')
        //      format('woff2'),
        //    /* Super Modern Browsers */
        //      url('./assets/fonts/inter-v3-latin/inter-v3-latin-500.woff')
        //      format('woff'),
        //    /* Modern Browsers */
        //      url('./assets/fonts/inter-v3-latin/inter-v3-latin-500.ttf')
        //      format('truetype'),
        //    /* Safari, Android, iOS */
        //      url('./assets/fonts/inter-v3-latin/inter-v3-latin-500.svg#Inter')
        //      format('svg'); /* Legacy iOS */
        //}
        ///* inter-600 - latin */
        //@font-face {
        //  font-family: 'Inter';
        //  font-style: normal;
        //  font-weight: 600;
        //  src: url('./assets/fonts/inter-v3-latin/inter-v3-latin-600.eot'); /* IE9 Compat Modes */
        //  src: local(''),
        //    url('./assets/fonts/inter-v3-latin/inter-v3-latin-600.eot?#iefix')
        //      format('embedded-opentype'),
        //    /* IE6-IE8 */
        //      url('./assets/fonts/inter-v3-latin/inter-v3-latin-600.woff2')
        //      format('woff2'),
        //    /* Super Modern Browsers */
        //      url('./assets/fonts/inter-v3-latin/inter-v3-latin-600.woff')
        //      format('woff'),
        //    /* Modern Browsers */
        //      url('./assets/fonts/inter-v3-latin/inter-v3-latin-600.ttf')
        //      format('truetype'),
        //    /* Safari, Android, iOS */
        //      url('./assets/fonts/inter-v3-latin/inter-v3-latin-600.svg#Inter')
        //      format('svg'); /* Legacy iOS */
        //}
        ///* inter-700 - latin */
        //@font-face {
        //  font-family: 'Inter';
        //  font-style: normal;
        //  font-weight: 700;
        //  src: url('./assets/fonts/inter-v3-latin/inter-v3-latin-700.eot'); /* IE9 Compat Modes */
        //  src: local(''),
        //    url('./assets/fonts/inter-v3-latin/inter-v3-latin-700.eot?#iefix')
        //      format('embedded-opentype'),
        //    /* IE6-IE8 */
        //      url('./assets/fonts/inter-v3-latin/inter-v3-latin-700.woff2')
        //      format('woff2'),
        //    /* Super Modern Browsers */
        //      url('./assets/fonts/inter-v3-latin/inter-v3-latin-700.woff')
        //      format('woff'),
        //    /* Modern Browsers */
        //      url('./assets/fonts/inter-v3-latin/inter-v3-latin-700.ttf')
        //      format('truetype'),
        //    /* Safari, Android, iOS */
        //      url('./assets/fonts/inter-v3-latin/inter-v3-latin-700.svg#Inter')
        //      format('svg'); /* Legacy iOS */
        //}
      `}
    />
  )
}

export default GlobalStyles
