/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
/** @jsx jsx */
import { jsx, ThemeProvider, useTheme } from '@emotion/react';
import Theme from './src/theme/theme';
import { Global, css } from '@emotion/react';
import { preToCodeBlock } from 'mdx-utils';

const GlobalStyles = () => {
    const theme = useTheme();
    console.log('theme', theme);
    return (
        <Global
            styles={css`
                * {
                    box-sizing: border-box;
                    margin: 0;
                }
                * + * {
                    margin-top: 1rem;
                }
                html,
                body {
                    margin: 0;
                    font-family: ${theme.font.main};
                    background: ${theme.colors.darkPrimary};
                    color: ${theme.colors.onLightSecondary};
                    font-size: 16px;
                    line-height: 1.4;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: auto;
                }
                /* remove margin for main div noscript tag*/
                > div {
                    margin-top: 0;
                }
                h1,
                h2,
                h3,
                h4,
                h5,
                h6 {
                    // color: #222;
                    color: ${theme.colors.onLightSecondary};
                    line-height: 1.1;
                    + * {
                        margin-top: 0.5rem; //anything comes afte heading
                    }
                }

                strong {
                    color: #222;
                }

                li {
                    margin-top: 0.25rem;
                }
                /* edit code block style */
                deckgo-highlight-code {
                    --deckgo-highlight-code-font-size: 1.2rem;
                }

                a {
                    color: ${theme.colors.onLightSecondary};
                }
            `}
        />
    );
};

export const wrapRootElement = ({ element }) => (
    <ThemeProvider theme={Theme}>
        <GlobalStyles />
        {element}
    </ThemeProvider>
);
