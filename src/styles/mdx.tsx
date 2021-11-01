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
    font-weight: 600;
  }
  h2 {
    font-size: 2rem;
    line-height: 1.875rem;
    margin-bottom: 2.4rem;
    margin-top: 3.75rem;

    &:hover {
      visibility: visible;
    }
    a {
      ::before {
        position: absolute;
        top: 0;
        left: 0;
        transform: translateX(-100%);
        padding-right: 4px;
      }

      svg {
        position: absolute;
        top: 0;
        left: 0;
        transform: translateX(-100%);
        padding-right: 4px;
        visibility: hidden;
      }
    }
  }

  h3 {
    font-size: 1.375rem;
    line-height: 1.625rem;
    margin-bottom: 2rem;
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
    font-size: 1.125rem;
    line-height: 1.875rem;
    font-weight: 500;
    color: var(--textColorOnPrimary);
    margin-bottom: 3rem;
  }
  blockquote {
    font-size: 1.5rem;
    line-height: 2.125rem;
    text-align: center;
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
    background: linear-gradient(transparent 60%, var(--primaryActiveColor) 0);
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
    margin: 2rem 0;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  ul > li {
    padding-left: 1.75em;
    position: relative;

    ::before {
      background-color: var(--primaryHoverColor);
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
    background: #f5f5f5;
    color: var(--secondaryColor);
    border: 1px solid var(--secondaryColor);
    border-radius: 3px;
    font-family: ${({ theme }) => theme.code};
    font-weight: 600;
    border-radius: 7px;
  }
`
