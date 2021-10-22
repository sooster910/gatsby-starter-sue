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
// const StyledPageLink = styled('a')<StyledPageLinkProps>`
//   ${psuedo};
//   margin-right: 8px;
//   box-shadow: rgb(0 0 0 / 12%) 0px 1px 2px;
//   cursor: pointer;
//   padding: 12px 23px;
//   border: 1px solid #495061;
//   align-items: center;
//   border-radius: 12px;
//   background-color: #495061;
//   font-size: ${(props) => props.theme.font.size.f_18};
//   font-weight: bold;
//   color: rgba(242, 132, 158, 1);
//   text-decoration: none;
// `
export const StyledPostPreview = styled(DefaultLink)`
  position: relative;
  width: 100%;
  z-index: 100;
  background-color: transparent;
  display: block;
  text-decoration: none;
`

export const PageLink = styled(DefaultLink)`
  min-width: 100px;
  background-color: ${({ theme }) => theme.colors.primaryHoverColor};
  padding: 8px 12px;
  color: ${({ theme }) => theme.colors.secondaryColor};
  font-weight: 500;
  border-radius: 12px;
  text-decoration: none;
  ${psuedo}
`

export const NavLink = styled(DefaultLink)<NavLinkProps>`
  color: ${({ theme }) => theme.colors.textColorOnPrimary};
  font-size: 1rem;
  font-weight: ${({ fontWeight }) => fontWeight || 'normal'};
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

  &:hover {
    color: ${({ theme }) => theme.colors.primaryActiveColor};
    transition: color 0.2s ease-out;
  }
`
