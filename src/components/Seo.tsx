/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
// import {
//   NotoKR500WOFF2,
//   Inter500WOFF2,
//   Inter600WOFF2,
//   SpoqaSans500WOFF2,
// } from '../../assets/fonts/index'
export interface SeoProps {
  title?: string
  description: string
  lang?: string
  meta?: Array<{ name: string; content: string }>
  titleTemplate?: string
}
/**
 *
 * @param param0
 * @returns
 */
function Seo({
  title = '',
  description = '',
  lang = 'en',
  meta = [],
}: SeoProps) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author {
              name
              summary
            }
          }
        }
      }
    `,
  )

  const metaDescription: string = description || site.siteMetadata.description
  const defaultTitle: string = site.siteMetadata?.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : undefined}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author?.name || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      {/* <link
        rel="preload"
        as="font"
        href={NotoKR500WOFF2}
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href={Inter500WOFF2}
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href={Inter600WOFF2}
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href={SpoqaSans500WOFF2}
        type="font/woff2"
        crossOrigin="anonymous"
      /> */}
    </Helmet>
  )
}

export default Seo
