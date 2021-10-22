/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it
/** @jsx jsx */
import React from 'react'
import { jsx, ThemeProvider } from '@emotion/react'
import { theme } from './src/styles/theme'

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
)
