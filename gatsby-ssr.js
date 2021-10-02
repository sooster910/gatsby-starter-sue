/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it
/** @jsx jsx */
import { jsx, Provider, useTheme } from '@emotion/react';
import Theme from './src/theme/theme';

export const wrapRootElement = ({ element }) => <ThemeProvider theme={Theme}>{element}</ThemeProvider>;
