import '@emotion/react'
declare module '@emotion/react' {
  export interface Theme {
    primaryFont: string
    code: string
    h1: string
    h2: string
    h3: string
    h4: string
    h5: string
    p: string
    helperText: string
    copyrightText: string

    colors: {
      primaryColor: string
      secondaryColor: string
      primaryHoverColor: string
      primaryActiveColor: string
      textColorOnPrimary: string
      textColorInverted: string
      textColorOnSecondary: string
    }
    breakpoints: {
      mobile: string
      tablet: string
    }
    spacings: {
      xxSmall: string
      xSmall: string
      small: string
      medium: string
      large: string
      xLarge: string
      xxLarge: string
    }
    animation: {
      button: string
      link: string
    }
    shadows: {
      shadow1: string
    }
  }
}
