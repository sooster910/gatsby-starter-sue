import styled from '@emotion/styled'

export const MDX = styled('article')`
  * + * {
    margin-top: 1rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${(props) => props.theme.colors.textColorOnSecondary};
    font-weight: 600;
  }
  h2 {
    font-size: 2rem;
    line-height: 1.875rem;
    font-weight: 500;
    margin-bottom: 1.25rem;
    margin-top: 3.75rem;
  }
  ,
  h3 {
    font-size: 1.375rem;
    line-height: 1.625rem;
    font-weight: 700;
  }
  ,
  h4 {
    font-size: 1.25rem;
    line-height: 1.5rem;
    font-weight: 400;
  }
  ,
  h5 {
    font-size: 1.125rem;
    line-height: 1.5rem;
    font-weight: 700;
  }

  p {
    font-size: 1.125rem;
    line-height: 1.875rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.textColorOnPrimary};
  }
  blockquote {
    font-size: 1.5rem;
    line-height: 2.125rem;
    text-align: center;
    max-width: 36rem;
    margin: 3rem auto;
    border-left: 3px solid ${({ theme }) => theme.colors.primaryActiveColor};
    padding: 1rem;
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.primaryHoverColor};
  }

  em {
    font-style: italic;
  }

  a {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.primaryActiveColor};
  }

  strong {
    font-weight: 700;
  }

  code {
    color: ${(props) => props.theme.colors.textColorOnPrimary};
    padding: 3px 6px;
    font-size: 0.9rem;
    border: 1px solid ${(props) => props.theme.colors.primaryHoverColor};
    border-radius: 4px;
  }

  deckgo-highlight-code {
    --deckgo-highlight-code-font-size: ${({ theme }) => theme.primaryFont};
    --deckgo-highlight-code-line-height: ${({ theme }) =>
      theme.spacings.medium};
    margin: 2rem 0;
  }

  hr {
    border: none;
    border-bottom: 1px solid rgba(214, 210, 196, 0.3);
  }

  img {
    margin: 2rem 0;
  }
  ul > li {
    padding-left: 1.75em;
    position: relative;

    ::before {
      background-color: ${({ theme }) => theme.colors.primaryHoverColor};
      border-radius: 50%;
      content: '';
      height: 0.375em;
      left: 0.25em;
      position: absolute;
      top: 0.6875em;
      width: 0.375em;
    }
  }
  code {
    padding: 2px 5px;
    background: ${({ theme }) => theme.colors.primaryHoverColor};
    color: ${({ theme }) => theme.colors.primaryActiveColor};
    border-radius: 3px;
    font-family: ${({ theme }) => theme.code};
    font-weight: 600;
    border-radius: 7px;
  }
`
