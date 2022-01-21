import React, { useState } from 'react';
import cn from 'classnames';
import { BackButton, FeedbackBar, Footer, Header } from '../index';
import LayoutContext, { initialValuesLayoutContext } from '../../contexts/layoutContext';
import LoaderContext, { initialValuesLoaderContext } from '../../contexts/loaderContext';
import classes from './layout.module.scss';

const Layout = ({ children }) => {
    const [layoutContextValues, setLayoutContextValues] = useState(initialValuesLayoutContext);
    const [loaderContextValues, setLoaderContextValues] = useState(initialValuesLoaderContext);

    return (
        <LayoutContext.Provider
            value={{
                ...layoutContextValues,
                setLayoutContextValues,
            }}
        >
            <LoaderContext.Provider
                value={{
                    ...loaderContextValues,
                    setIsLoading: setLoaderContextValues,
                }}
            >
                <div className={classes.wrapper}>
                    {!layoutContextValues.isFullScreenPage && <Header />}
                    {!layoutContextValues.isWithoutBackButton && <BackButton />}
                    <div
                        className={cn(classes.content, {
                            [classes.isFullScreenPage]: layoutContextValues.isFullScreenPage,
                            [classes.withoutMarginTopPage]: layoutContextValues.isWithoutMarginTopPage,
                        })}
                    >
                        {children}
                    </div>
                    {!layoutContextValues.isFullScreenPage && <Footer />}
                    {!layoutContextValues.isFullScreenPage && <FeedbackBar />}
                </div>
            </LoaderContext.Provider>
        </LayoutContext.Provider>
    );
};

export default Layout;
