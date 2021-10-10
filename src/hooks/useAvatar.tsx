import { graphql, useStaticQuery } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'

export const useAvatar = (): IGatsbyImageData => {
  const data = useStaticQuery(graphql`
    query getPostList {
      allFile(filter: { name: { eq: "profilePic" } }) {
        nodes {
          childImageSharp {
            gatsbyImageData(width: 120, height: 120)
          }
          relativePath
        }
      }
    }
  `)

  return data?.allFile.nodes?.[0]?.childImageSharp
}
