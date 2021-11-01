import styled from '@emotion/styled'
import { DefaultLink } from './Link'
import { css } from '@emotion/react'

type NavLinkProps = {
  fontWeight?: string
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
          margin-right: 9px;
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
          margin-left: 9px;
          display: inline-block;
          transition: transform 0.2s ease-out;
        }
        &:hover {
          &:after {
            transform: translateX(4px);
          }
        }
      `

export const StyledPostPreview = styled(DefaultLink)`
  position: relative;
  width: 100%;
  z-index: 100;
  background-color: transparent;
  /* display: block; */
  text-decoration: none;
`

export const PageLink = styled(DefaultLink)`
  min-width: 100px;
  background-color: var(--primaryActiveColor);
  padding: 8px 12px;
  color: var(--textColorOnPrimary);
  font-weight: 500;
  border-radius: 12px;
  text-decoration: none;
  text-transform: uppercase;
  ${psuedo}
`

export const NavLink = styled(DefaultLink)<NavLinkProps>`
  color: var(--textColorOnPrimary);
  font-size: 1rem;
  font-weight: ${({ fontWeight }) => fontWeight || 'normal'};
  line-height: 1;
  padding: 0.25rem;
  text-decoration: none;

  &.current-page {
    border-bottom: 2px solid rgba(214, 210, 196, 0.3);
  }

  &:last-of-type {
    margin-right: 0;
  }

  &:hover {
    color: var(--primaryActiveColor);
    transition: color 0.2s ease-out;
  }
`

export const TagLink = styled(DefaultLink)`
  background: var(--tagColor);
  padding: 7px 13px;
  border-radius: 7px;
  color: var(--sharpOutlineColor);
  font-size: 11px;
  font-weight: 700;
  text-decoration: none;
  margin-right: 4px;
`

export const PaginationLink = styled(DefaultLink)``
