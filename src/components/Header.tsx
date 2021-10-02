/** @jsx jsx */
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Link } from 'gatsby';
import { jsx } from '@emotion/react';
interface HeaderProps {
    siteTitle: string;
}

type NavLinkProps = {
    fontWeight?: string;
};

const NavLink = styled(Link)<NavLinkProps>`
    color: #777;
    font-size: 1rem;
    font-weight: ${props => props?.fontWeight || 'normal'};
    line-height: 1;
    margin: 0 0.5rem 0 0;
    padding: 0.25rem;
    text-decoration: none;

    &.current-page {
        border-bottom: 2px solid rgba(214, 210, 196, 0.3);
    }

    &:last-of-type {
        margin-right: 0;
    }
`;

const Header = ({ siteTitle }: HeaderProps) => (
    <header
        css={css`
            border-bottom: 1px solid rgba(214, 210, 196, 0.3);
            display: flex;
            justify-content: space-between;
            padding: 0.5rem calc((100vw - 550px) / 2);
        `}
    >
        {/*brand */}
        {/*navigation */}
        <NavLink to="/" fontWeight="bold">
            {siteTitle}
        </NavLink>
        <nav
            css={css`
                margin-top: 0;
            `}
        >
            <NavLink to="/" activeClassName="current-page">
                Home
            </NavLink>
            <NavLink to="/about" activeClassName="current-page">
                {' '}
                About
            </NavLink>
        </nav>
    </header>
);

export default Header;
