import * as React from "react";
import { Link } from "gatsby";
import { usePosts } from "../hooks/usePosts";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import PostPreview from "../components/PostPreview";
import Bio from "../components/Bio";
const IndexPage = () => {
  const posts = usePosts();
  return (
    <Layout>
      <Seo title="Home" description="" />
      <Bio isProfile={true} />
      {posts.map((post: any) => {
        return <PostPreview post={post} key={post.slug} />;
      })}
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to Using TypeScript</Link>
        <Link to="/hello-world/">hello world</Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
