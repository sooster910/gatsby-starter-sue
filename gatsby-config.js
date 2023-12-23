const { resolve } = require('path')
const siteConfig = require('./siteConfig')

module.exports = {
  siteMetadata: siteConfig,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-remove-trailing-slashes`,
    // `gatsby-plugin-preload-fonts`,
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
        plugins: [`gatsby-remark-copy-linked-files`],
        excerpt_separator: `<!--end-->`,
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
          'gatsby-remark-gifs',
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },

          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `300`,
              className: `anchor-header`, //classname you want.
              maintainCase: false, // prefer "false"
              removeAccents: true,
              elements: ['h2', 'h3', 'h4'], // headers attached with link
            },
          },
          {
            resolve: `gatsby-remark-highlight-code`,
            options: {
              terminal: 'carbon',
              theme: 'vscode',
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
        name: `gatsby-starter-sue`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://hyunsujoo.wiki',
        sitemap: 'https://hyunsujoo.wiki/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://hyunsujoo.wiki',
        stripQueryString: true,
      },
    },
    //   resolve: `gatsby-plugin-s3`, // {
    //   options: {
    //     bucketName: $AWS_BUCKET_NAME,
    //   },
    // },
    `gatsby-plugin-offline`,
  ],
}
