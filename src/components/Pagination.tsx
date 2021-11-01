import styled from '@emotion/styled'
import { ReactNode } from 'react'

const StyledPagination = styled('ul')`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  margin: 3rem 0;
  padding: 0;
`
type PagenationProps = {
  children: ReactNode
}

export const Pagination = ({ children, ...props }: PagenationProps) => {
  return <StyledPagination {...props}>{children}</StyledPagination>
}
