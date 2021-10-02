import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadata = () => {
    const data: any = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                }
            }
        }
    `);
    return data?.site?.siteMetadata;
};

export default useSiteMetadata;
