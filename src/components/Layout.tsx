/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react';
import styled from '@emotion/styled';
import Header from './Header';
import Footer from './Footer';
import useSiteMetadata from '../hooks/sitemetadata';
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';

deckDeckGoHighlightElement(); //load syntax highlighter

interface LayoutProps {
    children: React.ReactNode;
}

const Main = styled.main`
    margin: 2rem auto 4rem;
    max-width: 90vw;
    width: 550px;
`;

const Layout = ({ children }: LayoutProps) => {
    const { title }: { title: string } = useSiteMetadata();

    return (
        <>
            <Header siteTitle={title} />

            <Main>{children}</Main>
            <Footer />
        </>
    );
};

export default Layout;
