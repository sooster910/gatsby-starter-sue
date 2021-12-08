import * as React from 'react'
import PostPreview from '../components/PostPreview'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Bio from '../components/Bio'
import Seo from '../components/Seo'
import { Pagination } from '../components/Pagination'
import { PageLink } from '../components/links/Link.style'
import { IGatsbyImageData } from 'gatsby-plugin-image'

type BlogListData = {
  pageContext: {
    pages: number
    currentPage: number
  }
  data: {
    allMdx: {
      nodes: {
        frontmatter: {
          title: string
          author: string
          published: string
          lastUpdated: string
          tags: []
          draft: boolean
          slug: string
          image: IGatsbyImageData
          imageAlt: string
        }
        timeToRead: number
        excerpt: string
      }[]
    }
  }
}

const BlogList: React.FunctionComponent<BlogListData> = ({
  pageContext,
  data,
}) => {
  const posts = data?.allMdx?.nodes?.map((post) => ({
    title: post.frontmatter.title,
    author: post.frontmatter.author,
    published: post.frontmatter.published,
    lastUpdated: post.frontmatter.lastUpdated,
    tags: post.frontmatter.tags,
    draft: post.frontmatter.draft,
    slug: post.frontmatter.slug,
    image: post.frontmatter?.image?.childImageSharp,
    imageAlt: post.frontmatter?.imageAlt,
    timeToRead: post.timeToRead,
    excerpt: post.excerpt,
  }))

  const { currentPage, pages } = pageContext
  const nextPage = `/pages/${currentPage + 1}`
  const prevPage = currentPage - 1 === 1 ? `/` : `/pages/${currentPage - 1}`
  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === pages

  return (
    <Layout>
      <Seo title="주현수 개발 블로그" description="주현수 개발 블로그" />
      <Bio isProfile={true} />
      {posts.map((post) => {
        return <PostPreview post={post} key={post.slug} />
      })}
      <Pagination>
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
        </li>
      </Pagination>
    </Layout>
  )
}

export default BlogList

export const pageQuery = graphql`
  query pageQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: frontmatter___lastUpdated, order: DESC }
      limit: $limit
      skip: $skip
      filter: { frontmatter: { draft: { eq: false } } }
    ) {
      nodes {
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
`
