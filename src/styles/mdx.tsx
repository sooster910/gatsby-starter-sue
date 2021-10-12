import styled from '@emotion/styled'

const MDX = styled('article')`
  * + * {
    margin-top: 1rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${(props) => props.theme.colors.onLightSecondary}};
  }

  h1 {
    font-size: 2.25rem;
    line-height: 2.5rem;
    font-weight: 400;
  }
  ,
  h2 {
    font-size: 1.5rem;
    line-height: 1.875rem;
    font-weight: 400;
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
    font-weight: 400;
    color: ${(props) => props.theme.colors.onLightSecondary};
  }
  blockquote {
    font-size: 1.5rem;
    line-height: 2.125rem;
    text-align: center;
    max-width: 36rem;
    margin: 3rem auto;
    border-left: 5px solid ${(props) => props.theme.colors.background_light};
    padding-left: 1rem;
  }

  em {
    font-style: italic;
  }

  a {
    text-decoration: underline;
    color: ${(props) => props.theme.colors.onLightPrimary};
  }

  strong {
    font-weight: 700;
  }

  code {
    color: ${(props) => props.theme.colors.pink};
    padding: 3px 6px;
    font-size: 0.9rem;
    border: 1px solid ${(props) => props.theme.colors.background_pink};
    border-radius: 4px;
  }

  deckgo-highlight-code {
    --deckgo-highlight-code-font-size: ${(props) => props.theme.font.size.f_18};
    --deckgo-highlight-code-line-height: ${(props) =>
      props.theme.spacings.medium};
  }

  hr {
    border: none;
    border-bottom: 1px solid rgba(214, 210, 196, 0.3);
  }
`

export default MDX
