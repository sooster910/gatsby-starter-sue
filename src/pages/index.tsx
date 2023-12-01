/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'
import Bio from '../components/Bio'
import { Pagination } from '../components/Pagination'
import PostPreview from '../components/PostPreview'
import Seo from '../components/Seo'
import { PageLink } from '../components/links/Link.style'
import Layout from '../components/Layout'

type IndexPageProps = {
  data: {
    allMdx: {
      edges: PostType[]
    }
  }
}
export type PostType = {
  node: {
    id: string
    fields: {
      slug: string
    }
    frontmatter: {
      title: string
      author: string
      published: string
      lastUpdated: string
      tags: []
      slug: string
      imageAlt: string
      image: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData
        }
      }
    }
    timeToRead: number
    excerpt: string
  }
}

const BlogIndex: React.FunctionComponent<IndexPageProps> = ({ data }) => {
  const { edges } = data?.allMdx
  // const pageQueryResult = data.pageQuery;'
  //   console.log('pageContext', data?.allMarkdownRemark)
  //   const posts = data?.allMdx?.nodes?.map((post) => ({
  //     title: post.frontmatter.title,
  //     author: post.frontmatter.author,
  //     published: post.frontmatter.published,
  //     lastUpdated: post.frontmatter.lastUpdated,
  //     tags: post.frontmatter.tags,
  //     draft: post.frontmatter.draft,
  //     slug: post.frontmatter.slug,
  //     image: post.frontmatter?.image?.childImageSharp,
  //     imageAlt: post.frontmatter?.imageAlt,
  //     timeToRead: post.timeToRead,
  //     excerpt: post.excerpt,
  //   }))
  //   const { currentPage, pages } = pageContext
  //   const nextPage = `/pages/${currentPage + 1}`
  //   const prevPage = currentPage - 1 === 1 ? `/` : `/pages/${currentPage - 1}`
  //   const isFirstPage = currentPage === 1
  //   const isLastPage = currentPage === pages

  return (
    <Layout>
      <Seo title="주현수 개발 블로그" description="주현수 개발 블로그" />
      <Bio isProfile={true} />
      {edges.map((post) => {
        return <PostPreview post={post?.node} key={post?.node?.id} />
      })}
      {/* <Pagination>
        <li>
          {!isFirstPage && (
            <PageLink to={prevPage} direction={'prev'}>
              Prev
            </PageLink>
          )}
        </li>
        <li>
          Page {currentPage} Of {pages}
        </li>
        <li>
          {!isLastPage && (
            <PageLink to={nextPage} direction={'next'}>
              Next
            </PageLink>
          )}
        </li> */}
      {/* </Pagination> */}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMdx(
      sort: { fields: frontmatter___lastUpdated, order: DESC }
      filter: { frontmatter: { draft: { eq: false } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            slug
            author
            tags
            published(formatString: "ll")
            lastUpdated(formatString: "ll")
            imageAlt
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
          }
          excerpt(truncate: true)
          timeToRead
        }
      }
    }
  }
`

export default BlogIndex
