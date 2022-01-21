import React from 'react';

export const initialValuesLoaderContext = {
    isLoading: false,
};

const loaderContext = React.createContext({
    ...initialValuesLoaderContext,
    setIsLoading: () => {},
});

loaderContext.displayName = 'LoaderContext';

export default loaderContext;
