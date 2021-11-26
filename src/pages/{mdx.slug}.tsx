import * as React from 'react'
import { graphql, PageProps } from 'gatsby'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'
import { MDX } from '../styles/mdx'
import { css } from '@emotion/react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Bio from '../components/Bio'
import { Twemoji } from '../components/Twemoji'
import { Dates } from '../components/Dates'
import { Comments } from '../components/Comment'
import config from '../../siteConfig'
import styled from '@emotion/styled'
import { Share } from '../components/Share'
import { Pagination } from '../components/Pagination'
import { PageLink } from '../components/links/Link.style'
export type singlePostData = {
  id: string
  timeToRead: number
  frontmatter: {
    title: string
    lastUpdated: string
    published: string
    excerpt: string
    image: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
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

type DataProps = {
  singlePost: singlePostData
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

const BlogPost: React.FunctionComponent<PageProps<DataProps>> = ({ data }) => {
  const shortcodes = { Twemoji }
  const { singlePost, allPost } = data
  const nodes = JSON.parse(JSON.stringify([allPost, ...allPost.nodes]))
  const frontmatter = singlePost?.frontmatter
  const Gimage = getImage(frontmatter.image)
  const curPostId = singlePost.id
  const curIdx = nodes?.findIndex(
    (post: { id: string }) => post.id === curPostId,
  )
  const prev =
    curIdx > 1 && nodes[curIdx - 1] !== undefined ? nodes[curIdx - 1] : -1
  const next =
    curIdx !== -1 && nodes[curIdx + 1] !== undefined ? nodes[curIdx + 1] : -1
  const { utterances } = config?.comments
  const url = typeof window !== 'undefined' ? window.location.href : ''
  const description = frontmatter.excerpt || ''
  const title = frontmatter.title || ''
  return (
    <>
      <Layout headings={singlePost?.headings}>
        <MDXProvider components={shortcodes}>
          <Seo title={title} description={description} />

          <GatsbyImage
            image={Gimage}
            alt={frontmatter.imageAlt}
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
                published={frontmatter?.published}
                updated={frontmatter?.lastUpdated}
                timeToRead={singlePost.timeToRead}
                isPreview={false}
              />
            </StyledPostDate>
            <StyledPostTitle>{frontmatter?.title}</StyledPostTitle>
          </StyledPostHeader>
          <MDX>
            <MDXRenderer>{singlePost?.body}</MDXRenderer>
          </MDX>
          <Share title={frontmatter?.title} url={url} />
          <Bio isProfile={false} />
          {utterances?.enabled && <Comments repo={utterances.repo} />}
          <Pagination>
            <StyledPaginationList>
              {prev !== -1 && (
                <PageLink to={`/${prev.slug}`} direction={'prev'}>
                  {prev?.frontmatter?.title}
                </PageLink>
              )}
            </StyledPaginationList>
            <StyledPaginationList>
              {next !== -1 && (
                <PageLink to={`/${next.slug}`} direction={'next'}>
                  {next?.frontmatter.title}
                </PageLink>
              )}
            </StyledPaginationList>
          </Pagination>
        </MDXProvider>
      </Layout>
    </>
  )
}

export const query = graphql`
  query BlogPostById($id: String) {
    singlePost: mdx(id: { eq: $id }) {
      id
      timeToRead
      frontmatter {
        title
        tags
        lastUpdated(formatString: "ll")
        published(formatString: "ll")
        image {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 420, aspectRatio: 1.7)
          }
        }
        imageAlt
      }
      body
      headings {
        value
        depth
      }
    }
    allPost: allMdx(
      filter: { frontmatter: { draft: { eq: false } } }
      sort: { fields: frontmatter___lastUpdated, order: DESC }
    ) {
      nodes {
        id
        slug
        frontmatter {
          title
          lastUpdated(formatString: "MMMM D, YYYY")
        }
      }
    }
  }
`

export default BlogPost
