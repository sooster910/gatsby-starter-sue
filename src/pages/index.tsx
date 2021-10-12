import * as React from 'react'
import { Link } from 'gatsby'
import { usePosts } from '../hooks/usePosts'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import PostPreview from '../components/PostPreview'
import Bio from '../components/Bio'
import { ReactElement } from 'react'

const IndexPage = (): ReactElement => {
  const posts = usePosts()

  return (
    <Layout>
      <Seo title="Home" description="" />
      <Bio />
      {posts.map((post: any) => {
        return <PostPreview post={post} key={post.slug} />
      })}
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">
          Go to Using TypeScript We ddhave added type checking for the Gatsby
          default starter without any additional plugins thanks recent
          TypeScript support from Gatsby team. For your reference, all the codes
          are pushed to to the recent TypeScript support from Gatsby team. For
          your reference, all the codes are pushed to
        </Link>
        <Link to="/hello-world/">hello world</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
