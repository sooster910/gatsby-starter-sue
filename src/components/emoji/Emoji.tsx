import * as React from 'react'
import styled from '@emotion/styled'
import { wave } from '../Twemoji'
import { css } from '@emotion/react'

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
    css={css`
      animation: ${wave} 2s infinite;
    `}
  >
    {props.symbol}
    {children}
  </StyledEmoji>
)

export default Emoji
