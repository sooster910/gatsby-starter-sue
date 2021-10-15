import * as React from 'react'
import styled from '@emotion/styled'

export interface emojiProps extends React.HTMLAttributes<HTMLSpanElement> {
  label?: string
  symbol?: string
}

const StyledEmoji = styled('span')`
  margin-right: 6px;
`

export const Emoji = ({
  children,
  ...props
}: emojiProps): React.ReactElement => (
  <StyledEmoji
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ''}
    aria-hidden={props.label ? 'false' : 'true'}
  >
    {props.symbol}
    {children}
  </StyledEmoji>
)

export default Emoji
