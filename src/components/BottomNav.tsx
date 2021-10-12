import styled from '@emotion/styled'
import { PageLink } from './PageLink'
import React from 'react'

export type LinkInfo = {
  frontmatter: {
    lastUpdated: string
    title: string
  }
  id: string
  slug: string
}
export type BottomNavProps = {
  prev: LinkInfo | -1
  next: LinkInfo | -1
}

const BottomNavWrapper = styled('div')<BottomNavProps>`
  width: 100%;
  display: flex;
  justify-content: ${(props) =>
    props.prev === -1
      ? 'flex-end'
      : props.next === -1
      ? 'flex-start'
      : 'space-between'};
`

export const BottomNav = ({ prev, next }: BottomNavProps) => (
  <BottomNavWrapper prev={prev} next={next}>
    <PageLink link={prev} direction={'prev'} />
    <PageLink link={next} direction={'next'} />
  </BottomNavWrapper>
)
