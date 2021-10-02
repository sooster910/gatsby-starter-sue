import React from 'react';

const Avatar = (props: any) => {
    const { url, altText, title } = props;

    const styles = {
        width: '75px',
        height: '75px',
        borderRadius: '50%',
    };

    return <img style={styles} src={url} alt={altText} title={title} />;
};

export default Avatar;
