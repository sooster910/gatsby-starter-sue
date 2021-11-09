import { Theme } from '@emotion/react'
import {
  primaryFont,
  secondaryFont,
  code,
  typeScale,
  titleFont,
} from '../utils/typography'
import { gray, pink, neutral, blue, darkblue } from '../utils/colors'

export const light = {
  primaryFont,
  secondaryFont,
  titleFont,
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
    primaryColor: neutral[40],
    primaryHoverColor: pink[20],
    primaryActiveColor: pink[60],
    secondaryColor: neutral[100],
    secondaryHoverColor: neutral[80],
    textColorOnSecondary: gray[100],
    textColorInverted: gray[10],
    textColorOnPrimary: gray[90],
    sharpOutlineColor: gray[20],
    cardBackground: neutral[30],
    tagColor: blue[100],
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

const dark = {
  primaryFont,
  titleFont,
  secondaryFont,
  code,
  h1: typeScale.header1,
  h2: typeScale.header2,
  h3: typeScale.header3,
  h4: typeScale.header4,
  h5: typeScale.header5,
  p: typeScale.paragraph,
  helperText: typeScale.helperText,
  copyrightText: typeScale.copyrightText,

  // colors: {
  //   primaryColor: gray[60], //bgColor
  //   primaryHoverColor: pink[60], //
  //   primaryActiveColor: pink[60],
  //   secondaryColor: darkblue[80],
  //   secondaryHoverColor: gray[30], //postpreview hover
  //   textColorOnSecondary: pink[40],
  //   textColorInverted: gray[10],
  //   textColorOnPrimary: neutral[100],
  //   sharpOutlineColor: gray[40],
  //   cardBackground: "none",
  //   tagColor: pink[60]

  // },
  colors: {
    primaryColor: gray[60], //bgColor
    primaryHoverColor: pink[60], //
    primaryActiveColor: pink[60],
    secondaryColor: darkblue[80],
    secondaryHoverColor: gray[30], //postpreview hover
    textColorOnSecondary: pink[40],
    textColorInverted: gray[10],
    textColorOnPrimary: neutral[100],
    sharpOutlineColor: gray[40],
    cardBackground: 'none',
    tagColor: pink[60],
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

const theme: ThemeGroup = {
  light,
  dark,
}

interface ThemeGroup {
  light: Theme
  dark: Theme
}

export default theme
