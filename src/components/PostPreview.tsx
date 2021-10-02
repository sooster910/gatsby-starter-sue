import React from 'react';
import { css } from '@emotion/react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
// import ReadLink from './read-link';
import * as themeType from '../../emotion';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'; // post page

export interface PostPreviewProps {
    post: {
        title: string;
        author: string;
        slug: string;
        excerpt: string;
    };
}

const ArticleWrapper = styled.article`
    position: relative;
    background: ${({ theme }) => theme.colors.darkSecondary};
    padding: 1rem;
    border-radius: 12px;
`;
const ArticleHeaderWrapper = styled.h3``;
const ArticleBodyWrapper = styled.div`
    ${({ theme }) => `
    color:${theme.colors.onLightPrimary}
    `};
    position: relative;
    width: 100%;
    z-index: 3;
`;

const PostPreview = ({ post }: any) => {
    const thumbnail = getImage(post.image);
    return (
        <ArticleWrapper id={post.slug}>
            <ArticleHeaderWrapper>
                <Link to={post.slug}>{post.title}</Link>
            </ArticleHeaderWrapper>
            <ArticleBodyWrapper>
                <div>
                    <p>{post.excerpt}</p>
                    <GatsbyImage image={thumbnail} alt={post.imageAlt} />
                </div>

                <Link to={post.slug}>read this post &rarr;</Link>
            </ArticleBodyWrapper>
        </ArticleWrapper>
    );
};

export default PostPreview;
