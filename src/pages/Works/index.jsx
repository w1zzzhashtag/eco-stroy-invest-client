import React from 'react';
import { motion } from 'framer-motion';
import { DEFAULT_PAGE_MOTION } from '../../app/motionVariants';
import { BeforeAndAfterSection, Container, GridList, SendApplicationSection, Title } from '../../components';
import { WORKS } from '../../datas/worskData';
import { withBreadcrumbs } from '../../HOCs/withBreadcrumbs';
import classes from './works.module.scss';

const Works = () => {
    return (
        <motion.main variants={DEFAULT_PAGE_MOTION} initial="hidden" animate="visible" exit="hidden">
            <section className={classes.wrapper}>
                <Container widthLG={90}>
                    <Title variant="h2">
                        <div>
                            <b>Фото ремонтов от «ЭкоСтроИнвест».</b>
                        </div>
                        Посмотрите примеры квартир, где живут наши клиенты
                    </Title>
                    <GridList data={[...WORKS, ...WORKS, ...WORKS]} />
                </Container>
            </section>

            <BeforeAndAfterSection />

            <SendApplicationSection />
        </motion.main>
    );
};

export default withBreadcrumbs(Works);
