import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'
import { MDX } from '../styles/mdx'
import { css } from '@emotion/react'
import Layout from '../components/Layout'
import Bio from '../components/Bio'
import { Twemoji } from '../components/Twemoji'
import { Dates } from '../components/Dates'
import Comment from '../components/Comment'
import config from '../../siteConfig'
import styled from '@emotion/styled'
import { Pagination } from '../components/Pagination'
import { PageLink } from '../components/links/Link.style'
import { PostType } from '../pages/index'
import BaseTemplate from './BaseTemplate'
export type singlePostData = {
  id: string
  timeToRead: number
  frontmatter: {
    title: string
    lastUpdated: string
    published: string
    excerpt: string
    slug: string
    image: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
      publicURL: string
    }
    imageAlt: string
  }
  body: string
  tableOfContents: {
    items: []
  }
  headings: []
}

export type AllPostData = {
  allPost: {
    nodes: {
      id: string
      slug: string
      frontmatter: {
        title: string
        lastUpdated: string
      }
    }[]
  }
}

type BlogPostProps = {
  data: {
    allMdx: {
      edges: SingleBlogPostType[]
    }
  }
}
type HeadingType = {
  headings: {
    value: string
    depth: number
  }[]
}

type BodyType = {
  body: string
}

interface BaseNavigatePostType {
  fields: {
    slug: string
  }
  id: string
  frontmatter: {
    title: string
  }
}
type SingleBlogPostType = {
  next: BaseNavigatePostType
  previous: BaseNavigatePostType
  node: PostType['node'] & HeadingType & BodyType
}
// interface BlogPostType extends PostType, HeadingType,HtmlType {}

// type BlogPostType = PostType & HeadingType
const StyledPostHeader = styled.div`
  position: relative;
  padding-bottom: 2.4em;
`
const StyledPostTitle = styled.h1`
  line-height: 3.5rem;
  font-family: var(--primaryFont);
  font-weight: 800;
  /* letter-spacing: 2px; */
  text-align: center;
  padding-top: 2rem;
`
const StyledPostDate = styled.div``
const StyledPaginationList = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primaryActiveColor);
  width: 48%;
  border: 4px solid #000;
  border-radius: 12px;
  padding: 12px;
  background: var(--primaryActiveColor);
  border-radius: 12px;
`

const BlogPost: React.FunctionComponent<BlogPostProps> = ({ data }) => {
  const { edges } = data?.allMdx
  const { next, previous } = edges[0]
  const singlePost = edges[0]?.node

  const shortcodes = { Twemoji }
  // const { singlePost, allPost } = data
  // const nodes = JSON.parse(JSON.stringify([allPost, ...allPost.nodes]))
  // const formatter = singlePost?.frontmatter
  const Gimage = getImage(singlePost?.frontmatter?.image)
  // const curPostId = singlePost.id
  // const curIdx = nodes?.findIndex(
  //   (post: { id: string }) => post.id === curPostId,
  // )
  // const prev =
  //   curIdx > 1 && nodes[curIdx - 1] !== undefined ? nodes[curIdx - 1] : -1
  // const next =
  //   curIdx !== -1 && nodes[curIdx + 1] !== undefined ? nodes[curIdx + 1] : -1
  const { utterances } = config?.comments
  // const url = typeof window !== 'undefined' ? window.location.href : ''
  // const description = formatter.excerpt || ''
  // const title = formatter.title || ''

  return (
    <>
      <BaseTemplate
        description={singlePost?.excerpt}
        title={singlePost?.frontmatter?.title}
        image={singlePost?.frontmatter?.image?.publicURL as string}
      >
        <Layout headings={singlePost?.headings}>
          <MDXProvider components={shortcodes}>
            <GatsbyImage
              image={Gimage}
              alt={singlePost?.frontmatter?.imageAlt}
              css={css`
                border-radius: 12px;
                /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
                box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
                  rgba(0, 0, 0, 0.22) 0px 15px 12px;
              `}
              style={{
                display: 'table',
                margin: '0 auto',
              }}
            />
            <StyledPostHeader>
              <StyledPostDate>
                <Dates
                  published={singlePost?.frontmatter?.published}
                  updated={singlePost?.frontmatter?.lastUpdated}
                  timeToRead={singlePost.timeToRead}
                  isPreview={false}
                />
              </StyledPostDate>
              <StyledPostTitle>
                {singlePost?.frontmatter?.title}
              </StyledPostTitle>
            </StyledPostHeader>
            <MDX>
              <MDXRenderer>{singlePost?.body}</MDXRenderer>
            </MDX>
            <Bio isProfile={false} />
            {utterances?.enabled && <Comment />}
            <Pagination>
              {previous && (
                <StyledPaginationList>
                  <PageLink to={previous.fields.slug} direction={'prev'}>
                    {previous?.frontmatter?.title}
                  </PageLink>
                </StyledPaginationList>
              )}
              {next && (
                <StyledPaginationList>
                  <PageLink to={next.fields.slug} direction={'next'}>
                    {next?.frontmatter.title}
                  </PageLink>
                </StyledPaginationList>
              )}
            </Pagination>
          </MDXProvider>
        </Layout>
      </BaseTemplate>
    </>
  )
}
export default BlogPost

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMdx(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        next {
          fields {
            slug
          }
          id
          frontmatter {
            title
          }
        }
        previous {
          fields {
            slug
          }
          id
          frontmatter {
            title
          }
        }
        node {
          body
          frontmatter {
            title
            slug
            author
            tags
            published(formatString: "ll")
            lastUpdated(formatString: "ll")
            image {
              childImageSharp {
                gatsbyImageData(
                  layout: CONSTRAINED
                  width: 420
                  aspectRatio: 1.7
                )
              }
              publicURL
            }
            imageAlt
          }
          excerpt(truncate: true)
          timeToRead
          headings {
            value
            depth
          }
        }
      }
    }
  }
`
