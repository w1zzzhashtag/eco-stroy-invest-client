import React from 'react';

// withoutMarginTop - удаляет верхний отступ, чтобы header ложился на страницу
// isFullScreenPage - убирает header и удаляет верхний отступ
export const initialValuesLayoutContext = {
    isFullScreenPage: false,
    isWithoutMarginTopPage: false,
    isWithoutBackButton: true,
};

const layoutContext = React.createContext({
    ...initialValuesLayoutContext,
    setLayoutContextValues: () => {},
});

layoutContext.displayName = 'LayoutContext';

export default layoutContext;
