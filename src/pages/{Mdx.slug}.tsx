import React from 'react'
import { graphql, PageProps, Link } from 'gatsby'
import Layout from '../components/Layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Seo from '../components/Seo'
import MDX from '../styles/mdx'
import Bio from '../components/Bio'
import { BottomNav } from '../components/BottomNav'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const BlogPost = ({ data }: any) => {
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
      <MDX>
        <Seo title="Using TypeScript" description="" />
        <h1>{frontmatter?.title}</h1>
        <p>{frontmatter?.published}</p>
        <p>{frontmatter?.lastUpdated}</p>

        <GatsbyImage image={Gimage} alt={frontmatter.imageAlt} />

        <p>{frontmatter?.excerpt}</p>
        <MDXRenderer>{singlePost?.body}</MDXRenderer>
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        <Bio isProfile={false} />
      </MDX>
      <BottomNav prev={prev} next={next} />
    </Layout>
  )
}

export const query = graphql`
  query BlogPostById($id: String) {
    singlePost: mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        lastUpdated(formatString: "MMMM D, YYYY")
        published(formatString: "MMMM D, YYYY")
        image {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
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
