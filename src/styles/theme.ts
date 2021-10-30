import { primaryFont, code, typeScale, headerFont } from '../utils'
import { gray, pink, neutral } from '../utils'

export const theme = {
  primaryFont,
  headerFont,
  code,
  h1: typeScale.header1,
  h2: typeScale.header2,
  h3: typeScale.header3,
  h4: typeScale.header4,
  h5: typeScale.header5,
  p: typeScale.paragraph,
  helperText: typeScale.helperText,
  copyrightText: typeScale.copyrightText,

  colors: {
    primaryColor: neutral[100],
    primaryHoverColor: pink[20],
    primaryActiveColor: pink[90],
    secondaryColor: pink[100],
    textColorOnSecondary: gray[100],
    textColorInverted: gray[30],
    textColorOnPrimary: gray[80],
    sharpOutlineColor: gray[20],
    //
    //   darkPrimary: 'rgba(17, 24, 39, 1.8)',
    //   darkSecondary: '#202E4B',
    //   onLightPrimary: '#CCCBC8',
    //   onLightSecondary: '#F2F1ED',
    //   onDarkPrimary: '',
    //   pink: '#FF3D68',
    //   white: '#e7e8e9',
    //   background_pink: '#F8E2CF',
    //   background_dark: '#1C2333',
    //   background_light: '#EEE2DC',
    //   yellow: '#fdc57b',
  },
  breakpoints: {
    mobile: 'only screen and (max-width:50rem)',
    tablet: 'only screen and(max-width::65rem)',
  },
  spacings: {
    xxSmall: '.25rem',
    xSmall: '.5rem',
    small: '1rem',
    medium: '2rem',
    large: '3rem',
    xLarge: '4rem',
    xxLarge: '6rem',
  },
  animation: {
    button: 'box-shadow 0.3s ease',
    link: 'color 0.2s ease',
  },
  shadows: {
    shadow1: 'rgb(0 0 0 / 12%) 0px 1px 3px, rgb(0 0 0 / 24%) 0px 1px 2px',
    shadow2: '0px 5px 20px rgba(30,30,31,0.05)',
  },
}

export default theme
