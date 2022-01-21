import React, { useContext, useEffect } from 'react';
import LayoutContext, { initialValuesLayoutContext } from '../contexts/layoutContext';

export const withLayoutContext = (Component, values) => {
    // eslint-disable-next-line react/display-name
    return (props) => {
        const layoutContext = useContext(LayoutContext);

        useEffect(() => {
            layoutContext.setLayoutContextValues((prev) => ({
                ...prev,
                ...values,
            }));
            return () => {
                layoutContext.setLayoutContextValues((prev) => ({
                    ...prev,
                    ...initialValuesLayoutContext,
                }));
            };
        }, []);
        return <Component {...props} />;
    };
};
