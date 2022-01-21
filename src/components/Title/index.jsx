import React from 'react';
import classes from './title.module.scss';

const Title = ({ variant, textAlign = 'center', children }) => {
    const attributes = {
        className: classes.title,
        style: {
            textAlign,
        },
    };
    switch (variant) {
        case 'h1':
            return <h1 {...attributes}>{children}</h1>;
        case 'h2':
            return <h2 {...attributes}>{children}</h2>;
        case 'h3':
            return <h3 {...attributes}>{children}</h3>;
        case 'h4':
            return <h4 {...attributes}>{children}</h4>;
        case 'h5':
            return <h5 {...attributes}>{children}</h5>;
        case 'h6':
            return <h6 {...attributes}>{children}</h6>;
        default:
            return <h6 {...attributes}>{children}</h6>;
    }
};

export default Title;
