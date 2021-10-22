/** @jsx jsx */
import * as React from 'react'
import { css, jsx } from '@emotion/react'
import { NavLink } from './links/Link.style'
interface HeaderProps {
  siteTitle: string
}

const Header = ({ siteTitle }: HeaderProps): React.ReactElement => (
  <header
    css={css`
      border-bottom: 1px solid rgba(214, 210, 196, 0.3);
      display: flex;
      justify-content: space-between;
      padding: 0.5rem calc((100vw - 550px) / 2);
    `}
  >
    {/*brand */}
    <NavLink
      to={'/'}
      fontWeight="bold"
      css={css`
        letter-spacing: 0.1em;
      `}
    >
      {siteTitle}
    </NavLink>

    {/*navigation */}
    <nav
      css={css`
        margin-top: 0;
      `}
    >
      <NavLink to="/" activeClassName="current-page">
        Blog
      </NavLink>
      <NavLink to="/about" activeClassName="current-page">
        About
      </NavLink>
    </nav>
  </header>
)

export default Header
