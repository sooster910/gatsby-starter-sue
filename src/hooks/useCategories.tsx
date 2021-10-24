import { graphql, useStaticQuery } from 'gatsby'

export const useCategories = () => {
  const data: any = useStaticQuery(graphql`
    query groupsPostsByTags {
      allMdx {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `)
  return data?.allMdx?.group
}
