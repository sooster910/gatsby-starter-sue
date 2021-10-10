import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { GatsbyImage, getImage } from 'gatsby-plugin-image' // post page
import Emoji from './Emoji'
import { formatReadingTimeToEmoji } from '../utils/helper'

export interface PostPreviewProps {
  post: {
    title: string
    author: string
    slug: string
    excerpt: string
    published: string
    lastUpdated: string
    timeToRead: number
  }
}

const ArticleWrapper = styled.article`
  position: relative;
  background: ${({ theme }) => theme.colors.darkSecondary};
  padding: 1rem;
  border-radius: 12px;
`
const ArticleHeaderWrapper = styled.h3``
const ArticleBodyWrapper = styled.div`
  ${({ theme }) => `
    color:${theme.colors.onLightPrimary}
    `};
  position: relative;
  width: 100%;
  z-index: 3;
`

const PostPreview = ({ post }: any) => {
  const thumbnail = getImage(post.image)
  const emojis = formatReadingTimeToEmoji(post.timeToRead)
  return (
    <ArticleWrapper id={post.slug}>
      <ArticleHeaderWrapper>
        <Link to={post.slug}>{post.title}</Link>
        <p>{post.published}</p>
        <p>{post.lastUpdated}</p>
        <span role="img">
          {emojis.list.map((emoji, i) => (
            <Emoji
              symbol={emoji}
              label={emojis.name}
              key={`${emojis.name}_${i}`}
            />
          ))}
        </span>
        <span>&bull; {`${post.timeToRead}min`}</span>
      </ArticleHeaderWrapper>
      <ArticleBodyWrapper>
        <div>
          <p>{post.excerpt}</p>
          <GatsbyImage image={thumbnail} alt={post.imageAlt} />
        </div>

        <Link to={post.slug}>read this post &rarr;</Link>
      </ArticleBodyWrapper>
    </ArticleWrapper>
  )
}

export default PostPreview
