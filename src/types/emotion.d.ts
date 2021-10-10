import '@emotion/react'
declare module '@emotion/react' {
  export interface Theme {
    font: {
      main: string
      code: string
      size: {
        f_16: string
        f_18: string
      }
    }
    colors: {
      darkPrimary: string
      darkSecondary: string
      onLightPrimary: string
      onLightSecondary: string
      onDarkPrimary: string
      pink: string

      white: string
      background_pink: string
      background_dark: string
      background_light: string
      yellow: string
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
