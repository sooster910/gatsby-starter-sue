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

export type singlePostData = {
  id: string
  timeToRead: number
  frontmatter: {
    title: string
    lastUpdated: string
    published: string
    image: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
    }
    imageAlt: string
  }
  body: string
}

export type allPostData = {
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
type DataProps = {
  singlePost: singlePostData
  allPost: allPostData
}
const BlogPost: React.FC<PageProps<DataProps>> = ({ data }) => {
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

        <MDX>
          <h1>{frontmatter?.title}</h1>
          <Dates
            published={frontmatter?.published}
            updated={frontmatter?.lastUpdated}
            timeToRead={singlePost.timeToRead}
            isPreview={false}
          />
          {/*<p>{frontmatter?.excerpt}</p>*/}

          <MDXRenderer>{singlePost?.body}</MDXRenderer>
          {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
          <Bio isProfile={false} />
        </MDX>
        <PrevNextNav prev={prev} next={next} />
      </MDXProvider>
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
