import React from 'react';
import { graphql, PageProps, Link } from 'gatsby';
import Layout from '../components/Layout';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Seo from '../components/Seo';
import MDX from '../theme/mdx';
import Bio from '../components/Bio';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'; // post page

const BlogPost = ({ data }: any) => {
    const post = data.mdx;
    console.log('post', post);
    const Gimage = getImage(data.mdx.frontmatter.image);

    return (
        <Layout>
            <MDX>
                <Seo title="Using TypeScript" description="" />
                <h1>{post?.frontmatter?.title}</h1>
                <p>{post?.frontmatter?.published}</p>
                <p>{post?.frontmatter?.lastUpdated}</p>

                <GatsbyImage image={Gimage} alt={post.frontmatter.imageAlt} />

                <p>{post?.frontmatter?.excerpt}</p>
                <MDXRenderer>{post?.body}</MDXRenderer>
                {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
                <Bio isProfile={false} />
                <Link to="/">&larr; Back to all posts</Link>
            </MDX>
        </Layout>
    );
};

export const query = graphql`
    query BlogPostById($id: String) {
        mdx(id: { eq: $id }) {
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
    }
`;
export default BlogPost;
