import React from 'react';
import { Breadcrumbs } from '../components';

export const withBreadcrumbs = (Component) => {
    // eslint-disable-next-line react/display-name
    return (props) => (
        <>
            <Breadcrumbs />
            <Component {...props} />
        </>
    );
};
