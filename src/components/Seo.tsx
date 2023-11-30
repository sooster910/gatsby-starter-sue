/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import {
  SpoqaSans600WOFF2,
  SpoqaSans700WOFF2,
  Jost600WOFF2,
  Jost800WOFF2,
} from '../../assets/fonts/index'
export interface SeoProps {
  title?: string
  description?: string
  lang?: string
  meta?: Array<{ name: string; content: string }>
  titleTemplate?: string
  blogImage?: string
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
  blogImage,
}: SeoProps) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            keywords
            image
            naver
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
  const keywords = site.siteMetadata.keywords
  const image = site.siteMetadata.image
  const naver = site.siteMetadata.naver
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : undefined}
      meta={[
        {
          name: `naver-site-verification`,
          content: naver,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: keywords,
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
          property: `og:image`,
          content: image,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:image`,
          content: image,
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
      <link
        rel="preload"
        as="font"
        href={SpoqaSans700WOFF2}
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href={SpoqaSans600WOFF2}
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href={Jost600WOFF2}
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href={Jost800WOFF2}
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link rel="canonical" href="https://www.hyunsujoo.wiki" />
      <meta name="description" content={metaDescription} />
      <meta name="image" content={blogImage}></meta>
    </Helmet>
  )
}

export default Seo
