import * as React from 'react'
import styled from '@emotion/styled'

const StyledPagination = styled('ul')`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  margin: 3rem 0;
  padding: 0;
`

export const Pagination = ({ children, ...props }) => {
  return <StyledPagination>{children}</StyledPagination>
}
