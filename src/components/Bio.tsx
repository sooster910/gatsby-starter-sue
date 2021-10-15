import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import { Avatar } from './Avatar'
import { useAvatar } from '../hooks/useAvatar'

const BioWrapper = styled.div`
  display: flex;
`
const Summary = styled.p`
  padding-left: ${(props) => props.theme.spacings.medium};
`

const Bio = (): React.ReactElement => {
  const avatar = useAvatar()
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <BioWrapper className="bio">
      <Avatar image={avatar} />
      {author?.name && (
        <Summary>
          Written by <strong>{author.name}</strong> {author?.summary || null}
          {` `}
          <a href={`https://twitter.com/${social?.twitter || ``}`}>
            You should follow them on Twitter
          </a>
        </Summary>
      )}
    </BioWrapper>
  )
}

export default Bio
