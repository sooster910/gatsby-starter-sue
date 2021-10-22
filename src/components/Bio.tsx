import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import { Avatar } from './Avatar'
import { useAvatar } from '../hooks/useAvatar'
import { Github, LinkedIn, Facebook } from './socialMediaIsvgs'
import { SocialMediaIcon } from './SocialMediaIcon'

type BioProps = {
  isProfile: boolean
}

const BioWrapper = styled.div<BioProps>`
  ${({ isProfile }) => `
   background:${isProfile ? 'none' : 'rgba(249, 250, 251, 1)'}
    `};
  padding: 1rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  margin-top: 4em;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
`
const SummaryWrapper = styled.div`
  width: 76%;
`
const Summary = styled.p`
  padding-left: ${(props) => props.theme.spacings.medium};
`
const Icons = styled.div`
  display: flex;
  justify-content: flex-start;
  align-self: flex-start;
  padding-left: 2rem;
`
const Bio = ({ isProfile }: BioProps): React.ReactElement => {
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
            email {
              emailAddress
              showIcon
            }
            facebook {
              accountName
              showIcon
            }
            github {
              accountName
              showIcon
            }
            linkedIn {
              accountName
              showIcon
            }
            twitter {
              accountName
              showIcon
            }
          }
        }
      }
    }
  `)
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social
  console.log('social', social)
  return (
    <BioWrapper className="bio" isProfile={isProfile}>
      <Avatar image={avatar} />
      <SummaryWrapper>
        {author?.name && (
          <Summary>
            Written by <strong>{author.name}</strong> {author?.summary || null}
            {` `}
          </Summary>
        )}
        <Icons>
          {social.github.showIcon && (
            <SocialMediaIcon
              accountName={social.github.accountName}
              preHref={'https://github.com/'}
            >
              <Github />
            </SocialMediaIcon>
          )}
          <SocialMediaIcon
            accountName={social.facebook.accountName}
            preHref={'https://facebook.com/'}
          >
            <Facebook />
          </SocialMediaIcon>
          <SocialMediaIcon
            accountName={social.linkedIn.accountName}
            preHref={'https://linkedin.com/'}
          >
            <LinkedIn />
          </SocialMediaIcon>
        </Icons>
      </SummaryWrapper>
    </BioWrapper>
  )
}

export default Bio
