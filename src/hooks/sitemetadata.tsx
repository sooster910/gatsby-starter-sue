import { graphql, useStaticQuery } from 'gatsby'

const useSiteMetadata = () => {
  const data: any = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          shareButtons {
            facebook
            linkedIn
            reddit
            twitter
            line
          }
        }
      }
    }
  `)
  return data?.site?.siteMetadata
}

export default useSiteMetadata
