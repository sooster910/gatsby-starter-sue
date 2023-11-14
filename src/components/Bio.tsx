import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import { Avatar } from './Avatar'
import { useAvatar } from '../hooks/useAvatar'
import {
  GitHubButton,
  FacebookButton,
  LinkedInButton,
  EmailButton,
} from './SocialButtons'
import { Emoji } from './Emoji'
import { css, keyframes } from '@emotion/react'

type BioProps = {
  isProfile: boolean
}
const wave = keyframes`
          0%, 60%, 100% {
              transform: rotate(0deg);
          }
          10%, 30% {
              transform: rotate(14deg);
          }
          20% {
              transform: rotate(-8deg);
          }
          40% {
              transform: rotate(-4deg);
          }
          50% {
              transform: rotate(10deg);
          }
`
const StyledBioWrapper = styled.div``
const StyledBio = styled.div<BioProps>`
  background: ${({ isProfile }) =>
    isProfile ? `none` : `var(--cardBackground)`};
  padding: 1rem;
  border-radius: 12px;
  margin-bottom: 7rem;
  margin-top: ${({ isProfile }) => (isProfile ? `0` : `4em`)};
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`
const SummaryWrapper = styled.div`
  width: 76%;
`
const Greeting = styled.h1<BioProps>`
  font-size: ${(props) => props.theme.h1};
  padding-left: 2rem;
  display: ${({ isProfile }) => (isProfile ? `block` : `none`)};
`
const Summary = styled.p`
  padding-left: ${(props) => props.theme.spacings.medium};
  color: var(--textColorOnSecondary);
  font-family: ${({ theme }) => theme.primaryFont};
  line-height: 1.8rem;
  font-weight: 600;
  font-size: ${({ theme }) => theme.helperText};
`
const Icons = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 2rem 0;
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
            greeting
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
  return (
    <StyledBioWrapper className="bio">
      {author?.greeting && (
        <Greeting isProfile={isProfile}>
          {author?.greeting}{' '}
          <Emoji
            label={'wave'}
            symbol={'👋'}
            css={css`
              animation-name: ${wave};
              animation-iteration-count: infinite;
              animation-duration: 2.5s;
              display: inline-block;
            `}
          />
        </Greeting>
      )}
      <StyledBio isProfile={isProfile}>
        <Avatar image={avatar} />
        <SummaryWrapper>
          {author?.summary?.split('\n').map((item: string, i: string) => (
            <Summary key={i}>{item}</Summary>
          ))}
          <Icons>
            {social.github.showIcon && (
              <GitHubButton
                accountName={social.github.accountName}
                preHref={'https://github.com/'}
              />
            )}
            {social.facebook.showIcon && (
              <FacebookButton
                accountName={social.facebook.accountName}
                preHref={'https://facebook.com/'}
              />
            )}
            {social.linkedIn.showIcon && (
              <LinkedInButton
                accountName={social.linkedIn.accountName}
                preHref={'https://linkedin.com/'}
              />
            )}
            {social.email.showIcon && (
              <EmailButton
                accountName={social.email.accountName}
                preHref={social.email.emailAddress}
              />
            )}
          </Icons>
        </SummaryWrapper>
      </StyledBio>
    </StyledBioWrapper>
  )
}

export default Bio
