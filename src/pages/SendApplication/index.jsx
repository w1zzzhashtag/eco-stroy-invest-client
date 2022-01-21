import React from 'react';
import { motion } from 'framer-motion';
import { DEFAULT_PAGE_MOTION } from '../../app/motionVariants';
import { Container, SendApplicationForm } from '../../components';
import { withLayoutContext } from '../../HOCs/withLayoutContext';
import { initialValuesLayoutContext } from '../../contexts/layoutContext';
import { useLocation } from 'react-router-dom';
import classes from './sendApplication.module.scss';

const SendApplication = () => {
    const location = useLocation();
    return (
        <motion.main
            variants={DEFAULT_PAGE_MOTION}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={classes.wrapper}
        >
            <Container width={45} widthLG={70} widthMD={90} widthSM={100}>
                <SendApplicationForm variant={location.state?.variant} />
            </Container>
        </motion.main>
    );
};

export default withLayoutContext(SendApplication, {
    ...initialValuesLayoutContext,
    isFullScreenPage: true,
    isWithoutBackButton: false,
});
