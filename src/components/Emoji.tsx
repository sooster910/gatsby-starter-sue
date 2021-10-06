import * as React from 'react';

type emojiProps = {
    label?: string;
    symbol?: string;
};

const Emoji = (props: emojiProps) => (
    <span
        className="emoji"
        role="img"
        aria-label={props.label ? props.label : ''}
        aria-hidden={props.label ? 'false' : 'true'}
    >
        {props.symbol}
    </span>
);
export default Emoji;
