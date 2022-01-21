import React, { useEffect, useState } from 'react';
import classes from './container.module.scss';

const Container = ({ width = 70, widthLG, widthMD, widthSM, children }) => {
    const [calculatedWidth, setCalculatedWidth] = useState(width);

    const getWidth = (w) => {
        const getWidthLG = () => {
            return widthLG || width;
        };
        const getWidthMD = () => {
            return widthMD || getWidthLG();
        };
        const getWidthSM = () => {
            return widthSM || getWidthMD();
        };
        if (w <= 1200 && w > 900) {
            return getWidthLG();
        } else if (w <= 900 && w > 600) {
            return getWidthMD();
        } else if (w <= 600) {
            return getWidthSM();
        } else return width;
    };

    const handleResize = (e) => {
        const newWidth = getWidth(e.target.innerWidth) || width;
        setCalculatedWidth(newWidth);
    };

    useEffect(() => {
        setCalculatedWidth(getWidth(window.innerWidth));
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div style={{ width: `${calculatedWidth}%` }} className={classes.container}>
            {children}
        </div>
    );
};

export default Container;
