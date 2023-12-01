import * as React from 'react'
// import { css } from '@emotion/react'
import { css } from '@emotion/css'
import styled from '@emotion/styled'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image' // post page
import { StyledPostPreview, TagLink } from './links/Link.style'
import { Dates } from './Dates'
import _ from 'lodash'
import { PostType } from '../pages'
import { FileNode } from 'gatsby-plugin-image/dist/src/components/hooks'

const StyledArticle = styled.article`
  position: relative;
  background-color: var(--secondaryColor);
  border: 5px solid #000;
  padding: 1.5rem 2rem;
  border-radius: 12px;
  margin-top: 1rem;
  cursor: pointer;
  transition: background-color 0.1s ease;

  &:hover {
    background-color: var(--secondaryHoverColor);
  }
`

const StyledArticleHeader = styled.div``
const StyledArticleBody = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--textColorOnPrimary);
  position: relative;
  width: 100%;
  margin-top: 1rem;
`
const StyledArticleHeaderTitle = styled.h5`
  font-family: ${({ theme }) => theme.primaryFont};
  text-transform: 'uppercase';
`
interface PostPreviewProps {
  post: PostType['node']
}

const PostPreview = ({ post }: PostPreviewProps): React.ReactElement => {
  const thumbnail = getImage(post?.frontmatter?.image as FileNode)
  return (
    <StyledArticle id={post.id}>
      <StyledPostPreview to={post?.fields?.slug}>
        <StyledArticleHeader>
          <StyledArticleHeaderTitle>
            {post?.frontmatter?.title}
          </StyledArticleHeaderTitle>
          <object>
            <ul>
              {post?.frontmatter?.tags?.map((tag) => (
                <li
                  key={tag}
                  className={css({
                    textDecoration: 'none',
                    display: 'inline',
                  })}
                >
                  <TagLink
                    to={`/categories/${_.kebabCase(tag)}/`}
                    css={css`
                      padding: 4px 7px;
                      border-radius: 4px;
                    `}
                  >
                    {tag}
                  </TagLink>
                </li>
              ))}
            </ul>
          </object>
          <Dates
            isPreview={true}
            published={post?.frontmatter?.published}
            updated={post?.frontmatter?.lastUpdated || ''}
            timeToRead={post?.timeToRead}
          />
        </StyledArticleHeader>
        <StyledArticleBody>
          <GatsbyImage
            image={thumbnail as IGatsbyImageData}
            alt={post?.frontmatter?.imageAlt}
            className={css`
              border-radius: 12px;
              width: 150px;
              -webkit-mask-image: -webkit-radial-gradient(white, black);
            `}
          />
          <p
            className={css`
              width: 70%;
            `}
          >
            {post?.excerpt}
          </p>
        </StyledArticleBody>
      </StyledPostPreview>
    </StyledArticle>
  )
}

export default PostPreview
