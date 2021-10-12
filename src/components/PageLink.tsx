// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import * as React from 'react'
import { LinkInfo } from './BottomNav'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import GatsbyLink from 'gatsby-link'

export type direction = 'prev' | 'next'

type PageLinkProps = {
  link: LinkInfo | -1
  direction: direction
}
type StyledPageLinkProps = {
  direction: 'prev' | 'next'
}
const psuedo = ({ direction }: StyledPageLinkProps) =>
  direction === 'prev'
    ? css`
        &::before {
          content: '\u2190';
          font-size: 17px;
          display: inline-block;
          color: #999;
          margin-right: 9px;
          vertical-align: middle;
          transition: transform 0.2s ease-out;
          text-align: right;
        }
        &:hover {
          &:before {
            transform: translateX(-4px);
          }
        }
      `
    : css`
        &::after {
          content: '\u2192';
          font-size: 17px;
          color: #999;
          margin-left: 9px;
          display: inline-block;
          vertical-align: middle;
          transition: transform 0.2s ease-out;
        }
        &:hover {
          &:after {
            transform: translateX(4px);
          }
        }
      `
const StyledPageLink = styled('a')<StyledPageLinkProps>`
  ${psuedo};
  margin-right: 8px;
  box-shadow: rgb(0 0 0 / 12%) 0px 1px 2px;
  cursor: pointer;
  padding: 12px 23px;
  border: 1px solid #495061;
  align-items: center;
  border-radius: 12px;
  background-color: #495061;
  font-size: ${(props) => props.theme.font.size.f_18};
  font-weight: bold;
  color: rgba(242, 132, 158, 1);
  text-decoration: none;
`
export const PageLink = ({ link, direction }: PageLinkProps) => {
  if (link !== -1) {
    return (
      <StyledPageLink direction={direction} href={`/${link.slug}`}>
        <span
          css={css`
            &:hover {
              border-bottom: 2px solid rgba(242, 132, 158, 1);
            }
          `}
        >
          {link.frontmatter.title}
        </span>
      </StyledPageLink>
    )
  }
}
