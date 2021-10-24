import React from 'react'
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LineShareButton,
  LineIcon,
  LinkedinShareButton,
  LinkedinIcon,
  RedditShareButton,
  RedditIcon,
} from 'react-share'
import styled from '@emotion/styled'
import useSiteMetadata from '../hooks/sitemetadata'

const StyledShare = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 3rem 0;
`

const StyledHorizentalLine = styled.div`
  flex-grow: 1;
  border-top: 1px solid #cdcdcd;
`
const StyledSpan = styled.span`
  font-size: 70%;
  text-transform: uppercase;
  line-height: 2.5;
  opacity: 0.7;
  padding: 0 2rem;
`
export const Share = ({ title, url, description }) => {
  const { shareButtons } = useSiteMetadata()
  return (
    <StyledShare>
      <StyledHorizentalLine></StyledHorizentalLine>
      <StyledSpan>Share article</StyledSpan>
      <ul style={{ listStyle: 'none', margin: '0', padding: '0' }}>
        <li style={{ display: 'inline-block' }}>
          <TwitterShareButton
            title={title}
            via={''}
            url={url}
            style={{ marginRight: '7px' }}
          >
            <TwitterIcon size={40} round={true} />
          </TwitterShareButton>
        </li>
        {shareButtons.reddit && (
          <li style={{ display: 'inline-block' }}>
            <RedditShareButton
              title={title}
              url={url}
              style={{ marginRight: '7px' }}
            >
              <RedditIcon size={40} round={true} />
            </RedditShareButton>
          </li>
        )}
        {shareButtons.facebook && (
          <li style={{ display: 'inline-block' }}>
            <FacebookShareButton url={url} style={{ marginRight: '7px' }}>
              <FacebookIcon size={40} round={true} />
            </FacebookShareButton>
          </li>
        )}
        {shareButtons.linkedIn && (
          <li style={{ display: 'inline-block' }}>
            <LinkedinShareButton url={url} style={{ marginRight: '7px' }}>
              <LinkedinIcon size={40} round={true} />
            </LinkedinShareButton>
          </li>
        )}
        {shareButtons.line && (
          <li style={{ display: 'inline-block', marginRight: '7px' }}>
            <LineShareButton url={url}>
              <LineIcon size={40} round={true} />
            </LineShareButton>
          </li>
        )}
      </ul>
    </StyledShare>
  )
}
