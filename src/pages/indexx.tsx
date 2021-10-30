import { usePosts } from '../hooks/usePosts'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import PostPreview from '../components/PostPreview'
import Bio from '../components/Bio'
import React, { useEffect, useRef, useState } from 'react'
import BlogList from '../templates/BlogList'
import { Redirect } from '@reach/router'

const IndexPage = (): React.ReactElement => {
  return <Redirect noThrow from="" to="/blog" />
  // const posts = usePosts()
  // return (
  //   <Layout>
  //     <Seo title="Home" description="" />
  //     <Bio isProfile={true} />
  //     <BlogList />
  //     {/* {posts.map((post: any) => {
  //       return <PostPreview post={post} key={post.slug} />
  //     })}{' '} */}
  //   </Layout>
  // )
}

export default IndexPage
