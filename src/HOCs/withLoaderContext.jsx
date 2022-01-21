import React, { useContext } from 'react';
import LoaderContext from './../contexts/loaderContext';

export const withLoaderContext = (Component) => {
    // eslint-disable-next-line react/display-name
    return (props) => {
        const contextValues = useContext(LoaderContext);
        return <Component {...props} {...contextValues} />;
    };
};
