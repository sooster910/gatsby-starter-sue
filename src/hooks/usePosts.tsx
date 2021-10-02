import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
    const data: any = useStaticQuery(graphql`
        query {
            allMdx(sort: { fields: frontmatter___date, order: DESC }) {
                nodes {
                    frontmatter {
                        title
                        slug
                        author
                        image {
                            childImageSharp {
                                gatsbyImageData(
                                    width: 150
                                    layout: FIXED
                                    blurredOptions: { width: 100 }

                                    placeholder: BLURRED

                                    transformOptions: { cropFocus: CENTER }

                                    aspectRatio: 1.49
                                )
                            }
                        }
                        imageAlt
                    }
                    excerpt(truncate: true)
                }
            }
        }
    `);

    return data?.allMdx?.nodes?.map((post: any) => ({
        title: post.frontmatter.title,
        author: post.frontmatter.author,
        slug: post.frontmatter.slug,
        image: post.frontmatter?.image?.childImageSharp,
        imageAlt: post.frontmatter?.imageAlt,
        excerpt: post.excerpt,
    }));
};

export default usePosts;
