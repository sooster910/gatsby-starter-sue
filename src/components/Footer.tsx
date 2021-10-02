import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Link } from 'gatsby';
import { jsx } from '@emotion/react';

const Footer = () => (
    <footer
        style={{
            marginTop: `2rem`,
        }}
    >
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
    </footer>
);

export default Footer;
