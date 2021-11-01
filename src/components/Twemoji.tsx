import * as React from 'react'
import twemoji from 'twemoji'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

type TwemojiStyledProps = {
  width?: number
  animation?: string
}

export const wave = keyframes`
 0{
   transform: rotation(0deg)
 }
  10%{
   transform: rotation(14deg)
 }
  20%{
   transform: rotation(-8deg)
 }
  30%{
   transform: rotation(14deg)
 }
 
  40% {
    transform: rotation(-4deg);
  }
 50% {
    transform: rotation(10deg);
  }
   60% {
    transform: rotation(0deg);
  }
 100% {
    transform: rotation(0deg);
  
  }
`

export const StyledTwemoji = styled('span')<TwemojiStyledProps>`
  display: inline-block;

  img {
    display: inline-block;
    height: auto;
    vertical-align: -0.125em;
    margin: 0 3px 0 0;
    width: ${({ width }) => (width ? `${width}px` : `16px`)};
  }
`

type TwemojiProps = {
  emoji: string
  width?: number
  animation?: string
}

export const Twemoji = ({
  emoji,
  animation,
}: TwemojiProps): React.ReactElement => {
  return (
    <StyledTwemoji
      animation={animation}
      dangerouslySetInnerHTML={{
        __html: twemoji.parse(emoji, {
          folder: 'svg',
          ext: '.svg',
        }),
      }}
    />
  )
}
