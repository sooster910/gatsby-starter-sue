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
  border-bottom: 1px solid var(--sharpOutlineColor);
  margin-bottom: 3em;
`
const StyledPostTitle = styled.h1`
  line-height: 3.5rem;
  font-family: var(--primaryFont);
  font-weight: 800;
  /* letter-spacing: 2px; */
  text-align: center;
  padding-top: 2rem;
  &::after {
    content: '';
    position: absolute;
    max-width: 30%;
    top: 10px;
    border-bottom: 1px solid var(--sharpOutlineColor);
  }
`
const StyledPostDate = styled.div``

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
  console.log('cureindx', curIdx)
  console.log('nodes', nodes)
  const prev =
    curIdx > 1 && nodes[curIdx - 1] !== undefined ? nodes[curIdx - 1] : -1
  const next =
    curIdx !== -1 && nodes[curIdx + 1] !== undefined ? nodes[curIdx + 1] : -1
  console.log('prev', prev)
  const { utterances } = config?.comments
  const url = typeof window !== 'undefined' ? window.location.href : ''
  const description = frontmatter.excerpt || ''
  return (
    <>
      <Layout headings={singlePost?.headings}>
        <MDXProvider components={shortcodes}>
          <Seo title="Using TypeScript" description={description} />

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
            <li>
              {prev !== -1 && (
                <PageLink to={`/${prev.slug}`} direction={'prev'}>
                  {prev?.frontmatter?.title}
                </PageLink>
              )}
            </li>
            <li>
              {next !== -1 && (
                <PageLink to={`/${next.slug}`} direction={'next'}>
                  {next?.frontmatter.title}
                </PageLink>
              )}
            </li>
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
