/** @jsx jsx */
import * as React from 'react'
import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image' // post page
import { StyledPostPreview } from './links/Link.style'
import { Dates } from './Dates'
export interface PostPreviewProps {
  post: {
    title: string
    author: string
    slug: string
    excerpt: string
    published: string
    lastUpdated: string
    timeToRead: number
    imageAlt: string
    image: IGatsbyImageData
  }
}

const StyledArticle = styled.article`
  position: relative;
  background-color: transparent;
  box-shadow: ${({ theme }) => theme.shadows.shadow1};
  padding: 1.5rem 2rem;
  border-radius: 12px;
  margin-top: 1rem;
  cursor: pointer;
  transition: background-color 0.1s ease-out;

  &:hover {
    background-color: rgb(247, 247, 247);
  }
`

const StyledArticleHeader = styled.div``
const StyledArticleBody = styled.div`
  display: flex;
  justify-content: space-between;
  ${({ theme }) => `
    color:${theme.colors.textColorOnPrimary}
    `};
  position: relative;
  width: 100%;
  margin-top: 1rem;
`

const PostPreview = ({ post }: PostPreviewProps): React.ReactElement => {
  const thumbnail = getImage(post.image)

  return (
    <StyledArticle id={post.slug}>
      <StyledPostPreview to={`/${post.slug}/`}>
        <StyledArticleHeader>
          <h3>{post.title}</h3>
          <Dates
            isPreview={true}
            published={post.published}
            updated={post.lastUpdated}
            timeToRead={post.timeToRead}
          />
        </StyledArticleHeader>
        <StyledArticleBody>
          <GatsbyImage
            image={thumbnail}
            alt={post.imageAlt}
            css={css`
              border-radius: 12px;
              width: 150px;
            `}
          />
          <p
            css={css`
              width: 70%;
            `}
          >
            {post.excerpt}
          </p>
        </StyledArticleBody>
      </StyledPostPreview>
    </StyledArticle>
  )
}

export default PostPreview
