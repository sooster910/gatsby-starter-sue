/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it
/** @jsx jsx */
import * as React from 'react'
import { jsx } from '@emotion/react'
import GlobalContextProvider from './src/store/GlobalContextProvider'
import './src/styles/normalize.css'

export const wrapRootElement = ({ element }) => {
  return(<GlobalContextProvider > 
    {element}
  </GlobalContextProvider>)
}
