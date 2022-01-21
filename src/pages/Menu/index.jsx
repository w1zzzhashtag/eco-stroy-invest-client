import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../app/routes';
import { withLayoutContext } from '../../HOCs/withLayoutContext';
import { initialValuesLayoutContext } from '../../contexts/layoutContext';
import { DEFAULT_PAGE_MOTION } from '../../app/motionVariants';
import { Socials } from '../../components';
import classes from './menu.module.scss';

const Menu = () => {
    return (
        <motion.main
            className={classes.wrapper}
            variants={DEFAULT_PAGE_MOTION}
            initial="hidden"
            animate="visible"
            exit="hidden"
        >
            <nav className={classes.content}>
                <div className={classes.list}>
                    {ROUTES.filter((route) => !!route.title).map((route) => (
                        <Link key={route.path} to={route.path} className={classes.list__item}>
                            {route.title}
                        </Link>
                    ))}
                </div>
            </nav>

            <Socials />
        </motion.main>
    );
};

export default withLayoutContext(Menu, {
    ...initialValuesLayoutContext,
    isFullScreenPage: true,
    isWithoutBackButton: false,
});
