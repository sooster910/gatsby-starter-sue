// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.com/docs/node-apis/
//  */
const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

// const _ = require('lodash')
// exports.createPages = async ({ actions, graphql, reporter }) => {
//   const { createPage } = actions
//   const categoryTemplate = path.resolve('src/templates/Category.tsx')
//   // const BlogListTemplate = path.resolve("src/templates/BlogList.tsx'")

//   const makeCategoryPage = await graphql(`
//     {
//       tagsGroup: allMdx(limit: 2000) {
//         group(field: frontmatter___tags) {
//           fieldValue
//           totalCount
//         }
//       }
//     }
//   `).then((result) => {
//     if (result.errors) {
//       reporter.panicOnBuild(`Error while running GraphQL query.`)
//       return
//     }
//     // Extract tag data from query
//     const categories = result.data.tagsGroup.group
//     console.log(
//       'categores query',
//       categories.map((v) => v.fieldValue),
//     )
//     // Make tag pages
//     categories.forEach((category) => {
//       actions.createPage({
//         path: `/categories/${_.kebabCase(category.fieldValue)}/`,
//         component: categoryTemplate,
//         context: {
//           category: category.fieldValue,
//         },
//       })
//     })
//   })

//   // const makePagination = await graphql(`
//   //   query PagenateQuery {
//   //     allMdx(
//   //       sort: { fields: frontmatter___lastUpdated, order: DESC }
//   //       filter: { frontmatter: { draft: { eq: false } } }
//   //     ) {
//   //       totalCount
//   //     }
//   //   }
//   // `).then((result) => {
//   //   if (result.errors) {
//   //     reporter.panicOnBuild(`Error while running GraphQL query.`)
//   //     return
//   //   }
//   //   const limit = 5
//   //   const totalCount = result.data.allMdx.totalCount
//   //   const pages = Math.ceil(totalCount / limit)

//   //   Array.from({ length: pages }).forEach((_, i) => {
//   //     actions.createPage({
//   //       path: i === 0 ? `/` : `/pages/${i + 1}/`,
//   //       component: path.resolve('./src/templates/BlogList.tsx'),
//   //       context: {
//   //         totalCount,
//   //         skip: i * limit,
//   //         pages,
//   //         currentPage: i + 1,
//   //         limit,
//   //       },
//   //     })
//   //   })
//   // })

//   return Promise.all([makeCategoryPage])
// }

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  // Get All Markdown File For Paging
  const queryAllMarkdownData = await graphql(
    `
      {
        allMdx(
          sort: {
            order: DESC
            fields: [frontmatter___lastUpdated, frontmatter___title]
          }
        ) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `,
  )

  // Handling GraphQL Query Error
  if (queryAllMarkdownData.errors) {
    reporter.panicOnBuild(`Error while running query`)
    return
  }

  // Import Post Template Component
  const PostTemplateComponent = path.resolve(
    __dirname,
    'src/templates/BlogPost.tsx',
  )

  // Page Generating Function
  const generatePostPage = ({
    node: {
      fields: { slug },
    },
  }) => {
    const pageOptions = {
      path: slug,
      component: PostTemplateComponent,
      context: { slug },
    }

    createPage(pageOptions)
  }

  // Generate Post Page And Passing Slug Props for Query
  queryAllMarkdownData.data.allMdx.edges.forEach(generatePostPage)
}
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value: `blog${slug}`,
    })
  }
}
