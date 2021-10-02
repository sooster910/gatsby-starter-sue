import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { StaticImage } from 'gatsby-plugin-image';

const BioWrapper = styled.div`
    display: flex;
`;

const Summary = styled.p`
    padding-left: ${props => props.theme.spacings.medium};
`;

const Bio = ({ isProfile }) => {
    const data = useStaticQuery(graphql`
        query BioQuery {
            site {
                siteMetadata {
                    author {
                        name
                        summary
                    }
                    social {
                        twitter
                    }
                }
            }
        }
    `);

    // Set these values by editing "siteMetadata" in gatsby-config.js
    const author = data.site.siteMetadata?.author;
    const social = data.site.siteMetadata?.social;

    return (
        <BioWrapper className="bio">
            {isProfile ? (
                <StaticImage
                    className="bio-avatar"
                    layout="fixed"
                    formats={['auto', 'webp', 'avif']}
                    objectFit="cover"
                    src="../images/profilePic.png"
                    quality={95}
                    alt="Profile picture"
                    width={135}
                    height={135}
                    css={css`
                        min-width: ${135}px;
                        border-radius: 100%;
                    `}
                />
            ) : (
                <StaticImage
                    className="bio-avatar"
                    layout="fixed"
                    formats={['auto', 'webp', 'avif']}
                    objectFit="cover"
                    src="../images/profilePic.png"
                    quality={95}
                    alt="Profile picture"
                    width={50}
                    height={50}
                    transformOptions={{ fit: 'cover', cropFocus: 'center' }}
                    css={css`
                        min-width: ${50}px;
                        border-radius: 100%;
                    `}
                />
            )}
            {author?.name && (
                <Summary>
                    Written by <strong>{author.name}</strong> {author?.summary || null}
                    {` `}
                    <a href={`https://twitter.com/${social?.twitter || ``}`}>You should follow them on Twitter</a>
                </Summary>
            )}
        </BioWrapper>
    );
};

export default Bio;
