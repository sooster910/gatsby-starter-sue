import { graphql, useStaticQuery } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'

export const useAvatar = (): IGatsbyImageData => {
  const data = useStaticQuery(graphql`
    query getPostList {
      allFile(filter: { name: { eq: "profilePic" } }) {
        nodes {
          childImageSharp {
            gatsbyImageData(
              width: 320
              height: 320
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
              transformOptions: { fit: COVER }
            )
          }
          relativePath
        }
      }
    }
  `)

  return data?.allFile.nodes?.[0]?.childImageSharp
}
