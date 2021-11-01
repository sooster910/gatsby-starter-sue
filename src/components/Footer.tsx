import styled from '@emotion/styled'
import * as React from 'react'
import siteConfig from '../../siteConfig'

const StyledFooter = styled('footer')`
  margin-top: 4rem;
  padding: 2rem 0;
  text-align: center;
  border-top: 1px solid var(--sharpOutlineColor);

  a {
    text-decoration: none;
    color: var(--textColorOnPrimary);
    background: linear-gradient(transparent 60%, var(--primaryActiveColor) 0);
  }
`
const Footer = (): React.ReactElement => (
  <StyledFooter>
    <p>
      Copyright ©{' '}
      <a
        href={`https://www.github.com/${siteConfig?.social?.github?.accountName}`}
        target="_blank"
        rel="noreferrer"
      >
        {siteConfig.author.name}
        {` `}
      </a>
      {new Date().getFullYear()},
    </p>
    <p>
      Built with
      {` `}
      <a
        href="https://github.com/sooster910/gatsby-blog-sue"
        target="_blank"
        rel="noopener noreferrer"
      >
        gatsby-blog-sue
      </a>
    </p>
  </StyledFooter>
)

export default Footer
