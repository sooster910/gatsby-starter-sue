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
import { CategoryList } from './CategoryList'
/*load syntax highlighter*/
deckDeckGoHighlightElement()

interface LayoutProps {
  children: React.ReactNode
}

const Wrapper = styled.div`
  display: flex;
  height: auto;
  margin: 2rem auto 4rem;
  max-width: 1022px;
  justify-content: center;
`
const Main = styled.main`
  width: 640px;
`

const Aside = styled.aside`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
`
const Layout = ({ children }: LayoutProps): React.ReactElement => {
  const { title }: { title: string } = useSiteMetadata()

  return (
    <>
      <Header siteTitle={title} />
      <Wrapper>
        <Main>{children}</Main>
        <Aside>
          <CategoryList />
        </Aside>
      </Wrapper>
      <Footer />
    </>
  )
}

export default Layout
