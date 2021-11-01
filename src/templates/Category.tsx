import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import PostPreview from '../components/PostPreview'
import Bio from '../components/Bio'
import { IGatsbyImageData } from 'gatsby-plugin-image'

export type CategoryData = {
  pageContext: {
    category: string
  }
  data: {
    allMdx: {
      totalCount: number
      edges: [
        {
          node: {
            frontmatter: {
              title: string
              slug: string
              author: string
              published: string
              lastUpdated: string
              tags: string[]
              image: {
                childImageSharp: {
                  gatsbyImageData: IGatsbyImageData
                }
              }
              imageAlt: string
            }
            excerpt: string
            timeToRead: number
          }
        },
      ]
    }
  }
}

export const query = graphql`
  query getPostByTagg($category: String) {
    allMdx(
      sort: { fields: [frontmatter___lastUpdated], order: DESC }
      limit: 5
      filter: {
        frontmatter: { draft: { eq: false }, tags: { in: [$category] } }
      }
    ) {
      totalCount
      edges {
        node {
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
                  width: 150
                  layout: FIXED
                  blurredOptions: { width: 100 }
                  placeholder: BLURRED
                  transformOptions: { cropFocus: CENTER }
                  aspectRatio: 1.6
                )
              }
            }
            imageAlt
          }
          excerpt(truncate: true)
          timeToRead
        }
      }
    }
  }
`

const Category: React.FunctionComponent<CategoryData> = ({
  pageContext,
  data,
}) => {
  const { category } = pageContext
  const { edges } = data.allMdx
  const postData = edges.map((edge) => ({
    title: edge?.node?.frontmatter?.title,
    author: edge?.node?.frontmatter.author,
    published: edge?.node?.frontmatter.published,
    lastUpdated: edge?.node?.frontmatter.lastUpdated,
    tags: edge?.node?.frontmatter?.tags,
    slug: edge?.node?.frontmatter.slug,
    image: edge?.node?.frontmatter?.image?.childImageSharp,
    imageAlt: edge?.node?.frontmatter?.imageAlt,
    timeToRead: edge?.node?.timeToRead,
    excerpt: edge?.node?.excerpt,
  }))

  return (
    <Layout>
      <Seo title={`"${category}" tag`} description={''} />
      <Bio isProfile={true} />

      {postData.map((post) => (
        <PostPreview post={post} key={post.slug} />
      ))}
    </Layout>
  )
}

export default Category
