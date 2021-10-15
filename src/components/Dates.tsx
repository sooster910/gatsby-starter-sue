import * as React from 'react'
import styled from '@emotion/styled'
import { formatReadingTimeToEmoji } from '../utils/helper'
import { Twemoji } from './Twemoji'

export type DatesProps = {
  published: string
  updated: string | DatesProps['published']
  timeToRead: number
  isPreview: boolean
}

type StyledDatesProps = {
  isPreview: boolean
}

export const StyledDates = styled('div')<StyledDatesProps>`
  display: flex;
  align-items: center;
  justify-content: ${({ isPreview }) => (isPreview ? `flex-start` : `center`)};

  p,
  span {
    font-size: ${({ theme }) => theme.helperText}!important;
    color: ${({ theme }) => theme.colors.textColorInverted}!important;
    margin-top: 0;
  }
`

export const Dates = ({
  published,
  updated,
  timeToRead,
  isPreview,
}: DatesProps): React.ReactElement => {
  const emojis = formatReadingTimeToEmoji(timeToRead)
  return (
    <StyledDates isPreview={isPreview}>
      <p>
        {' '}
        <Twemoji emoji={'📆'} />
        Published &#58;
        {published} &bull;
      </p>
      <p>
        {' '}
        <Twemoji emoji={'📆'} />
        Updated &#58;
        {updated} &bull;
      </p>
      <p>
        {emojis.list.map((emoji, i) => (
          <Twemoji emoji={emoji} key={`${emojis.name}_${i}`} />
        ))}
        {`${timeToRead}min`}
      </p>
    </StyledDates>
  )
}
