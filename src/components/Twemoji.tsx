import * as React from 'react'
import twemoji from 'twemoji'
import styled from '@emotion/styled'

const StyledTwemoji = styled('span')`
  img {
    display: inline-block;
    width: auto;
    height: 1em;
    vertical-align: -0.125em;
    margin: 0 3px 0 0;
  }
`
type TwemojiProps = {
  emoji: string
}
export const Twemoji = ({ emoji }: TwemojiProps): React.ReactElement => {
  return (
    <StyledTwemoji
      dangerouslySetInnerHTML={{
        __html: twemoji.parse(emoji, {
          folder: 'svg',
          ext: '.svg',
        }),
      }}
    />
  )
}
