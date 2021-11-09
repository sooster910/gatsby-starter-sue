import React from 'react'
import { css } from '@emotion/react'
import { NavLink } from './links/Link.style'
import { Twemoji } from './Twemoji'
import { StaticImage } from 'gatsby-plugin-image'
import { useThemeState, useThemeDispatch } from '../store/GlobalContextProvider'
interface HeaderProps {
  siteTitle: string
}

const Header = ({ siteTitle }: HeaderProps): React.ReactElement => {
  const dispatch = useThemeDispatch()
  const state = useThemeState()
  const setToggleTheme = () => dispatch({ type: 'TOGGLE_DARK_MODE', theme: '' })
  return (
    <header
      css={css`
        /* border-bottom: 1px solid rgba(214, 210, 196, 0.3); */
        display: flex;
        justify-content: space-between;
        padding: 1rem 2rem;
        width: 100%;
        /* background: rgba(255, 255, 255, 0.25) none repeat scroll 0% 0%;
        backdrop-filter: blur(10 px); */
        z-index: 1;
      `}
    >
      {/*brand */}
      <NavLink
        to={'/'}
        fontWeight="bold"
        css={css`
          letter-spacing: 0.1em;
          display: flex;
          align-items: center;
        `}
      >
        <StaticImage
          src={'../images/favicon.png'}
          alt="Logo"
          css={css`
            width: 43px;
            border-radius: 50%;
            margin-right: 1rem;
          `}
        />
        <span> {siteTitle}</span>
      </NavLink>

      {/*navigation */}
      <nav
        css={css`
          margin-top: 0;
          display: flex;
          align-items: center;
          width: 22%;
          justify-content: space-between;
        `}
      >
        <NavLink to="/" activeClassName="current-page">
          Blog
        </NavLink>
        <NavLink to="/about/" activeClassName="current-page">
          About
        </NavLink>

        <button onClick={setToggleTheme}>
          <Twemoji
            emoji={state?.theme === 'dark' ? '☀️' : '🌓'}
            css={css`
              width: 24px;
            `}
          />
        </button>
      </nav>
    </header>
  )
}

export default Header
