import { PageLink } from '../links/Link.style'
import { StyledPrevNextNav } from './PrevNextNav.styled'

export type LinkInfo = {
  frontmatter: {
    lastUpdated: string
    title: string
  }
  id: string
  slug: string
}
export type PrevNextNavProps = {
  prev: LinkInfo | -1
  next: LinkInfo | -1
}

export const PrevNextNav = ({ prev, next }: PrevNextNavProps) => (
  <StyledPrevNextNav prev={prev} next={next}>
    {prev !== -1 && (
      <PageLink to={`/${prev.slug}`} direction={'prev'}>
        {prev?.frontmatter?.title}
      </PageLink>
    )}
    {next !== -1 && (
      <PageLink to={`/${next.slug}`} direction={'next'}>
        {next?.frontmatter.title}
      </PageLink>
    )}
  </StyledPrevNextNav>
)
