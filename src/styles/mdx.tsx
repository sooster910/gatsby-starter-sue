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
    color: var(--textColorOnSecondary);
    opacity: 0.9;
    a {
      background: none;
    }
  }
  h1,
  h2 {
    letter-spacing: 0.3px;
    border-bottom: 1px solid #3f3f3f;
    padding-bottom: ${({ theme }) => theme.spacings.small};
  }
  h2 {
    font-size: 1.8rem;
    line-height: 2.4rem;
    margin-bottom: 3rem;
    margin-top: 3.75rem;

    &:hover {
      visibility: visible;
    }
  }

  h3 {
    font-size: 1.375rem;
    line-height: 1.625rem;
    margin: 2.5rem 0 1.5rem 0;
  }

  h4 {
    font-size: 1.25rem;
    line-height: 1.5rem;
    margin-bottom: 2rem;
  }

  h5 {
    font-size: 1.125rem;
    line-height: 1.5rem;
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.14rem;
    font-weight: 500;
    color: var(--textColorOnPrimary);
    line-height: 2;
    margin-top: 1rem;
  }
  blockquote {
    font-size: 1.5rem;
    line-height: 2.125rem;
    text-align: left;
    max-width: 36rem;
    margin: 3rem auto;
    border-left: 3px solid var(--primaryActiveColor);
    padding: 1rem;
    border-radius: 3px;
    background: var(--secondaryColor);

    p {
      margin: 0;
    }
  }

  em {
    font-style: italic;
  }

  a {
    text-decoration: none;
    color: var(--textColorOnSecondary);
    background: linear-gradient(transparent 90%, var(--primaryActiveColor) 0);
  }
  a.anchor-header {
    fill: var(--textColorOnPrimary);
    margin-right: 5px;
  }
  strong {
    font-weight: 700;
  }

  /* code {
    color: ${(props) => props.theme.colors.textColorOnPrimary};
    padding: 3px 6px;
    font-size: 0.9rem;
    border: 1px solid ${(props) => props.theme.colors.primaryHoverColor};
    border-radius: 4px;
  } */

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
    display: flex;
    margin: 2rem auto;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  ul > li {
    padding-left: 1.75em;
    position: relative;
    margin: 0;
    ::before {
      background-color: var(--textColorOnPrimary);
      border-radius: 50%;
      content: '';
      height: 0.375em;
      left: 0.25em;
      position: absolute;
      top: 0.6875em;
      width: 0.375em;
    }
  }
  /* ul,
  ol {
    margin-left: ${({ theme }) => theme.spacings.xSmall};
  } */

  code {
    padding: 2px 5px;
    background: #f5f5f5;
    color: var(--code);
    border: 1px solid var(--code);
    border-radius: 3px;
    font-family: ${({ theme }) => theme.code};
    font-weight: 600;
    border-radius: 5px;
    font-size: ${({ theme }) => theme.helperText};
    margin: 0 3px;
  }

  span {
    img {
      box-shadow: none;
      margin: 0;
    }
  }

  table {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  }

  table thead tr {
    background-color: #009879;
    color: #ffffff;
    text-align: left;
  }

  table th,
  table td {
    padding: 12px 15px;
  }

  table tbody tr {
    border-bottom: 1px solid #dddddd;
  }

  table tbody tr:nth-of-type(even) {
    /* background-color: #f3f3f3; */
  }

  table tbody tr:last-of-type {
    border-bottom: 2px solid #009879;
  }

  table tbody tr.active-row {
    font-weight: bold;
    color: #009879;
  }
`
