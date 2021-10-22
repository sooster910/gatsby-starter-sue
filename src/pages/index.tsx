import { usePosts } from '../hooks/usePosts'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import PostPreview from '../components/PostPreview'
import Bio from '../components/Bio'
import React from 'react'
const IndexPage = (): React.ReactElement => {
  const posts = usePosts()

  return (
    <Layout>
      <Seo title="Home" description="" />

      <Bio />
      {posts.map((post: any) => {
        return <PostPreview post={post} key={post.slug} />
      })}
    </Layout>
  )
}

export default IndexPage
