import React from 'react';
import { motion } from 'framer-motion';
import { BeforeAndAfterSection, SendApplicationSection } from '../../components';
import { withLayoutContext } from '../../HOCs/withLayoutContext';
import { initialValuesLayoutContext } from '../../contexts/layoutContext';
import { DEFAULT_PAGE_MOTION } from '../../app/motionVariants';
import { DesignDecisions, HowMatch, Preview, Process, Services, Works } from './sections';

const Main = () => {
    return (
        <motion.main variants={DEFAULT_PAGE_MOTION} initial="hidden" animate="visible" exit="hidden">
            <Preview />
            <Works />
            <Services />
            <DesignDecisions />
            <HowMatch />
            <BeforeAndAfterSection />
            <Process />
            <SendApplicationSection isSecondaryColor />
        </motion.main>
    );
};

export default withLayoutContext(Main, {
    ...initialValuesLayoutContext,
    isWithoutMarginTopPage: true,
});
