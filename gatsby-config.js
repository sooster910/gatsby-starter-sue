const siteConfig = require('./siteConfig')

module.exports = {
  siteMetadata: siteConfig,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
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
        name: `gatsby-starter-sue`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },

    // {
    //   resolve: `gatsby-plugin-webfonts`,
    //   options: {
    //     fonts: {
    //       google: [
    //         // {
    //         //   family: 'limelight',
    //         //   variants: ['400'],
    //         // },
    //         {
    //           family: 'Nanum Gothic',
    //           variants: ['500', '700', '800'],
    //         },
    //         {
    //           family: 'Poppins',
    //           variants: ['300', '400'],
    //         },
    //         {
    //           family: 'Jost',
    //           variants: ['400', '700', '800', '700', '800'],
    //         },
    //       ],
    //     },
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-webfonts`,
    //   options: {
    //     fonts: {
    //       google: [
    //         {
    //           family: 'limelight',
    //           variants: ['300', '400', '700'],
    //         },
    //         {
    //           family: 'Zen Antique',
    //           variants: ['400'],
    //         },
    //         {
    //           family: 'Nanum Gothic',
    //           variants: ['400', '700', '800'],
    //         },
    //         {
    //           family: 'Jost',
    //           variants: ['400', '700', '800', '700i', '800i'],
    //         },
    //         {
    //           family: 'Poppins',
    //           variants: ['300', '400'],
    //         },
    //       ],
    //     },
    //   },
    // },
  ],
}
