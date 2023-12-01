import * as React from 'react'
import { ReactNode } from 'react'
import { Helmet } from 'react-helmet'
import {
  Jost600WOFF2,
  Jost800WOFF2,
  SpoqaSans600WOFF2,
  SpoqaSans700WOFF2,
} from '../../assets/fonts'
interface BaseTemplateProps {
  title: string
  description: string
  url?: string
  image: string
  children: ReactNode
}

const BaseTemplate: React.FunctionComponent<BaseTemplateProps> = ({
  title,
  description,
  url,
  image,
  children,
}) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>

        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={title} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:site" content="@사용자이름" />
        <meta name="twitter:creator" content="@사용자이름" />
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
      </Helmet>

      {children}
    </>
  )
}

export default BaseTemplate
