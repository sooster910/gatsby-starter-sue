import styled from '@emotion/styled'
import { PrevNextNavProps } from './PrevNextNav'

export const StyledPrevNextNav = styled('div')<PrevNextNavProps>`
  width: 100%;
  display: flex;
  justify-content: ${(props) =>
    props.prev === -1
      ? 'flex-end'
      : props.next === -1
      ? 'flex-start'
      : 'space-between'};
`
