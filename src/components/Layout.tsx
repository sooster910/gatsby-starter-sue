/**
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react'
import styled from '@emotion/styled'
import Header from './Header'
import Footer from './Footer'
import useSiteMetadata from '../hooks/sitemetadata'
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader'
import { Aside } from './Aside'
import { CategoryList } from './CategoryList'
import { TableOfContents } from './TableOfContents'

/*load syntax highlighter*/
deckDeckGoHighlightElement()

interface LayoutProps {
  children: React.ReactNode
  headings?: {
    depth: number
    value: string
  }[]
}

const Wrapper = styled.div`
  display: flex;
  height: auto;
  margin: 4rem auto 4rem;
  max-width: 1022px;
  justify-content: center;
`
const Main = styled.main`
  max-width: 680px;
`

const Layout = ({ children, headings }: LayoutProps): React.ReactElement => {
  const { title }: { title: string } = useSiteMetadata()

  return (
    <>
      <Header siteTitle={title} />
      <Wrapper>
        <Main>{children}</Main>
        <Aside>
          {typeof headings !== 'undefined' &&
            Array.isArray(headings) &&
            headings.length && <TableOfContents headings={headings} />}
          <CategoryList />
        </Aside>
      </Wrapper>
      <Footer />
    </>
  )
}

export default Layout
