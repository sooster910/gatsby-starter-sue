import { graphql, useStaticQuery } from 'gatsby';

export const usePosts = () => {
    const data: any = useStaticQuery(graphql`
        query {
            allMdx(
                sort: { fields: frontmatter___lastUpdated, order: DESC }
                limit: 5
                filter: { frontmatter: { draft: { eq: false } } }
            ) {
                nodes {
                    frontmatter {
                        title
                        slug
                        author
                        published(formatString: "dddd DD MMMM YYYY")
                        lastUpdated(formatString: "dddd DD MMMM YYYY")
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
                    timeToRead
                }
            }
        }
    `);

    return data?.allMdx?.nodes?.map((post: any) => ({
        title: post.frontmatter.title,
        author: post.frontmatter.author,
        published: post.frontmatter.published,
        lastUpdated: post.frontmatter.lastUpdated,
        draft: post.frontmatter.draft,
        slug: post.frontmatter.slug,
        image: post.frontmatter?.image?.childImageSharp,
        imageAlt: post.frontmatter?.imageAlt,
        timeToRead: post.timeToRead,
        excerpt: post.excerpt,
    }));
};
