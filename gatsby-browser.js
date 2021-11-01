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

