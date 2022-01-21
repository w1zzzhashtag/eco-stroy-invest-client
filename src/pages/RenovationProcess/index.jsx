import React from 'react';
import { motion } from 'framer-motion';
import { DEFAULT_PAGE_MOTION } from '../../app/motionVariants';
import { withLayoutContext } from '../../HOCs/withLayoutContext';
import { initialValuesLayoutContext } from '../../contexts/layoutContext';
import { Container, InfoList, Title } from '../../components';
import { RENOVATION_PROCESS_DATA } from '../../datas/renovationProcessData';

const RenovationProcess = () => {
    return (
        <motion.main variants={DEFAULT_PAGE_MOTION} initial="hidden" animate="visible" exit="hidden">
            <Container width={60} widthLG={80} widthMD={100}>
                <Title>
                    <b>Как мы делаем ремонт: этапы и подход</b>
                </Title>
                <InfoList data={RENOVATION_PROCESS_DATA} isFullFilled isNumeric />
            </Container>
        </motion.main>
    );
};

export default withLayoutContext(RenovationProcess, {
    ...initialValuesLayoutContext,
    isFullScreenPage: true,
    isWithoutBackButton: false,
});
