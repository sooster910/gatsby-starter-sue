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
import { PrevNextNav } from '../components/prevNextNav/PrevNextNav'
import { Dates } from '../components/Dates'
import { Comments } from '../components/Comment'
import config from '../../siteConfig'
import styled from '@emotion/styled'
import { Share } from '../components/Share'
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
}
interface Nodes {
  id: string
  slug: string
  frontmatter: {
    title: string
    lastUpdated: string
  }
}

export type AllPostData = {
  allMdx: {
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
type nodes = {
  id: string
  slug: string
  frontmatter: {
    title: string
    lastUpdated: string
  }
}[]
export type allPostData = {
  allMdx: {
    nodes: nodes
  }
}
type DataProps = {
  singlePost: singlePostData
  allPost: AllPostData
}

const StyledPostHeader = styled.div`
  position: relative;
  padding-bottom: 2.4em;
  border-bottom: 1px solid ${({ theme }) => theme.colors.sharpOutlineColor};
  margin-bottom: 3em;
`
const StyledPostTitle = styled.h1`
  font-size: 3rem;
  line-height: 3.5rem;
  font-family: ${(props) => props.theme.primaryFont};
  font-weight: 600;
  letter-spacing: 2px;
  text-align: center;
  padding-top: 2rem;
`
const StyledPostDate = styled.div``
const BlogPost: React.FunctionComponent<PageProps<DataProps>> = ({ data }) => {
  const shortcodes = { Twemoji }
  const { singlePost, allPost: { nodes } = [] } = data
  const frontmatter = singlePost?.frontmatter
  const Gimage = getImage(frontmatter.image)
  const curPostId = singlePost.id
  const curIdx = nodes?.findIndex((post) => post.id === curPostId)
  const prev =
    curIdx !== -1 && nodes[curIdx - 1] !== undefined ? nodes[curIdx - 1] : -1
  const next =
    curIdx !== -1 && nodes[curIdx + 1] !== undefined ? nodes[curIdx + 1] : -1
  const { utterances } = config?.comments
  const url = typeof window !== 'undefined' ? window.location.href : ''
  const description = frontmatter.excerpt || ''
  return (
    <Layout>
      <MDXProvider components={shortcodes}>
        <Seo title="Using TypeScript" description="" />
        <GatsbyImage
          image={Gimage}
          alt={frontmatter.imageAlt}
          css={css`
            border-radius: 12px;
          `}
          style={{
            display: 'table',
            margin: '0 auto',
          }}
        />

        <StyledPostHeader>
          <StyledPostTitle>{frontmatter?.title}</StyledPostTitle>
          <StyledPostDate>
            <Dates
              published={frontmatter?.published}
              updated={frontmatter?.lastUpdated}
              timeToRead={singlePost.timeToRead}
              isPreview={false}
            />
          </StyledPostDate>
        </StyledPostHeader>

        {/*<p>{frontmatter?.excerpt}</p>*/}
        <MDX>
          <MDXRenderer>{singlePost?.body}</MDXRenderer>
        </MDX>
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        <Share title={frontmatter?.title} url={url} description={description} />

        <Bio isProfile={false} />

        <PrevNextNav prev={prev} next={next} />
      </MDXProvider>

      {utterances?.enabled && <Comments repo={utterances.repo} />}
    </Layout>
  )
}

export const query = graphql`
  query BlogPostById($id: String) {
    singlePost: mdx(id: { eq: $id }) {
      id
      timeToRead
      frontmatter {
        title
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
