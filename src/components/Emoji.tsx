import * as React from 'react'

interface emojiProps extends React.HTMLAttributes<HTMLSpanElement> {
  label?: string
  symbol?: string
}

export const Emoji = (props: emojiProps): React.ReactElement => {
  return (
    <span
      className="emoji"
      role="img"
      aria-label={props.label ? props.label : ''}
      aria-hidden={props.label ? 'false' : 'true'}
      {...props}
    >
      {props.symbol}
    </span>
  )
}
