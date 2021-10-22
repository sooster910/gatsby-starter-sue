const siteConfig = require('./siteConfig')

module.exports = {
  siteMetadata: siteConfig,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts the following options, all of which are defined by `@emotion/babel-plugin` plugin.
        // The values for each key in this example are the defaults the plugin uses.
        sourceMap: true,
        autoLabel: 'dev-only',
        labelFormat: `[local]`,
        cssPropOptimization: true,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt_separator: `<!--end-->`,
        plugins: [],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-highlight-code`,
            options: {
              terminal: 'carbon',
              theme: 'monokai',
              lineNumbers: true,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },

    // {
    //   resolve: `gatsby-plugin-google-fonts`,
    //   options: {
    //     fonts: [
    //       `Inter : 400,500,600,700,`,
    //       `source sans pro:300,400,400i,700`,
    //       `Noto Sans KR:400,500,700,400i`,
    //       // `Patua One:400`,
    //       `JetBrains Mono:400,500`,
    //       `Lato : 700`, // you can also specify font weights and styles
    //     ],
    //     display: 'swap',
    //   },
    // },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
