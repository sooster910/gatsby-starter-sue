import { Link } from 'gatsby'
import React, { useEffect, useState } from 'react'
import Slugger from 'github-slugger'
import styled from '@emotion/styled'
import { Twemoji } from './Twemoji'
import { NavLink } from './links/Link.style'
import { css } from '@emotion/react'

const StyledContent = styled.li`
  padding-left: ${({ depth }) => (depth - 2) * 1}rem;
`
const StyledTableOfContents = styled.ul`
  max-width: 340px;
  min-width: 280px;
  align-self: flex-start;
  overflow: auto;
  font-size: 15px;
  padding: 16px;
  margin-bottom: 3rem;

  li {
    line-height: 1.5;
    margin-top: 1rem;
    text-decoration: none;
  }
`
const InnerScroll = styled.div`
  overflow: hidden;
  overflow-y: scroll;

  h3 {
    text-transform: uppercase;
  }
`
export const TableOfContents = ({ headings }) => {
  console.log('headings', headings)
  return (
    <StyledTableOfContents>
      <InnerScroll>
        <h3>Table of Contents</h3>

        {headings
          .filter((heading) => heading.depth !== 1)
          .map((heading) => (
            <StyledContent key={heading.value} depth={heading.depth}>
              <NavLink
                to={`#${Slugger.slug(heading.value)}`}
                css={css`
                  padding: 0;
                `}
              >
                {heading.value}
              </NavLink>
            </StyledContent>
          ))}
      </InnerScroll>
    </StyledTableOfContents>
  )
}